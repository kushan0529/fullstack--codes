// // // const arr1=["abc","def","ghi"]
// // // const result=arr1.reduce(function(acc,cv){
// // //     return acc + cv.length;
// // // } , 0)
// // // console.log(result)





// // function carttotal(arr){
// //     return arr.reduce(function(acc,cv){
// //         return acc + parseInt(cv)
// //     },0)
// // }
// // console.log(carttotal([45,'45',60]))
// // //o/p =150



// function even(arr){
//     return arr.reduce(function(acc,cv){
//         if(cv % 2 ==0){
//             acc.push(cv)
//         }return acc
//     },[])
// }
// console.log(even([10,11,12,13,14,]))



const even=function(arr){
    return arr.reduce((acc,cv)=>{
    if(cv % 2 ==0){
            acc.push(cv)
        }return acc
    },[])
}
console.log(even([10,11,12,13,14,]))






