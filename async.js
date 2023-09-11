console.log("person1 : shows ticket")
console.log("person2 : shows ticket")

const premovie= async() =>{
 const promiseWifeBringingTicket = new Promise((resolve , reject) =>{
    setTimeout(()=>{
       resolve("ticket")
    },3000)
 })
 let getPopCorn = new Promise((resolve, reject) => {
    resolve("popcorn")
 })
 let getButter = new Promise((resolve, reject) => {
    resolve("butter")
 })
 let getdrink = new Promise((resolve, reject) => {
    resolve("pepsi")
 })
 let ticket = await promiseWifeBringingTicket;
 console.log(`wife is brining ${ticket}`)
 console.log("husband : we should go in")
 console.log("wife : but i need the popcorn")
 
 let popcorn = await getPopCorn
 console.log(`husband : here is the ${popcorn}`)
 console.log("wife:but i need the butter also")

 let butter = await getButter
 console.log("i got the butter ")
console.log(`now put the ${butter} in and let sgo`)

let colddrink = await getdrink
console.log(`here is the ${colddrink} that you order mam`)
console.log("wife : now i am happy")
}
premovie();
console.log("person1 : shows ticket")
console.log("person2 : shows ticket")