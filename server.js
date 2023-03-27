const Koa = require('koa');
const static = require('koa-static');
const Router = require('koa-router');
const fs = require('fs');
const app = new Koa();
const router = new Router();
//app.use(static(__dirname + '/docs/.vuepress/dist'))
app.use(static("/Users/lanren/project/iops/front"))
/*
router.get('/', (ctx) => {
    console.log("sss")
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('index.html');
})
app.use(router.routes());
app.use(router.allowedMethods());
*/
//端口
app.listen(80, () => {
    console.log('server is starting at port 80');
})
