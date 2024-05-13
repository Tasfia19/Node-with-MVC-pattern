const koa= require("koa");
const {koaBody} =require("koa-body");
const router = require("./router");
const responseHandler = require("./handler/response");

const app =new koa();

app.use(koaBody({includeUnparsed:true}));
app.use(router.routes());
app.use(router.allowedMethods());
app.use(responseHandler());

app.listen(3002,()=>{
console.log("server is listening on 3002")
});