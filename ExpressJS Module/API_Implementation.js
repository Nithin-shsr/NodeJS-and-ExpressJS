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

    res.json(newProducts);
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


app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})