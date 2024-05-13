const {get}=require("../models/user");
exports.get=(ctx)=>{
    try{
        const user=get();
       // console.log("HEllO",ctx);
       const id =ctx.params.id;
       ctx.response.success("user fetched successfully",{...user});
    }
    catch(error){
       // console.log("error",error);
        ctx.response.fail=("NOT successfull",error);
    }
};
exports.getAccount=(ctx)=>{
    try{
        const user=get();
       // console.log("HEllO",ctx);
       const id =ctx.params.id;
       ctx.response.success("fetched successfully",{...user});
    }
    catch(error){
      //  console.log("error",error);
        ctx.response.fail=("NOT successfully done",error);
    }
};
exports.post=(ctx)=>{
    try{
        const user=get();
       // console.log("HEllO",ctx);
       const id =ctx.params.id;
       ctx.response.success("user fetched successfull",{...user});
    }
    catch(error){
       // console.log("error",error);
        ctx.response.fail=("NOT found",error);
    }
};
exports.postError=(ctx)=>{
    try{
        const user=get();
       // console.log("HEllO",ctx);
       const id =ctx.params.id;
       ctx.response.notFound("404 not found",{...user})
    }
    catch(error){
       // console.log("error",error);
        ctx.response.fail=("ERROR",error);
    }
};
exports.postAuthentication=(ctx)=>{
    try{
        const user=get();
       // console.log("HEllO",ctx);
       const id =ctx.params.id;
       ctx.response.unauthorized("unvalid authentication",{...user});
    }
    catch(error){
       // console.log("error",error);
        ctx.response.fail=("INVALID",error);
    }
};
