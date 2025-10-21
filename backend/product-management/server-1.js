// // const express=require("express");
// // const app=express();
// // const port=3333;
// // app.use(express.json());
// // const productsDB=[]
// // app.get("/products",(req,res)=>{
// //     res.json(productsDB)
// // })
// // app.post("/products",(req,res)=>{
// //     const product=req.body;
// //     product.id=Date.now();
// //     productsDB.push(product);
// //     res.status(201).json(product)
// //     console.log(product)
    
// // })


// // app.delete("/products/:id", (req, res) => {
// //   const id = parseInt(req.params.id);
// //   const index = productsDB.findIndex((ele) => ele.id === id);

// //   if (index === -1) {
// //     return res.status(404).json({ error: "Student not found" });
// //   }

// //   const deletedproducts = productsDB.splice(index, 1);
// //   res.json({ message: "product deleted successfully", deleted: deletedproducts[0] });
// // });
// // app.listen(port,()=>{
// //     console.log(`server is running on port${port}`)
// // })





// // const express = require("express");
// // const app = express();
// // const port = 3333;

// // app.use(express.json());

// // const productsDB = [];

// // // Get all products
// // app.get("/products", (req, res) => {
// //   res.json(productsDB);
// // });
// // app.get("/products/:id",(req,res)=>{
// //   const id=req.params.id;
// //   const product=productsDB.find((ele)=>{
// //     return ele.id ===parseInt(id); 
// //   })
// //   if(!product){
// //     return res.status(404).json({});
// //   }
// //   res.json(product)
// // })

// // // Add new product
// // app.post("/products", (req, res) => {
// //   const product = req.body;
// //   product.id = Date.now(); // unique ID
// //   productsDB.push(product);
// //   res.status(201).json(product);
// //   console.log("Added product:", product);
// // });

// // // Delete a product by ID
// // app.delete("/products/:id", (req, res) => {
// //   const id = parseInt(req.params.id);
// //   const index = productsDB.findIndex((ele) => ele.id === id);

// //   if (index === -1) {
// //     return res.status(404).json({ error: "Product not found" });
// //   }

// //   const deletedProduct = productsDB.splice(index, 1);
// //   res.json({
// //     message: "Product deleted successfully",
// //     deleted: deletedProduct[0]
// //   });
// // });
// // app.delete("/products/:id",(req,res)=>{
// //   const id =parseInt(req.params.id);
// //   const index=productsDB.findIndex(ele=>ele.id== id);
// //   if(index==-1){
// //     return res.status(404).json({});
// //   }
// //   const removeItem=productsDB.splice(index,1);
// //   res.json(removeItem[0]);
// // })
// // // app.put("/products/:id",(req,res)=>{
// // //   const id =req.params.id;
// // //   const body=req.body;
// // //   const product=productsDB.find((ele)=>ele.id===parseInt(id))
// // //   if(!product){
// // //     res.status(404).json({})
// // //   }
// // //   Object.assign(product,body)  //updating the product with body
// // //   res.json(product)
// // // })
// // app.put("/products/:id",(req,res)=>{
// //   const id =req.params.id;
// //   const body=req.body;
// //   const product=productsDB.find((ele)=>ele.id===parseInt(id))
// //   if(!product){
// //     res.status(404).json({})
// //   }
// //   Object.assign(product,body)
// //   res.json(product)
// // })

// // // Start server
// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });
const express=require("express");
const app=express();
const port=3333;
app.use(express.json())
const productsDB=require("./data.json");
app.get("/products",(req,res)=>{
  res.json(productsDB)
})
app.get("/products/:id",(req,res)=>{
  const id=req.params.id;
  const product=productsDB.find((ele)=>ele.id ===parseInt(id))
  if(!product){
    res.status(404).json({error:"product not found"})
  }
  res.json(product)
})
app.get("/category-stats",(req,res)=>{
    const categoryStats={};
    productsDB.forEach()
    conosle.log(categorystat,categorystat.length)
})
app.post("/products",(req,res)=>{
  const product=req.body;
  product.id=Date.now();
  productsDB.push(product);
  res.status(201).json(product)
  console.log("added product:",product)

})

app.listen(port,()=>{
  console.log("server is running"+port)
})

