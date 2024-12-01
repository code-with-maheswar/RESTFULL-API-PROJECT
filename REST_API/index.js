const express=require("express");
const app=express();
let port="8080";
let path=require("path");
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride('_method'));


let posts=[
    {   id:uuidv4(),
        username:"maheswar manna",
        content:"my first post"
    },
    {   id:uuidv4(),
        username:"raj kumar",
        content:"i love coding"
    },
    {   id:uuidv4(),
        username:"riyaj",
        content:"first internship"
    },
];

app.listen(port,()=>{
console.log(`port is listing on ${port}`);
});

app.get("/post",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/post/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/post",(req,res)=>{
    let {username,content}=req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/post")
});


app.get("/post/:id",(req,res)=>{
    let {id}= req.params;
    let post = posts.find((p)=>id === p.id);
    res.render("show.ejs",{post});
});

app.patch("/post/:id",(req,res)=>{
    let {id}= req.params;
    let newContent= req.body.content;
    let post = posts.find((p)=>id === p.id); 
    post.content = newContent;
    res.redirect("/post");

});


app.get("/post/:id/edit",(req,res)=>{
    let {id}= req.params;
    let post = posts.find((p)=>id === p.id); 

    res.render("edit.ejs",{post});
});

app.delete("/post/:id",(req,res)=>{
    let {id}= req.params;
     posts= posts.filter((p)=>id !== p.id); 

    res.redirect("/post");
});
