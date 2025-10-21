// const str="aabbcdcdcd"
// let result=""
// for (let i=0;i<str.length;i++){
//     if(result.includes(str[i])){

//     }else{
//         result+=str[i]
//     }
// }
// console.log(result)

const str=["abc","k","d","k"]
let result=[];
for(let i=0;i<str.length;i++){
    if(result.includes(str[i])){

    }
    else{
        result.push(str[i])
    }
}
console.log(result)