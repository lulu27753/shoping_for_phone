var app = require('koa')();
var router = require('koa-router')();
var koaBody = require('koa-body')();


// 首页 —— 广告（超值特惠）
var homeAdDate = require('./Home/ad.js')
router.get('/api/homead', function *(next) {
    this.body = homeAdDate
});


// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./Home/list.js')
router.get('/api/homelist/:city/:page', function *(next) {
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前页面' + paramsCity)
    console.log('当前页数' + paramsPage)
    
    this.body = homeListData
});

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword',function *(next) {
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log(`当前页数： ${paramsPage}`)
    console.log(`当前城市： ${paramsCity}`)
    console.log(`当前类别： ${paramsCategory}`)
    console.log(`关键字： ${paramsKeyword}`)

    this.body = searchListData

})

router.post('/api/post', koaBody, function *(next) {
    console.log(this.request.body)
    this.body = JSON.stringify(this.request.body)
});


// 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', function *(next) {
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)

    this.body = searchListData
})

// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
