const express = require('express');
const app = express();
const {people} = require('./data_for_json');

//Static assets

app.use(express.static('./Methods-example'))
//Parse form data
app.use(express.urlencoded({extended : false}))
//Parse Json data - To handle the json data 
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({success:true,data:people})
})

app.post('/api/postman/people', (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:'Please provide name value'})
    }
    else{
    return res.status(201).json({success:true,data:[...people,name]})
    }
})

app.post('/login',(req,res)=>{
    const {name} = req.body;
    if(name){
        res.status(200).send(`Welcome to the website ${name}`)
    }
    else{
        res.status(404).send("Please provide credentials")
    }
})

// PUT route to update a person's name by ID
app.put('/api/people/:id', (req, res) => {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;
    // Extract the 'name' field from the request body
    const { name } = req.body;

    // Find the person in the array whose id matches the given id
    const person = people.find((person) => person.id === Number(id));

    // If no person is found, return a 404 Not Found response
    if (!person) {
        return res.status(404).json({
            success: false,
            msg: `No person with ID : ${id}`
        });
    }

    // Iterate over the people array and update the matching person's name
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            // Update the name of the person with the given id
            person.name = name;
        }
        // Return the person object (updated or unchanged)
        return person;
    });

    // Send back a 200 OK response with the updated people array
    res.status(200).json({
        success: true,
        data: newPeople
    });
});

// DELETE route to remove a person by ID
app.delete('/api/people/:id', (req, res) => {
    // Find the person in the array whose id matches the given id from request params
    const person = people.find((person) => person.id === Number(req.params.id));

    // If no person is found, return a 404 Not Found response
    if (!person) {
        return res.status(404).json({
            success: false,
            msg: `No person with ID : ${req.params.id}`
        });
    }

    // Create a new array excluding the person with the given id
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    );

    // Send back a 200 OK response with the updated people array
    return res.status(200).json({
        success: true,
        data: newPeople
    });
});

app.listen(3000, () => {
    console.log("Listening on port 3000!");
})