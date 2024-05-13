const responseHandler=()=>{
    return async(ctx,next)=>{
        ctx.response.success=(message,data={})=>{
ctx.status=200;
ctx.body={message,data};
        };
        ctx.response.fail=(message,data={})=>{
            ctx.status=400;
            ctx.body={message,data};
                    };
                    ctx.response.notFound=(message,data={})=>{
                        ctx.status=404;
                        ctx.body={message,data};
                                };
                                ctx.response.unauthorized=(message,data={})=>{
                                    ctx.status=401;
                                    ctx.body={message,data};
                                            };
                    await next();
    };
};

module.exports=responseHandler;