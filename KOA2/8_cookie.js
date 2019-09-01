const Koa = require('koa');
const app = new Koa();

app.use(async ctx=>{
    if(ctx.url==='/sfy'){
        ctx.cookies.set(
            'name','sfy',{  //key和value
                domain:'localhost',
                path:'/sfy',
                maxAge:24*60*60*1000,//有效时长是毫秒
                expires:new Date('2019-12-31'),//失效时间
                httpOnly:false,
                overwrite:false,
            } 
        );
        ctx.body='cookie设置成功';
    }else{
        ctx.body='没设置好';
    }
})

app.listen(3000,()=>{
    console.log('服务在3000端口开启');
})