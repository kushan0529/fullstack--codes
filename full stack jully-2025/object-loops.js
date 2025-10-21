// function strindex(str){
//     const result={};
//     for(let i=0;i<str.length;i++){
//         result[i]=str[i]
//     }
//     return result
// }
// console.log(strindex("dct"))


// function checkvowel(str){
//     let result={};
//     let vowels="aeiou"
//     for(i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
// //             result[str[i]] = true
// //         }
// //         else{
// //             result[str[i]] = false
// //         }
// //     }
// //     return result
// // }
// // console.log(checkvowel("react"))





// // function checkvowel(str){
// //     let result={};
// //     let vowels="aeiou"
// //     for(i=0;i<str.length;i++){
// //         if(vowels.includes(str[i])){
// //             result[str[i]]=`{index:${i},isvowel :${true} }`
// //         }
// //         else{
// //             result[str[i]] =`{index:${i},isvowel :${false} }`
// //         }
// //     }
// //     return result
// // }
// // console.log(checkvowel("react"))


// function frequency(str){
//     const result={};
//     for(let char of str){
//         if(char in result){
//             result[char]+=1
//         }else{
//             result[char]=1
//         }
//     }
//     return result
// }
// console.log(frequency("aabcc"))





// function nonRepeating(str){
//     const result={};
//     for(let char of str){
//         if(char in result){
//             result[char]+=1
//         }else{
//             result[char]=1
//         }
//     }
//     for(let key in result){
//         if(result[key]==1){
//             return key
//         }
//     }
//     return ("");
// }
// console.log(nonRepeating("aabcc"))
// console.log(nonRepeating("abcabc"))


function repeating(str){
    const result={};
    for(let key of str){
        if(key in result){
            result[key]+=1
        }
        else{
            result[key]=1
        }
    }
    const output=[];
    for(let key1 in result ){
        if(result[key1]>1){
            output.push(key1)

        }
    }
    return output

    
}
console.log(repeating("ddcttd"))




//swap key values 
function swap(obj){
    const result={}
    for(let key in obj){
        result[obj[key]]=key
        
        
    }
    return result
}
console.log(swap({green:"peace",blue:"tranquility"}))


// function swap1(obj){

//     let k=Object.keys(obj)
//     for(let key of k){
//         const value=obj[key]
//         delete obj[key]
//         k[key]=key
//     }
//     return k

    
// }
// console.log(swap1({green:"peace",blue:"tranquility"}))



// function total(cart){
//     let values=Object.values(cart)
//     let result=0
//     for(let key of values){
//         result=result+key
//     }
//     return result

// }
// console.log(total({marker:50,scale:25,box:100}))//175







function total(cart){
    
    let result=0
    for(let key in cart){
        result=result+cart[key]
    }
    return result

}
console.log(total({marker:50,scale:25,box:100}))//175