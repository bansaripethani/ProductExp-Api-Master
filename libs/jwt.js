// const jwt = require("jsonwebtoken");
// const jewkey = "key1";
// const expsec = 3000;

// const sign=(req,res)=>{
//     const token = jwt.sign({uname:"user1"},jwtkey,{algorithm:"HS256",expiresIn:expsec});
//     console.log(token);
//     res.cookie("token",token,{maxAge:expsec*1000});
//     res.send(token);
// }

// const varify=(req,res,next)=>{
    
//     let token;
//     if(req.headers.authorization)
//     {
//         token = req.headers.authorization.split(" ")[1];
//         console.log("token",token);
//     }
//     else{
//         res.send("provide token");
//     }

//     var payload;
//     try{
//         payload = jwt.varify(token,jwtkey);
//         console.log(payload);

//     }catch(e){
//             if(e instanceof jwt.JsonWebTokenError)
//             {
//                 return res.status(401).end("Invalid token");
//             }
//             else{
//                 return res.status(400).end("bad request");
//             }
//     }
// }
// module.exports={sign,varify};