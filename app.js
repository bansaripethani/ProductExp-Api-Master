//includes
const express=require("express");
const app=express();
const ProductRouter=require("./routes/ProductRouter");
const morgan=require("morgan");
const helmet=require("helmet")
const cors=require("cors")
const cookieparser=require("cookie-parser")
const jwtlib=require("./libs/jwt");

//app setting
app.set("view engine","pug");
app.set("views","./views");

//middlewares
app.use(morgan("combined"))
app.use(helmet())
app.use(cors())
app.use(cookieparser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//routers
app.use("/products",ProductRouter);
//app.use("/books",jwtlib.verify,BookRouter);
//app.use("/users",UserRouter);
//app.get("/gettoken",jwtlib.sign)
//server 
app.listen(8000)