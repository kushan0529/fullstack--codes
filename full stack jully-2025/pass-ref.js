//call by value


// const person={id:1,name1:"kushan"}
// const strObj=((JSON.stringify(person)))
// console.log(typeof(person))

// const parsObj=JSON.parse(strObj)
// console.log(parsObj)

// let a=10
// let b=a
//                       copy by value
// b=20
// console.log(b)
// consolelog(a)


let a=10,b=20
function alter(a,b){
    console.log(a,b)//before
    a=100,b=200
    console.log(a,b)//after
}
console.log("outside before invocation",a,b)
alter(a,b)
console.log("outside after invocation",a,b)




