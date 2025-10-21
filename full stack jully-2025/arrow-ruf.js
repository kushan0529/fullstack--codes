// function iseven(arr){
//     const result=arr.filter(function(ele){
//         return ele %2==0
    
//     })
//     return result
// }
// console.log(iseven([1,2,3,4,5,6,7]))




// const arroweven=function (arr){
//     const result=arr.filter((ele)=>ele %2==0)
//     return result
// }
// console.log(arroweven([10,20,30,40,50,60,7]))


const iseven=function(ele){
    return ele%2==0;
}
console.log(iseven(16))

const arr=[1,2,3,4,5,6,7,8,9,5,53,76,563,6,6,64,6,6,,46,,7,,]
const result=arr.filter(iseven)
console.log(result)

