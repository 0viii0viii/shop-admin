import express, {Request, Response, NextFunction} from 'express';
import {loginRouter} from "./Route/auth";
import connectDB from "./connection";

const app = express();
// DB Connection
connectDB();

app.listen(8080, () => {
        console.log("server on")
})


app.use("/auth", loginRouter)
