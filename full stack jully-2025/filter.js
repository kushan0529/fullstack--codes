const truthy=function (values){
    
    return values.filter((ele)=>Boolean(ele)
    )
}
console.log(truthy([false,true,0,1,undefined,NaN,"dct","",[],[10]]))




// const numbers=[10,20,30,40,50];
// function findodd(arr)


// const arr=[10,11,12,13,14]
// const geteven=function(arr){
//     const result=arr.filter(ele=>ele%2==0)   (arrow functions)
//     return result
// }
// console.log(geteven(arr))


// const arr=[10,1,2,3,4,5,6,7,8,9]
// const geteven=function(arr){
//     return arr.filter(ele =>ele%2==0)
// }
// console.log(geteven(arr))

const numbers=[5,6,7]

// const addindex=(arr)=>{
//     const result=arr.map((ele,i)=>ele+i);
//     return  result;
// }
// console.log(addindex(numbers))

// const addindex=(arr)=>{
//     const result=arr.map((ele,i)=>ele+i);
//     return result
// }
// console.log(addindex(numbers))




