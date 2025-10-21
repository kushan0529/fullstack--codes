// const posts=[
//     {id:1,title:"first-one",tag:["tech","none"]},
//     {id:2,title:"second-one",tag :["nine"]},
// //     {id:3,title:"third-one",tag :["tech"]}
// // ];
// // const result=posts.filter(post=>post.tag.includes("tech"))


// // console.log(result)




// // const dev ={
// //     name1:"kushan",
// //     age:23,

// // }
// // console.log(dev)
// // dev.name2="kumar"

// // dev.adress="srikalahasti"
// // console.log(dev)

// const dev={
//     a:1,
//     b:2
// }
// console.log(dev)
// console.log(typeof dev)
// dev.c=3  // adding c
// dev.b=20  // updating with 20

// console.log(dev)
// delete dev.a
// console.log(dev)

// const obj={name1:"kushan",name2:"kumar",age:23}
// console.log(obj)

const obj={a:1,b:2,c:3}
for (let key in obj){
    console.log(key,obj[key])
}


const student={
    name1:"rahul",
    age:23,
    email:"rahul@gmail.com",
    course:"full stack development course"
}
for (let key in student){
    console.log(key,`:${ student[key]}`)
}



const student1={
    name1:"rahul",
    age:23,
    email:"rahul@gmail.com",
    course:"full stack development course"
}
for (let key in student1){
    console.log(key,student1.key)
}