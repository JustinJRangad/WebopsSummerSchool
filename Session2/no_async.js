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
    setTimeout(()=>{
        posts.push(post);

    },2000);
}
getPosts();
createPost({title: "post Three", body:"This is post three"});
