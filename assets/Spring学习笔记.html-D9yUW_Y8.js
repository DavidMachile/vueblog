import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{ae as a,ah as e,am as i,af as l}from"./app-DZKZIC8e.js";const p="/vueblog/assets/spring01-MwQBu3Xl.png",r="/vueblog/assets/spring02-B-oieQ3J.png",t="/vueblog/assets/spring03-CSMlpgG7.png",d="/vueblog/assets/spring04-Ctdznnxr.png",o="/vueblog/assets/spring05-DcLF7ehY.png",c="/vueblog/assets/spring06-QukOE2lr.png",u="/vueblog/assets/spring07-CX66YjK_.png",v="/vueblog/assets/spring08-ZtZCmwut.png",m="/vueblog/assets/spring09-BYkYv4o1.png",g="/vueblog/assets/spring10-CDefu7NE.png",b="/vueblog/assets/spring11-DCd9kShG.png",h="/vueblog/assets/spring12-OY1gXmLy.png",k="/vueblog/assets/spring13-Dg5h_M2O.png",q="/vueblog/assets/spring14-qbI2VVMN.png",f="/vueblog/assets/spring15-BzwzmLht.png",A="/vueblog/assets/spring16-Chb5pdJ5.png",M={};function y(R,s){return l(),a("div",null,[s[0]||(s[0]=e('<h1 id="spring学习笔记" tabindex="-1"><a class="header-anchor" href="#spring学习笔记"><span>Spring学习笔记</span></a></h1><h2 id="一、springmvc简介" tabindex="-1"><a class="header-anchor" href="#一、springmvc简介"><span>一、SpringMVC简介</span></a></h2><h3 id="_1-什么是mvc" tabindex="-1"><a class="header-anchor" href="#_1-什么是mvc"><span>1.什么是MVC</span></a></h3><p>MVC是model view controller的缩写，是一种软件架构模式。</p><ul><li>Model(模型):项目中用于处理程序数据逻辑的部分,负责在数据库中查找和存储数据。</li><li>View（试图）：是项目中将得到的数据进行处理之后，显示给用户一个界面的部分。</li><li>Controller（控制器）：是项目中处理用户交互的部分，负责读取用户的请求，向模型提价请求，读取模型的响应，将数据交给View部分。</li></ul><h3 id="_2-什么是springmvc" tabindex="-1"><a class="header-anchor" href="#_2-什么是springmvc"><span>2.什么是SpringMVC</span></a></h3><p>官方的额描述为： Spring Web MVC 是基于Service API的原始web框架，从一开始就包含在Spring框架中。项目的pom.xml文件如下就是Spring mvc的框架<br><img src="'+p+`" alt="" loading="lazy"></p><h3 id="_3-springmvc的特点" tabindex="-1"><a class="header-anchor" href="#_3-springmvc的特点"><span>3.SpringMVC的特点</span></a></h3><p>Spring MVC项目的创建和Spring boot的创建流程一样，之前创建的Spring Bootx项目就相当于是一个Spring web项目。我们在添加Spring Boot框架的时候，就已经引入了Spring MVC.</p><h2 id="二、-requestmapping注解" tabindex="-1"><a class="header-anchor" href="#二、-requestmapping注解"><span>二、@RequestMapping注解</span></a></h2><h3 id="_1-实现客户端和服务端的连接" tabindex="-1"><a class="header-anchor" href="#_1-实现客户端和服务端的连接"><span>1. 实现客户端和服务端的连接</span></a></h3><h4 id="_1-1-requestmapping注解" tabindex="-1"><a class="header-anchor" href="#_1-1-requestmapping注解"><span>1.1 @RequestMapping注解</span></a></h4><p>@RequestMapping 是Spring web应用程序中最常用的注解之一，他是来注册接口的路由映射的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> 路由映射：所谓的路由映射指的就是，当用户访问一个URL时，将用户的请求对应到程序中某个类的某个方法的过程就叫路由映射。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>@RequestMapping注解参数：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-   value: 指定请求的实际访问地址，value属性是@RequestMapping注解的默认属性，如果只有唯一一个 属性，则可以胜率value字段，如果参数有多个属性，则必须写上value属性名。</span></span>
<span class="line"><span>-   path: 与value同义，他们在源码中相互引用，value和path都是用来作为映射使用的。</span></span>
<span class="line"><span>-   method: 用来指定请求类型，当在一个方法的注解@RequestMapping的参数中写道method = RequestMethod.GET  表示这个方法只支持GET请求</span></span>
<span class="line"><span>-   params：该属性指定，请求中必须包含params属性指定的参数时，才能执行该请求</span></span>
<span class="line"><span>-   headers: 该属性指定，请求中包含header值，才能执行该请求 </span></span>
<span class="line"><span>-   consumes:指定处理请求的提交内容类型（Content-type），才能执行该请求</span></span>
<span class="line"><span>-   produces:指定返回的时内容类型，返回的内容类型必须是request请求中所包含的类型，这个属性还可以指定返回值的类型。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-requestmapping的简单使用" tabindex="-1"><a class="header-anchor" href="#_1-2-requestmapping的简单使用"><span>1.2 @RequestMapping的简单使用</span></a></h4><ul><li>@RequestMapping既可以来修饰类，也可以修饰方法，当同时修饰类和方法时，类上的 @RequestMapping注解的参数value/path,表示的是URL中的一级路由，方法上的参数的value/path表示URL的二级路由。</li><li><pre><code>@RequestMapping注解默认情况下支持GET和POST请求。  
</code></pre></li></ul><p>下面我们创建一个类，来实现客户端和spring程序的连接，使用浏览器来本地请求。验证@RequestMapper 注解既可以修饰类 也可以修饰方法和@RequestMapper注解默认支持GET和 POST请求</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.example.demo2.controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RequestMapping;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RestController;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/test&quot;)</span></span>
<span class="line"><span>public class HelloWorldController {</span></span>
<span class="line"><span>    @RequestMapping(&quot;/hello&quot;)</span></span>
<span class="line"><span>    public String showHello() {</span></span>
<span class="line"><span>        return &quot;sayhello&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们使用url为<a href="http://localhost:8080/test/hello%E7%94%A8apipost%E8%BF%9B%E8%A1%8Cget%E5%92%8Cpost%E8%AF%B7%E6%B1%82%E3%80%82" target="_blank" rel="noopener noreferrer">http://localhost:8080/test/hello用apipost进行get和post请求。</a><br><img src="`+r+'" alt="" loading="lazy"><br><img src="'+t+`" alt="" loading="lazy"><br> 当我们可以设置@ RequestMapping注解的method属性值为RequestMethod.POST,表示这个方法只支持post请求</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.example.demo2.controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RequestMapping;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RequestMethod;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RestController;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/test&quot;)</span></span>
<span class="line"><span>public class HelloWorldController {</span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/hello&quot;,method = RequestMethod.POST)</span></span>
<span class="line"><span>    public String showHello() {</span></span>
<span class="line"><span>        return &quot;sayhello&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt="" loading="lazy"><br><img src="'+o+'" alt="" loading="lazy"><br> @ RequestMapping 支持设置多级目录</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    @RequestMapping(value = &quot;/hello/mvc&quot;,method = RequestMethod.POST)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_1-3使用-getmapping和-postmapping注解来实现http连接" tabindex="-1"><a class="header-anchor" href="#_1-3使用-getmapping和-postmapping注解来实现http连接"><span>1.3使用@GetMapping和 @PostMapping注解来实现HTTP连接</span></a></h4><p>@GetMapping注解只能实现Get请求，@PostMapping只能实现POST请求.</p><hr><p>注意⚠️：@GetMapping和@PostMapping 这里只有一个属性value ，不用“/”.<br> eg: @GetMapping(&quot;hello&quot;)</p><hr><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.example.demo2.controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.GetMapping;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RequestMapping;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RestController;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/test&quot;)</span></span>
<span class="line"><span>public class HelloWorldController {</span></span>
<span class="line"><span>    @GetMapping(&quot;hello&quot;)</span></span>
<span class="line"><span>    public String showHello() {</span></span>
<span class="line"><span>        return &quot;sayhello&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、获取参数" tabindex="-1"><a class="header-anchor" href="#三、获取参数"><span>三、获取参数</span></a></h3><h4 id="_1-实现获取单个参数" tabindex="-1"><a class="header-anchor" href="#_1-实现获取单个参数"><span>1.实现获取单个参数</span></a></h4><ul><li>1.使用servlet的写法（getparmeter）来实现获取单个参数</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.example.demo2.controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import jakarta.servlet.http.HttpServletRequest;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.GetMapping;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RequestMapping;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RestController;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/test&quot;)</span></span>
<span class="line"><span>public class HelloWorldController {</span></span>
<span class="line"><span>    @RequestMapping(&quot;/getname&quot;)</span></span>
<span class="line"><span>    public String getName(HttpServletRequest request) {</span></span>
<span class="line"><span>        return &quot;name:&quot; + request.getParameter(&quot;name&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>2.使用更简单的获取单个参数的方式</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.example.demo2.controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import jakarta.servlet.http.HttpServletRequest;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.GetMapping;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RequestMapping;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RestController;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/test&quot;)</span></span>
<span class="line"><span>public class HelloWorldController {</span></span>
<span class="line"><span>    @RequestMapping(&quot;/getname&quot;)</span></span>
<span class="line"><span>    public String getName(String name) {</span></span>
<span class="line"><span>        return &quot;name:&quot; + name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-实现获取对象" tabindex="-1"><a class="header-anchor" href="#_2-实现获取对象"><span>2.实现获取对象</span></a></h3><p>上面获取单个参数的方式，当参数个数固定的时候可以使用，但是如果参数个数不确定，随时都需要添加参数的时候，我们这个时候可以使用获取对象的方式来获取参数，前端没有对象的概念，传递的都是对象的属性，后端代码中需要创建一个（eg:用户）类的对象，用来接收前端传递过来的属性的值。</p><p>User 类</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.example.demo2.controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class User {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private  int sex;</span></span>
<span class="line"><span>    private  int id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setName(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setId(int id) {</span></span>
<span class="line"><span>        this.id = id;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public int getId() {</span></span>
<span class="line"><span>        return id;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setSex(int sex) {</span></span>
<span class="line"><span>        this.sex = sex;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public int getSex() {</span></span>
<span class="line"><span>        return sex;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserController类</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.example.demo2.controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.stereotype.Controller;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Controller</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>//@RestController</span></span>
<span class="line"><span>public class UserController {</span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/user&quot;,method = RequestMethod.GET)</span></span>
<span class="line"><span>    public String submitInfo(User kkk){</span></span>
<span class="line"><span>        return &quot;name:&quot;+kkk.getName()+&quot;sex:&quot;+kkk.getSex()+&quot;id:&quot;+kkk.getId();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>参照上面写法，当然，也可以将对象生命在当前类中，比如声明book类如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.example.demo2.controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.stereotype.Controller;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class  Book{</span></span>
<span class="line"><span>    private  String bookname;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setBookname(String bookname) {</span></span>
<span class="line"><span>        this.bookname = bookname;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getBookname() {</span></span>
<span class="line"><span>        return bookname;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@Controller</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>//@RestController</span></span>
<span class="line"><span>public class UserController {</span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/user&quot;,method = RequestMethod.GET)</span></span>
<span class="line"><span>    public String submitInfo(User kkk){</span></span>
<span class="line"><span>        return &quot;name:&quot;+kkk.getName()+&quot;sex:&quot;+kkk.getSex()+&quot;id:&quot;+kkk.getId();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/book&quot;,method = RequestMethod.GET)</span></span>
<span class="line"><span>    public String submitInfo(Book mybook){</span></span>
<span class="line"><span>        return &quot;书名：&quot;+mybook.getBookname();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-requestparam参数必传设置" tabindex="-1"><a class="header-anchor" href="#_3-requestparam参数必传设置"><span>3.@RequestParam参数必传设置</span></a></h3><p>使用@RequestParam注解之后，那么这个属性就变成了必传参数了，不传这个参数就会报错，原因是因为@RequestParam注解中有一个required属性等于true，表示这个参数是必传的，我们只需要设置这个属性为false即可解决必传问题</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@RequestMapping(&quot;/name&quot;)</span></span>
<span class="line"><span>    public String name(@RequestParam(value = &quot;n&quot;,required = false) String name){</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-接收json对象-requestbody" tabindex="-1"><a class="header-anchor" href="#_4-接收json对象-requestbody"><span>4.接收json对象(@RequestBody)</span></a></h3><p>这里只需要使用@RequestBody就可以拿到前端传递的json对象</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    @RequestMapping(&quot;/addinfo&quot;)</span></span>
<span class="line"><span>    public  User addByJson(@RequestBody User user){</span></span>
<span class="line"><span>        return user;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_5-获取url中参数-pathvariable" tabindex="-1"><a class="header-anchor" href="#_5-获取url中参数-pathvariable"><span>5.获取URL中参数（@Pathvariable）</span></a></h3><p>之前我们是通过URL中的查询字符串的部分获取的参数，但有些类似掘金的URL一样：<a href="https://juejin.cn/post/7363220159505104923%EF%BC%8C%E5%AE%83%E6%B2%A1%E6%9C%89%E9%80%9A%E8%BF%87%E6%9F%A5%E8%AF%A2%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%96%B9%E5%BC%8F%E4%BC%A0%E9%80%92%E3%80%82" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7363220159505104923，它没有通过查询字符串的方式传递。</a></p><ul><li>1.从前端获取一个参数</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@RequestMapping(&quot;/detail/{id}&quot;)</span></span>
<span class="line"><span>    public Integer detail(@PathVariable(&quot;id&quot;) Integer id){</span></span>
<span class="line"><span>        return id;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>2.从前端获取多个参数</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@RequestMapping(&quot;/detail/{id}/{name}&quot;)</span></span>
<span class="line"><span>    public String detail(@PathVariable(&quot;id&quot;) Integer id,@PathVariable(&quot;name&quot;) String name){</span></span>
<span class="line"><span>        return &quot;id:&quot;+id+&quot;name:&quot;+name;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_6-上传文件" tabindex="-1"><a class="header-anchor" href="#_6-上传文件"><span>6.上传文件</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@RequestMapping(&quot;/file&quot;)</span></span>
<span class="line"><span>    public String upload(@RequestPart(&quot;myfile&quot;)MultipartFile file) throws IOException {</span></span>
<span class="line"><span>        String path = &quot;/Users/Documents/dsz111.jpg&quot;;</span></span>
<span class="line"><span>        file.transferTo(new File(path));</span></span>
<span class="line"><span>        return path;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@RequestPart用于将multiparty/form-data类型映射到控制器处理方法的参数中。<br> 这里@RequestPart(&quot;file&quot;)表示从请求中获取名为&quot;file&quot;的文件，长传的文件将被存储在file对象中。这里代码表示将上传得到的文件存储为dsz111.jpg。<br><img src="`+q+'" alt="" loading="lazy"><br><img src="'+f+`" alt="" loading="lazy"><br> 但是这样编写的后端代码存在问题，就是每次访问服务器，服务器保留下的图片名字都一样，这样就会被覆盖掉，只保留下了最后一个文件。这是不完善的。<br> 解决办法为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>     * 解决文件覆盖问题</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @RequestMapping(&quot;/upload&quot;)</span></span>
<span class="line"><span>    public  String uploadfile(@RequestPart(&quot;myfile&quot;)MultipartFile file) throws  IOException{</span></span>
<span class="line"><span>        String name = UUID.randomUUID().toString().replace(&quot;-&quot;,&quot;&quot;);</span></span>
<span class="line"><span>        String fileName = file.getOriginalFilename();</span></span>
<span class="line"><span>        String fileExtension = new File(fileName).getName().substring(fileName.lastIndexOf(&quot;.&quot;) + 1);</span></span>
<span class="line"><span>        System.out.println(&quot;name:--------&quot;+name+&quot;file:&quot;+file.getOriginalFilename()+&quot;ext:&quot;+fileExtension);</span></span>
<span class="line"><span>        String path = &quot;/Users/Documents/&quot;+name;</span></span>
<span class="line"><span>        file.transferTo(new File(path+&quot;.&quot;+fileExtension));</span></span>
<span class="line"><span>        return path;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',69)),i(`##### 本文参考网站：https://blog.csdn.net/m0_73067372/article/details/132219027
`)])}const S=n(M,[["render",y]]),C=JSON.parse(`{"path":"/posts/%E5%8D%9A%E5%AE%A2/Spring%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/Spring%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html","title":"Spring学习笔记","lang":"zh-CN","frontmatter":{"description":"Spring学习笔记 一、SpringMVC简介 1.什么是MVC MVC是model view controller的缩写，是一种软件架构模式。 Model(模型):项目中用于处理程序数据逻辑的部分,负责在数据库中查找和存储数据。 View（试图）：是项目中将得到的数据进行处理之后，显示给用户一个界面的部分。 Controller（控制器）：是项目中...","head":[["meta",{"property":"og:url","content":"https://davidmachile.github.io/vueblog/vueblog/posts/%E5%8D%9A%E5%AE%A2/Spring%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/Spring%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"daisz'blog"}],["meta",{"property":"og:title","content":"Spring学习笔记"}],["meta",{"property":"og:description","content":"Spring学习笔记 一、SpringMVC简介 1.什么是MVC MVC是model view controller的缩写，是一种软件架构模式。 Model(模型):项目中用于处理程序数据逻辑的部分,负责在数据库中查找和存储数据。 View（试图）：是项目中将得到的数据进行处理之后，显示给用户一个界面的部分。 Controller（控制器）：是项目中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-05-26T07:58:16.000Z"}],["meta",{"property":"article:modified_time","content":"2026-05-26T07:58:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring学习笔记\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-05-26T07:58:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"daisz\\",\\"url\\":\\"https://github.com/DavidMachile\\"}]}"]]},"git":{"createdTime":1779782296000,"updatedTime":1779782296000,"contributors":[{"name":"daisz","username":"daisz","email":"daisz@chsi.com.cn","commits":1,"url":"https://github.com/daisz"},{"name":"Claude Opus 4.7","username":"","email":"noreply@anthropic.com","commits":1}]},"readingTime":{"minutes":6.14,"words":1843},"filePathRelative":"posts/博客/Spring学习笔记/Spring学习笔记.md","localizedDate":"2026年5月26日","excerpt":"\\n<h2>一、SpringMVC简介</h2>\\n<h3>1.什么是MVC</h3>\\n<p>MVC是model view controller的缩写，是一种软件架构模式。</p>\\n<ul>\\n<li>Model(模型):项目中用于处理程序数据逻辑的部分,负责在数据库中查找和存储数据。</li>\\n<li>View（试图）：是项目中将得到的数据进行处理之后，显示给用户一个界面的部分。</li>\\n<li>Controller（控制器）：是项目中处理用户交互的部分，负责读取用户的请求，向模型提价请求，读取模型的响应，将数据交给View部分。</li>\\n</ul>\\n<h3>2.什么是SpringMVC</h3>","autoDesc":true}`);export{S as comp,C as data};
