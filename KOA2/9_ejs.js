const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const path = require('path');

//加载模板
app.use(views(path.join(__dirname,'.views'),{  //文件当前路径
    extension : 'ejs'
}))

app.use(async ctx=>{
    let title = 'hello';
    await ctx.render('index',{
        title,
        list:[
            {name:'html',age:20},
            {name:'css',age:30},
            {name:'js',age:40},
            {name:'koa2',age:50},
        ]
    })
});