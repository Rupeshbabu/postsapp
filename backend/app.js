const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
    next();
})

// app.use((req, res, next) =>{
//     console.log('First middleware');
//     next();
// });

app.post('/api/posts', (req, res, next) =>{
    const posts = req.body;
    console.log(posts);
    res.status(201).json({
        message: 'Post Added Successfully!'
    })
})

app.get('/api/posts',(req, res, next) =>{
    const posts = [
        {id: "fad1234560", title:"First server-side post", content:"This is coming from server"},
        {id: "weds123456", title:"Second server-side post", content:"This is coming from server"}
    ]
    res.status(200).json({
        message:'Posts fetched successfully',
        posts:posts
    });
    // next();
});

module.exports = app;