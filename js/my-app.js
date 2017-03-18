// 初始化 应用程序 framework7
var myApp = new Framework7();

// 出口选择器引擎定义
var $$ = Dom7;

// Init滑块和它的实例存储在mySwiper变量
var mySwiper = myApp.swiper('.swiper-container', {

    spaceBetween: 30,                       /*间距*/
    pagination : '.swiper-pagination',       /*获取轮播容器*/
    paginationType : 'bullets',              /*点分页显示*/
    loop: true,                              /*开启循环*/
    loopAdditionalSlides : 1,                /*从第几张图开始显示*/
    autoplay: 2500,                          /*每次轮播间隔3秒时间*/
    autoplayDisableOnInteraction : false,    /*用户操作后,继续开启autoplay,默认true为关闭*/
    preloadImages: true,                     /*是否强制加载所有图片*/
    width : window.innerWidth,               /*你的slide宽度,全屏写法*/
    speed : 350,                             /*动画效果时间*/
});

// 添加视图
var mainView = myApp.addView('.view-main', {
    // 因为我们使用固定通过导航条我们可以启用动态导航
    dynamicNavbar: true
});

//给app首页启动动态导航
var homeView = myApp.addView('#home', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

//给个人中心启动动态导航
var homeView = myApp.addView('#personal', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

//给Framework7 demo启动动态导航
var exampleView = myApp.addView('#example', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// 回调为特定页面运行特定的代码,例如关于页面:
myApp.onPageInit('about', function (page) {
    // 链接被点击后运行createContentPage func
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// 生成动态页面
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}