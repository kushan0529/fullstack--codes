// // // // // // class car{
// // // // // //     constructor(name,speed){
// // // // // //         this.name=name
// // // // // //         this.speed=speed
// // // // // //     }
// // // // // //     drive(){
// // // // // //         console.log(`${this.name} car is driving at a speed of ${this.speed} km/h`)
// // // // // //     }
// // // // // // }
// // // // // // const mycar=new car("Audi",120)
// // // // // // console.log(mycar)
// // // // // // const car2=new car("bmw",180)
// // // // // // console.log(car2)
// // // // // // mycar.drive()












// // // // // class car{
// // // // //     constructor(name,speed,price){
// // // // //         this.carname=name
// // // // //         this.topspeed=speed
// // // // //         this.totalprice=price
// // // // //     }
// // // // //     drive(){
// // // // //         console.log(this.carname+" is the car of high price having a price of around "+this.totalprice+"will go speed around"+this.topspeed)
// // // // //     }

// // // // // }
// // // // // const car1=new car("audii",120,"10lakhs")
// // // // // const car2=new car("bmw",180,"50lakhs")
// // // // // car1.drive()













// // // // function car(name,speed){
// // // //     this.myname=name
// // // //     this.topspeed=speed

// // // // }
// // // // car.prototype.drive=function(){
// // // //     return `${this.myname} is a car company which has a top speed of${this.topspeed}`
// // // // }
// // // // const c1=new car("audii",120)
// // // // const c2=new car("bmw",180)
// // // // console.log(c1.drive() )
// // // // console.log(c2.drive())


// // // // class Bankaccount{
// // // //     constructor(Aname,Anumber){
// // // //         this.name=Aname
// // // //         this.no=Anumber
// // // //     }
// // // //     bankinfo(){
// // // //         console.log(`${this.name} - account number is ${this.no}`)
// // // //     }
// // // // }
// // // // const a1=new Bankaccount("SBI 123",123456)
// // // // const a2=new Bankaccount("SBI 678",987654)
// // // // a1.bankinfo()

// // // const http=require("http")
// // // const port=3000
// // // const server=http.createServer((req,res)=>{
// // //     if(req.url=="/"){
// // //         res.end("open the page")
// // //     }
// // //     else if(req.url=="/contact"){
// // //         res.end("9381766241")

// // //     }
// // //     else{
// // //         res.end("not found")
// // //     }
// // // })
// // // server.listen(port,()=>{
// // //     console.log("this is running"+port)
// // // })

// // const express=require("express");
// // const app=express();
// // const port=3030;
// // const users="kushan"
// // app.get("/",(req,res)=>{
// //     res.send("welcome to the website")
// // })
// // app.get("/users",(req,res)=>{
// //     res.json(users)
// // })
// // app.listen(port,()=>{
// //     console.log("server is running on the port"+port)
// // })


// const express=require("express");
// const app=express();
// const port=5050;
// const students = [
//   { id: 1, name: "Alice Johnson", rollNumber: "R001" },
//   { id: 2, name: "Bob Smith", rollNumber: "R002" },
//   { id: 3, name: "Charlie Brown", rollNumber: "R003" },
//   { id: 4, name: "Diana Prince", rollNumber: "R004" }
// ];

// const results = [
//   { rollNumber: "R001", subject: "Math", marks: 85 },
//   { rollNumber: "R001", subject: "Science", marks: 90 },
//   { rollNumber: "R002", subject: "Math", marks: 70 },
//   { rollNumber: "R002", subject: "Science", marks: 75 },
//   { rollNumber: "R003", subject: "Math", marks: 60 },
//   { rollNumber: "R003", subject: "Science", marks: 65 },
//   { rollNumber: "R004", subject: "Math", marks: 95 },
//   { rollNumber: "R004", subject: "Science", marks: 92 }
// ];

// app.get("/students",(req,res)=>{
//     res.send(students)
// })
// app.get("/students/:id",(req,res)=>{
//     const id=req.params.id
//     const student=students.find((ele)=>{
//         return ele.id==id
//     })
// })

// app.listen(port,()=>{
//     console.log("server  is done "+ port)
// })
// const str="javascript";
// let count=0;
// for(i=0;i<str.length;i++){
//   if(str[i]=="t"){
//     count++
//   }
// }
// // console.log(count)
// const str="kushan"
// const str1=str.split( '').reverse().join()
// console.log(str1)
// const result=[];
// function evenorodd(num){

//   for(i=0;i<num.length;i++){
//     if(num[i]%2==0){
//       result.push(num[i])
//     }
    
//   }
// }
// (evenorodd([10,11,12,13,14,15,16]))
// console.log(result)
// const vowels="aeiou"
// const str="kushan"
// let result=[];
// for(i=0;i<str.length;i++){
//   if(vowels.includes(str[i])){
//     result.push(str[i])
//   }
// }
// console.log(result)


const { error } = require("console");
const express=require("express");
const {mongoose}=require("mongoose");
const{type}=require("os");
const app=express();
const port=4040;
app.use(express.json());
async function k(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/new9")
        console.log("connected to db✅✅ ")
    }catch(err){
        console.log("s w w")
    }
}
k()
const MarriageSchema=mongoose.Schema({
    breedName:{
        type:String,
        required:true
    },
    groomName:{
        type:String,
        required:true
    },
    brother:{
        type:String,
        required:true
    }
})
const marriage=mongoose.model("marriage",MarriageSchema)
app.get("/api/employees",async(req,res)=>{
    try{
        const m1= await marriage.find();
        res.json(m1)
    }catch(err){
        res.json({error:"s w w"})
    }
})
app.post("/api/employees",async(req,res)=>{
    const body=req.body;
    try{
        const m2=new marriage(body)
        await m2.save()
        res.json(m2)
        console.log(body)
    } catch(err){
       res.json({error: "s w w"}) 
    }
})
app.get('/api/employees/:empId',async(req,res)=>{
    const empId=req.params.empId;
    try{
        const m3 = await marriage.findById(empId)
        if(!m3){
            res.status(404).json({})
        }
        res.json(m3)
    }catch(err){
        res.status(500).json({error:"s w w"})
    }
})
app.listen(port,()=>{
    console.log("server is runnig on the port"+port)
})


// app.get('/api/employees/empId',async (req,res)=>{
// //     const empId=req.params.empId;
// //     try{
// //         const employee=await Employee.findById(empId);
// //         if(!employee){
// //             return res.status(404).json({})
// //         }
// //         res.json(employee);
// //     } catch(err){
// //         res.status(500).json({error:'s w w'})
// //     }
// // })