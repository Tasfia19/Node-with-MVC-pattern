const router=require("koa-router");
const {get,post,getAccount}=require("./controllers/users");
const router=new router();
router.get("/users/account",getAccount);
router.get("/users/:id",get);
router.post("/users",post);
router.post("/users/authorize",postAuthentication);
router.post("/users/notFound",postError);
module.exports =router;