import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as e,o as i}from"./app-DRDp7Tuw.js";const t={};function l(r,n){return i(),a("div",null,n[0]||(n[0]=[e(`<p>cocoapods 导入三方库</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>  pod &#39;YBAttributeTextTapAction&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>头文件添加</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#import &quot;UILabel+YBAttributeTextTapAction.h&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>demo 代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>NSString * showText = @&quot;秦始皇是出生于赵国都城邯郸（今邯郸），并在此度过了少年时期。前247年，13岁时即王位。 前238年，22岁时，在故都雍城举行了国君成人加冕仪式，开始“亲理朝政”，除掉吕不韦、嫪毐等人， 重用李斯、尉缭，自前230年至前221年，先后灭韩、赵、魏、楚、燕、齐六国，wo39岁时完成了统一中国大业，建立起一个以汉族为主体统一的中央集权的强大国家——秦朝，并奠定中国本土的疆域。&quot;;</span></span>
<span class="line"><span>    UILabel *comment = [UILabel new];</span></span>
<span class="line"><span>    comment.textColor = [UIColor redColor];</span></span>
<span class="line"><span>    comment.numberOfLines = 0;</span></span>
<span class="line"><span>    comment.attributedText = [self getAttributeWith:@[@&quot;邯郸&quot;] string:showText orginFont:15 orginColor:[UIColor darkGrayColor] attributeFont:18 attributeColor:[UIColor blueColor]];</span></span>
<span class="line"><span>    [self.view addSubview:comment];</span></span>
<span class="line"><span>    [comment mas_makeConstraints:^(MASConstraintMaker *make) {</span></span>
<span class="line"><span>           make.top.equalTo(@200);</span></span>
<span class="line"><span>        make.left.equalTo(@50);</span></span>
<span class="line"><span>        make.right.equalTo(@-50);</span></span>
<span class="line"><span>       }];</span></span>
<span class="line"><span>    [comment yb_addAttributeTapActionWithStrings:@[@&quot;wo&quot;,@&quot;邯郸&quot;,@&quot;邯郸&quot;] tapClicked:^(UILabel *label, NSString *string, NSRange range, NSInteger index) {</span></span>
<span class="line"><span>        NSLog(@&quot;%@&quot;,string);</span></span>
<span class="line"><span>    }];</span></span>
<span class="line"><span></span></span>
<span class="line"><span> #pragma mark --- 富文本设置</span></span>
<span class="line"><span>- (NSAttributedString *)getAttributeWith:(id)sender</span></span>
<span class="line"><span>                                  string:(NSString *)string</span></span>
<span class="line"><span>                               orginFont:(CGFloat)orginFont</span></span>
<span class="line"><span>                              orginColor:(UIColor *)orginColor</span></span>
<span class="line"><span>                           attributeFont:(CGFloat)attributeFont</span></span>
<span class="line"><span>                          attributeColor:(UIColor *)attributeColor</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    __block  NSMutableAttributedString *totalStr = [[NSMutableAttributedString alloc] initWithString:string];</span></span>
<span class="line"><span>    [totalStr addAttribute:NSFontAttributeName value:[UIFont systemFontOfSize:orginFont] range:NSMakeRange(0, string.length)];</span></span>
<span class="line"><span>    [totalStr addAttribute:NSForegroundColorAttributeName value:orginColor range:NSMakeRange(0, string.length)];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if ([sender isKindOfClass:[NSArray class]]) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        __block NSString *oringinStr = string;</span></span>
<span class="line"><span>        __weak typeof(self) weakSelf = self;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [sender enumerateObjectsUsingBlock:^(NSString *  _Nonnull str, NSUInteger idx, BOOL * _Nonnull stop) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            NSRange range = [oringinStr rangeOfString:str];</span></span>
<span class="line"><span>            [totalStr addAttribute:NSFontAttributeName value:[UIFont systemFontOfSize:attributeFont] range:range];</span></span>
<span class="line"><span>            [totalStr addAttribute:NSForegroundColorAttributeName value:attributeColor range:range];</span></span>
<span class="line"><span>            oringinStr = [oringinStr stringByReplacingCharactersInRange:range withString:[weakSelf getStringWithRange:range]];</span></span>
<span class="line"><span>        }];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }else if ([sender isKindOfClass:[NSString class]]) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        NSRange range = [string rangeOfString:sender];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [totalStr addAttribute:NSFontAttributeName value:[UIFont systemFontOfSize:attributeFont] range:range];</span></span>
<span class="line"><span>        [totalStr addAttribute:NSForegroundColorAttributeName value:attributeColor range:range];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return totalStr;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#pragma mark --- 通过range获取字符串</span></span>
<span class="line"><span>- (NSString *)getStringWithRange:(NSRange)range</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    NSMutableString *string = [NSMutableString string];</span></span>
<span class="line"><span>    for (int i = 0; i &lt; range.length ; i++) {</span></span>
<span class="line"><span>        [string appendString:@&quot; &quot;];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return string;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const o=s(t,[["render",l]]),c=JSON.parse(`{"path":"/posts/%E5%8D%9A%E5%AE%A2/iOS%E5%AD%A6%E4%B9%A0/2020-2-5-%E6%96%87%E5%AD%97%E5%AE%9E%E7%8E%B0%E7%82%B9%E5%87%BB%E8%B7%B3%E8%BD%AC-2020.html","title":"文字实现点击跳转","lang":"zh-CN","frontmatter":{"title":"文字实现点击跳转","date":"2020-02-05T00:00:00.000Z","description":"cocoapods 导入三方库 头文件添加 demo 代码如下：","head":[["meta",{"property":"og:url","content":"https://davidmachile.github.io/vueblog/posts/%E5%8D%9A%E5%AE%A2/iOS%E5%AD%A6%E4%B9%A0/2020-2-5-%E6%96%87%E5%AD%97%E5%AE%9E%E7%8E%B0%E7%82%B9%E5%87%BB%E8%B7%B3%E8%BD%AC-2020.html"}],["meta",{"property":"og:site_name","content":"daisz'blog"}],["meta",{"property":"og:title","content":"文字实现点击跳转"}],["meta",{"property":"og:description","content":"cocoapods 导入三方库 头文件添加 demo 代码如下："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-05-26T07:32:13.000Z"}],["meta",{"property":"article:published_time","content":"2020-02-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2026-05-26T07:32:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文字实现点击跳转\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-05T00:00:00.000Z\\",\\"dateModified\\":\\"2026-05-26T07:32:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"daisz\\",\\"url\\":\\"https://github.com/DavidMachile\\"}]}"]]},"git":{"createdTime":1779780733000,"updatedTime":1779780733000,"contributors":[{"name":"daisz","username":"daisz","email":"daisz@chsi.com.cn","commits":1,"url":"https://github.com/daisz"},{"name":"Claude Opus 4.7","username":"","email":"noreply@anthropic.com","commits":1}]},"readingTime":{"minutes":1.37,"words":412},"filePathRelative":"posts/博客/iOS学习/2020-2-5-文字实现点击跳转-2020.md","localizedDate":"2020年2月5日","excerpt":"<p>cocoapods 导入三方库</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>  pod 'YBAttributeTextTapAction'</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{o as comp,c as data};
