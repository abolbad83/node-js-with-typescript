
import  express, {Application,Request,Response,NextFunction}  from "express";

const app: Application = express()

const add = (a:number, b:number):number => a + b;
const minus = (c:number,d:number):number => c - d;

app.get('/',(req:Request,res:Response,next:NextFunction) => {
   
    console.log(minus(1,1));
    console.log(add(0.5,0.5));

    
    res.send('hello')
})

app.listen(5000, () => console.log('server runnig'))