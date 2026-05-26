# YMTApp 技术总结

## 项目概览

一亩田（YMT）农业B2B交易平台iOS客户端，Objective-C为主体语言，部署目标iOS 9.0，CocoaPods管理依赖，约3900个源文件。

---

## 1. 架构设计

### 1.1 Mediator/路由层
- `YMTMediator` 实现基于URL的路由跳转，使用 `ymtpage://` 自定义scheme，支持页面间参数传递 (`?key=value#tabIndex`)
- `startup_update.json` 作为页面路由配置表，实现 page_id → native_page_name 的映射，支持服务端动态下发页面配置
- 支持免登录路由白名单、页面动画控制、页面展示类型（push/present/一键登录）等策略

### 1.2 服务化架构
- 全项目采用 `+sharedInstance` 单例模式管理核心服务（Chat、Push、Log、Config等）
- 通过 `YMTAppDelegateService` 集中管理App生命周期初始化，解耦AppDelegate

### 1.3 多Target构建体系
- 8个Build Target：dev-enterprice / test-enterprice / dis-enterprice / dis-appstore，每个再分 debug / product / pre-product
- 通过 `.xcconfig` + 独立 plist + 条件编译宏（Pchs/*.h）区分环境
- `abstract_target 'share_pods'` 实现CocoaPods多target共享依赖

---

## 2. 稳定性与容灾

### 2.1 Crash防护
- `YMTCrashHook` 集成 AvoidCrash 库，对 NSArray / NSMutableArray / NSDictionary / NSMutableDictionary 做方法交换，拦截插入nil、越界、类型不匹配导致的崩溃
- 对 `NSNull`/`NSNumber`/`NSString` 等类型做 unrecognized selector 防护
- Crash发生时通过 `AvoidCrashNotification` 回传错误名称、定位、原因，按类型（data_nil / data_illegal / data_type_error）分级上报日志
- 结合 Bugly + KSCrash 做崩溃收集，自定义 `YMTUncaughtExceptionHandler`

### 2.2 内存泄漏检测
- 条件编译 `#ifdef LEAKREPORT` 集成 MLeaksFinder
- 白名单机制排除已知系统组件（UIImagePickerController、UITextField等）
- 泄漏信息通过Bugly上报并触发自定义统计埋点

### 2.3 越狱检测
- `YMTJailBreakCheck` 检测设备越狱状态

---

## 3. 网络层

### 3.1 HTTP DNS
- 集成腾讯 MSDKDns 实现HTTP DNS解析，防止DNS劫持
- `YMTNetworkHttpDNSService` 封装DNS服务，支持IPv4/IPv6双栈解析
- `YMTAppHttpsProtocol` 拦截 URLSession 请求做IP直连 + SNI校验

### 3.2 网络状态管理
- Reachability 检测WiFi/蜂窝网络/无网络状态
- `Reachability+Cellular` 扩展获取蜂窝网络详细类型（2G/3G/4G）
- 网络变化时触发长连接保活（`SocketService keepAlive`）

### 3.3 请求层
- AFNetworking 2.5.4 做HTTP请求
- `YMTApi` 封装RESTful请求，JSONModel做模型映射
- 自定义 User-Agent 注入（`YMT-Agent/app_uid:app_type:version`）

---

## 4. 数据持久化

### 4.1 MMKV
- 微信开源mmap KV存储，替代NSUserDefaults存储高频读写配置
- `MMKVBusiness/` 目录管理 homepage_config / weex_config / 通用配置，带CRC校验

### 4.2 FMDB
- SQLite封装，用于数据统计埋点本地存储（`YMTDataStatisticDatabase`）

### 4.3 Keychain
- UICKeyChainStore 存储敏感数据（token、密码等）

### 4.4 文件系统
- `YMTFileSliceManager` 大文件分片上传
- `YMTLocalLogServer` 本地日志记录，支持按模块名分类

---

## 5. 日志系统

- `YMTLogService` 统一日志入口，支持DDLogFormatter自定义格式
- Bugly日志收集 + 本地日志分片上传（`YMTLogUploadService`）
- `YMTVerifyParamsLog` 网络请求参数校验日志
- `JSONModel+VerifyParams` 扩展JSONModel做请求/响应参数验证

---

## 6. AOP与Runtime编程

### 6.1 方法交换（Method Swizzling）
- `YMTCrashHook`：交换 Foundation 集合类方法做安全防护
- `UITableViewCell+SelectSwizzling`：Hook cell选中事件做埋点
- `UIImage+MultiFormatSwizzling`：Hook图片加载方法支持WebP
- `UIViewController+YMTVCProfiler`：Hook VC生命周期做性能分析

### 6.2 三方AOP库
- `Aspects`（1.4.1）：Hook任意方法，做横切逻辑注入
- `KVOController`（1.2.0）：Facebook出品的类型安全KVO封装
- `fishhook`（0.2）：Facebook出品，Mach-O符号重绑定

---

## 7. UI与交互

### 7.1 布局
- Masonry（1.1.0）做AutoLayout约束
- SDAutoLayout（2.2.0）做UITableViewCell自动高度

### 7.2 图片
- SDWebImage（3.7.6）做图片异步加载缓存
- 自定义 `YMTWebPURLProtocol` + `YMTWebPDemoDecoder` 实现WebP格式支持（通过NSURLProtocol拦截）

### 7.3 组件
- JXCategoryView：分类滑动视图
- RDVTabBarController：自定义TabBar
- FSCalendar / PGDatePicker：日历/日期选择
- LBXScan：二维码扫描
- DZNEmptyDataSet：空数据占位
- MLLabel：富文本Label
- FDStackView：UIStackView向前兼容

---

## 8. 推送体系

- 多个 `PushMessageListener`（订单、竞价、通用、评论），观察者模式解耦推送消息处理
- `YMTHandlePushMessageService` 处理App冷启动/后台恢复的推送点击
- 本地日志记录所有推送消息原文

---

## 9. 混合开发

### 9.1 Weex
- 集成Weex SDK + BindingX手势 + SocketRocket WebSocket
- 供应发布页、供应详情页等核心业务页面使用Weex动态渲染
- `MMKVBusiness/weexjs.bundle` 预置Weex JS bundle，MMKV缓存线上版本

### 9.2 WebView
- dsBridge（3.0.6）做JS-Native双向通信
- `YMTDWKWebViewController`（WKWebView）、`YMTYBWebViewController`（特定域名兜底）

---

## 10. 支付与第三方集成

- **支付宝**：LLMPay（4.0.5）封装，`paymentService` 统一处理回调
- **微信**：WXApi + UMShare，支持支付、分享、登录
- **一键登录**：天翼账号 TYRZSDK，预取号 + 运营商网关认证
- **腾讯云直播**：TXLiteAVSDK_Professional，License分AppStore/企业版

---

## 11. 数据统计

- 友盟 UMCAnalytics + UMCCommon 做基础DAU/事件统计
- 腾讯 Beacon 做性能/网络监控
- `YMTDataStatisticService` + `YMTDataStatisticDatabase` 自建埋点管道，本地SQLite缓存批量上报
- `YMTConversionRateAnalytics` 转化率分析

---

## 12. 安全

- `RNCryptor-objc` 数据加解密
- `CocoaSecurity` 哈希/MD5/Base64
- `GZIP` 网络传输压缩
- Keychain存储敏感信息
- 越狱检测
- Crash防护防止恶意数据导致崩溃

---

## 13. Category扩展

- `UITextView+Placeholder`：为UITextView添加placeholder功能
- `UIViewController+YMTPresentModeAdapteriOS13`：适配iOS 13 present样式变化
- `UIImagePickerController+ymt_capture`：系统相机/相册封装
- `UIImage+SVGManager`：SVG图片处理
- `UIImage+WebP`：WebP编解码扩展

---

## 14. 工程化

- CocoaPods 管理私有库（YMTApiExtention / YMTBaseServer等）+ 内部Spec仓库
- `post_install` hook 关闭 `COMPILER_INDEX_STORE_ENABLE` 加速编译
- `PROJECT_DIR/Archive/` 存放多环境ExportOptions.plist（企业版/AppStore）
- Shell脚本：`inferScanAndReport.sh`（静态分析）、`page_desc_upload.sh`、`svnignore.sh`
- `inhibit_all_warnings!` 全局抑制Pod警告
