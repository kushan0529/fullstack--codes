// function evevnorodd(arr){
//     const result=arr.filter(function(ele){
//         return ele %2==0;
//     })
//     return result;
// }
// console.log(evevnorodd([10,11,12,13,14]))


// const evenorodd=function (arr){
//     const result=arr.filter(ele=>ele%2==0)
//     return result;
// }
// console.log(evenorodd([10,11,12,13,14]))

// const even=function (arr){
//     const result=arr.filter(ele=>ele%2==0)
//     return result
// }
// console.log(even([1,2,3,4,5,6,7,8,9,10]))



// function allpositives(numbers){
//     const result=numbers.filter(function(ele){
// //         return ele >=0
// //     })
// //     return result;

// // }
// // console.log(allpositives([1,2,3,-10,-11,7]))



// function allpositives(numbers){
//     let result=[];
//     for (let i=0;i<numbers.length;i++){
//         if(numbers[i]>=0){
//             result.push(numbers[i])
//         }
//     }
//     return result;
// }
// console.log(allpositives([1,2,3,-5,-9,9]))




const allpositives=function (numbers){
    return numbers.filter(ele=> ele >=0)
   

}
console.log(allpositives([1,2,3,-10,-11,7]))


const strongpasswords=function (passwords){
    return passwords.filter((ele)=> ele.length >=8)
}                                                                                                                                                                 
console.log(strongpasswords(["secret","secret123","secret@123","pass123"]))


// function strongpassswords(passwords){
//     let result=[];
//     for(let i=0;i<passwords.length;i++){
//         if(passwords[i]>=0){
//             result.push[passwords[i]]
//         }
//     }
//     return result
// }
// console.log(strongpasswords(["secret","secret123","secret@123","pass123"]))
