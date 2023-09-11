let timeactivity = null
let posts = []
function updateLastUserActivityTime(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            timeactivity = new Date().toISOString();
            resolve(timeactivity)
        },1000)
    })
}
function createPost(post){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            posts.push(post)
            resolve(post)
        },1000)
    })
}
function deletePost(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
              let deletedPost =  posts.pop()
              resolve(deletedPost)
            }
            else{
                reject("array is empty")
            }
        },1000)
    })
}
function logPostsAndLastActivity(){
    console.log(posts)
    console.log(timeactivity)
}
async function main() {
    await Promise.all([createPost("Post1"), updateLastUserActivityTime()])
        .then(() => {
            logPostsAndLastActivity();
            return deletePost();
        })
        .then(() => {
            logPostsAndLastActivity();
        })
        .catch((error) => {
            console.log(error);
        });
}
main();