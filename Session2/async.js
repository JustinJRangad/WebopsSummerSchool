const { reject } = require("async");

const posts=[
    {title:"Post One", body:"This is post one"},
    {title:"post", body:"This is post two"}
]
function getPosts(){
    setTimeput(()=>{
        let output="";
        posts.forEach((post,index)=>{
            output += post.title;
            output += ""
        })
        console.log(output);
        },1000);
    }
function createPost(post){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            var error =false;
            if (!error){
                resolve();
            }
            else{
                reject("Error: Something went wrong");
            }
        },2000)
    }
});
async function init({
    await createPost
})
getPosts();
createPost({title: "post Three", body:"This is post three"});