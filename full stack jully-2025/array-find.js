// function findgreater(arr,n){
//     let result;
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>n){
//             result=arr[i]
//             break
//         }
//     }
//     return result
// }
// console.log(findgreater([10,15,20,25,30],22))


function findgreater(arr,n){
    const result=arr.find(function(ele){
        return ele > n 
    })
    return result;
}
console.log(findgreater([10,15,20,25,30],100))
console.log(findgreater([10,15,20,25,30],10))




function firststr(arr){
    return arr.find(function(ele){
        return typeof ele == 'string'
    })
   
}
console.log(firststr([1,2,3,"d","c","t"]))