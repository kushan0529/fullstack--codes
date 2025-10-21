// // greet()
// // function greet(){
// //     console.log("hello")
// // }
// // // sayhello()
// // // var sayhello =function(){
// // //     console.log("hello")
// // // }
// // var x=5
// // function test(){
// //     console.log(x)
// //     var x=10
// // }
// // test()



// // console.log(typeof (name1))
// // var name1="kushan"


// // let user ="ravi"
// // console.log(user)

// // var say =function(){
// //     console.log("hello")
// // }
// // say()

// // var message="welcome"
// // display();
// // function display(){
// //     console.log(message)
// // }


// test()

// function test(){
//     var x=1
//     console.log(x)
    
// }


// console.log(score)
// var score=50


const obj={a:1,b:2,c:3}
console.log("key="+Object.keys(obj))
console.log("values="+Object.values(obj))
const obj1=(Object.entries(obj))
for(k in obj){
    
    obj[k]=Object.keys(obj)

}
console.log(k)




const arr=[10,20,30,40]
let result=0
for(let i=0;i<arr.length;i++){
    result+=arr[i]
}
console.log(result)


const str="javascript"
let count=0
for(i=0;i<str.length;i++){
    if(str[i]=="a"){
        count++
    }
}
console.log(count)

