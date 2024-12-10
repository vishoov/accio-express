const express= require('express');
const app= express();

app.use(express.json());


let posts = [
    {name: "Post 1", description: "Description 1"},
    {name: "Post 2", description: "Description 2"},
    {name: "Post 3", description: "Description 3"},
];

app.get('/', (req, res)=>{
    res.send("<h1>Blog API </h1> <br> Welcome to my Blog Page");
});

app.get('/posts', (req, res) => {
    res.json(posts);
  });


app.post('/posts', (req, res) => {
    const post = req.body;
    posts.push(post);
    res.send("Post is added to the database");
  }
);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});