// // // const express=require("express");
// // // const app=express();
// // // const port=3050;
// // // const students = [
// // //   { id: 1, name: "Alice Johnson", rollNumber: "R001" },
// // //   { id: 2, name: "Bob Smith", rollNumber: "R002" },
// // //   { id: 3, name: "Charlie Brown", rollNumber: "R003" },
// // //   { id: 4, name: "Diana Prince", rollNumber: "R004" }
// // // ];

// // // const results = [
// // //   { rollNumber: "R001", subject: "Math", marks: 85 },
// // //   { rollNumber: "R001", subject: "Science", marks: 90 },
// // //   { rollNumber: "R002", subject: "Math", marks: 70 },
// // //   { rollNumber: "R002", subject: "Science", marks: 75 },
// // //   { rollNumber: "R003", subject: "Math", marks: 60 },
// // //   { rollNumber: "R003", subject: "Science", marks: 65 },
// // //   { rollNumber: "R004", subject: "Math", marks: 95 },
// // //   { rollNumber: "R004", subject: "Science", marks: 92 }
// // // ];
// // // app.get("/students",(req,res)=>{
// // //     res.json(students)
// // // })
// // // app.get("/students/:id",(req,res)=>{
// // //     const id=req.params.id
// // //     const student=students.find((ele)=>{
// // //         return ele.id === parseInt(id);
// // //     })
// // //     //handling error
// // //     if(!student){
// // //         return res.status(404).json({})
// // //     } 
// // //     res.json(student)
    
// // // })
// // // app.get("/results",(req,res)=>{
// // //     const rollNumber=req.query.rollNumber;
// // //     const studentResults = results.filter((ele)=>{
// // //         return ele.rollNumber == rollNumber;
// // //     });
// // //     if(studentResults.length===0){
// // //         return res.status(404).json([]);
// // //     }res.json(studentResults);
// // // })
// // // app.post("/students", (req, res) => {
// // //   const student = req.body;
// // //   student.id = Date.now(); // Unique ID
// // //   students.push(student); // Add to main students array
// // //   res.status(201).json(student);
// // //   console.log(student);s
// // // });
// // // // const studentno=[]
// // // // app.post("/students",(req,res)=>{
// // // // const student=req.body;
// // // // student.id=Date.now();                  
// // // // students.push(student);
// // // // res.status(201).json(student)
// // // // console.log(student)
     
// // // // })
// // // app.listen(port,()=>{
// // //     console.log("server is running on port"+port)
// // // })


// // // //  const product=req.body;
// // // //     product.id=Date.now();
// // // //     productsDB.push(product);
// // // //     res.status(201).json(product)
// // // //     console.log(product)


// // const express = require("express");
// // const app = express();
// // const port = 3050;

// // // Middleware to parse JSON requests
// // app.use(express.json());

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

// // // Get all students
// // app.get("/students", (req, res) => {
// //   res.json(students);
// // });

// // // Get student by ID
// // app.get("/students/:id", (req, res) => {
// //   const id = parseInt(req.params.id);
// //   const student = students.find((ele) => ele.id === id);

// //   if (!student) {
// //     return res.status(404).json({ error: "Student not found" });
// //   }
// //   res.json(student);
// // });

// // // Get results by rollNumber (query param)
// // app.get("/results", (req, res) => {
// //   const rollNumber = req.query.rollNumber;
// //   const studentResults = results.filter((ele) => ele.rollNumber === rollNumber);

// //   if (studentResults.length === 0) {
// //     return res.status(404).json({ error: "No results found for this roll number" });
// //   }
// //   res.json(studentResults);
// // });

// // // Add a new student
// // app.post("/students", (req, res) => {
// //   const student = req.body;
// //   student.id = Date.now(); // Unique ID
// //   students.push(student); // Add to main students array
// //   res.status(201).json(student);
// //   console.log(student);
// // });

// // // Start server
// // app.listen(port, () => {
// //   console.log("Server is running on port " + port);
// // });




// // // app.delete("/students/:id", (req, res) => {
// // //   const id = parseInt(req.params.id);
// // //   const index = students.findIndex((ele) => ele.id === id);

// // //   if (index === -1) {
// // //     return res.status(404).json({ error: "Student not found" });
// // //   }

// // //   const deletedStudent = students.splice(index, 1);
// // //   res.json({ message: "Student deleted successfully", deleted: deletedStudent[0] });
// // // });

const express=require("express");
const app=express();
const port=3030;
app.use(express.json());
const students = [
  { id: 1, name: "Alice Johnson", rollNumber: "R001" },
  { id: 2, name: "Bob Smith", rollNumber: "R002" },
  { id: 3, name: "Charlie Brown", rollNumber: "R003" },
  { id: 4, name: "Diana Prince", rollNumber: "R004" }
];

const results = [
  { rollNumber: "R001", subject: "Math", marks: 85 },
  { rollNumber: "R001", subject: "Science", marks: 90 },
  { rollNumber: "R002", subject: "Math", marks: 70 },
  { rollNumber: "R002", subject: "Science", marks: 75 },
  { rollNumber: "R003", subject: "Math", marks: 60 },
  { rollNumber: "R003", subject: "Science", marks: 65 },
  { rollNumber: "R004", subject: "Math", marks: 95 },
  { rollNumber: "R004", subject: "Science", marks: 92 }
];

app.get("/students",(req,res)=>{
  res.json(students)
})
app.get("/students/:id",(req,res)=>{
  const id=req.params.id;
  const student=students.find((ele)=>ele.id==id)
  if(!student){
    res.status(404).json({error:"id not found"})
  }
  res.json(student)
})
app.get("/results",(req,res)=>{
  const rollNumber=req.query.rollNumber;
  const studentResult=results.filter((ele)=>ele.rollNumber==rollNumber)
  if(studentResult.length==0){
    res.status(404).json({error:"no"})
  }
  res.json(studentResult)
})
app.post("/students",(req,res)=>{
  const student=req.body
  student.id=Date.now();
  students.push(student)
  res.status(201).json(student)
  console.log(student)
})

app.delete("/studnets/:id",(req,res)=>{
  const id=req.params.id;
  const index=students.find((ele)=>ele.id==id)
  if(index==-1){
    res.status(404).send("not found delete element")
  }
  const studentDelete=students.splice(index,1)
  res.status(201).json({message:"deleted successfully",deleted:studentDelete[0]})
})

app.listen(port,()=>{
  console.log("server is running"+port)
})
