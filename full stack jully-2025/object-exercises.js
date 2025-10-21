// // // // function getkeys(obj){
// // // //     const result=[];
// // // //     for(let key in obj){
// // // //         result.push(key)
// // // //     }
// // // //     return result;
// // // // }
// // // // console.log(getkeys({a:1,b:2,c:3}))


// // // function getvalues(obj){
// // //     const result=[];
// // //     for(let key in obj){
// // //         result.push(obj[key])
// // //     }
// // //     return result;
// // // }
// // // console.log(getvalues({a:1,b:2,c:3}))




// // // function checkprop1(obj,prop){
// // //     return prop in obj;
// // // }                                            (by using methid)
// // // console.log(checkprop1({a:1,b:2},"a" ))
// // // console.log(checkprop1({a:1,b:2},"b" ))


// // function checkprop(obj,prop){
// //     for(let key in obj){
// //         if(prop in obj){
// //             return true                             // (by using for in loop) or if(key == prop)
// //         }else{
// //             return false
// //         }
// //     }

// // }
// // console.log(checkprop({a:1,b:2},"a" ))
// // console.log(checkprop({a:1,b:2},"k" ))


// // function pair(str){
// //     const result={};
// //     for(let char of str){
// //         result[char]=char.toUpperCase();
// //     }
// //     return result;
// // }
// // console.log(pair("dct"))



// // function charascii(str){
// //     const result={};
// //     for(let char of str){
// //         result[char]=char.charCodeAt()
// //     }
// //     return result;

// // }
// // console.log(charascii("abc"))




// // const strlength=(arr)=>{
// //     const result={};
// //     for(let str of arr){
// //         result[str]=str.length
// //     }
// //     return result
// // }
// // console.log(strlength(["abc","ab","a","abcd"]))





// const products = [
//   { id: 1, name: "Laptop", price: 55000 },
//   { id: 2, name: "Smartphone", price: 25000 },
//   { id: 3, name: "Headphones", price: 2000 },
//   { id: 4, name: "Keyboard", price: 1200 },
//   { id: 5, name: "Mouse", price: 800 }
// ];

// function filterproducts(products){

//     return products.filter(ele=>ele.price>=10000)
// }
// console.log(filterproducts(products))


// function findmax(arr){
//     let max=arr[0]
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max
// }
// console.log(findmax([100,23,4,567,90]))



function findmax(obj){
    let maxkey= obj.a
    let maxvalue= -Infinity

    for (let key in obj){
        if(obj[key]>maxvalue){
            maxvalue=obj[key];
            maxkey=key;
        }
    }
    return maxkey
}  
    

console.log(findmax({a:1,b:20,c:5}))
