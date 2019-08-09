const Koa = require('koa');
const app =new Koa();
const bodyparser = require('koa-bodyparser');

app.use(bodyparser());
app.use(async ctx=>{
    
})