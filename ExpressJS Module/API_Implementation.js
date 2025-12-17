const express = require('express');
const app = express();
const {products} = require('./data_for_json.js');

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to our Home page</h1><a href="/api/products">Our Products</a>')
})

app.get('/api/products',(req,res)=>{

    const newProducts = products.map((product)=>{
        const {id,name} = product;
        return {id,name};
    })

    res.status(200).json(newProducts);
})

// app.get('/api/products/1',(req,res)=>{
//
//     const firstProduct = products.find((product)=>product.id === 1)
//     res.json(firstProduct);
// })

//Route parameters
app.get('/api/products/:productID',(req,res)=>{

    const {productID} = req.params;
    const Product = products.find((product)=>product.id === Number(productID));
    res.json(Product);
})

//Query String parameters is also known as URL parameters is a way to send small amounts of information to the server using URL

app.get('/api/v1/query',(req,res)=>{
    // console.log("Your query is processed and it is :",req.query);
   const {search , limit } = req.query;
   let sortedProducts = [...products];


   if(search)
   {
       sortedProducts = sortedProducts.filter((product)=>{
           return product.name.startsWith(search);
       })
   }

   if(limit){
       sortedProducts = sortedProducts.slice(0,Number(limit));
   }
   res.status(200).json(sortedProducts);

   if(sortedProducts.length < 1){
       return res.status(200).json({success:true , data : []});
   }

})




app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})