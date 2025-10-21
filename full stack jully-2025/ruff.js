


// function evenorodd (num){
//     if(num%2==0){
//         return `${num} is even`      (even or odd)(31-07-25)
//     }else{
//         return `${num} is odd`
//     }
// }
// console.log(evenorodd(20))
// console.log(evenorodd(21))
// console.log(evenorodd(55))


// function averages(arr){
//     let result=0;
//     for(i=0;i<arr.length;i++){
//         result=result+arr[i]/arr.length       (averages)

//     }
//     return result
// }
// console.log(averages([10,20,30]))




// // const name1="kushan"
// // for(i=0;i<name1.length;i++){                (for loop)
// //     console.log(name1[i])
// // }





// function findvowels(str,vowels){
//     let result=""
//     for(i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             result=result+str[i]                (finding vowels)
//         }
//     }
//     return result
// }

// console.log(findvowels("javascript","aeiou"))
// console.log(findvowels("aaaeeiiioo","aeiou"))
// console.log(findvowels("kushankumar","aeiou"))




// const str="+++++++--"
// let pluscount=0,minuscount=0;
// for(i=0;i<str.length;i++){               
//     if(str[i]=='+'){                     (counting + and - (using the template literal))
//         pluscount+=1
//     }else{
//         minuscount++
//     }
// }
// console.log(`plus - ${pluscount}  and minus - ${minuscount}`)


// //sum of digits in a string
// const n ="1234"
// let result=0;
// for(let i=0;i<n.length;i++){
//     result=result+Number(n[i])
// }
// console.log(result)



// //addind a number
// let n =1234
// let result=0;
// while(n>0){
//     let digit=n%10;
//     result=result+digit
//     n=Math.floor(n/10)

// }
// console.log(result)

// function vowelscap(str,vowels){
//     let result="";
//     for (i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             result+=str[i].toUpperCase()
//         }else{                                    //vowels 
//             result+=str[i]
//         }
//     }
//     return result;
// }
// console.log(vowelscap("javascript","aeiou"))


// const array=[10,20,30,40]

// for(i=0;i<array.length;i++){           (array-looping)
//     console.log(array[i])
// }


// const numbers =[10,11,12,13,14];
// let result=[];
// for(i=0;i<numbers.length;i++){
// 	if(numbers[i]%2==0){                  (array-even)
// 		result.push(numbers[i])
// 	}
// }
// console.log(result)

const str="abcdabdcaaaabbbccdd"
let result="";
for(i=0;i<str.length;i++){
    if(result.includes(str[i])){

    }
    else{
        result=result+str[i]
    }
}
console.log(result)