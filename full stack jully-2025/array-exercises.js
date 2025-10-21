// const numbers=[10,1,12,13,14];
// let result=[];
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         result.push(numbers[i])
//     }
// }
// console.log(result)
// //op = [10,12,14]


// const numbers=[10,12,13,14];
// const result2=[];
// for(let i=numbers.length-1;i>=0;i--){
//     result2.push(numbers[i])
    
// }
// console.log(result2)


const arr=[1,2,3,"d","c","t","1"]
let result=""
for(i=0;i<arr.length;i++){
    if(typeof arr[i]=="string"){
        result+=arr[i]
    }
}
console.log(result)







//o/p ="abc"