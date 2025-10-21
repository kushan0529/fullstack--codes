// // // // const obj={
// // // //     firstname:"kushan",
// // // //     secondname:"kumar",
// // // //     age:22

// // // // }
// // // // for (let key in obj){
// // // //     console.log(key,obj[key])
// // // // }

// // // // console.log(Object.keys(obj).length==0)
// // // // console.log(Object.values(obj))
// // // // console.log(Object.entries(obj))
// // // // console.log("age" in obj)
// // // // console.log(obj.hasOwnProperty("firstname"))





// // // // function getkeys(obj){
// // // //     const result=[];
// // // //     for(let key in obj){
// // // //         result.push(obj[key])
// // // //     }
// // // //     return result
// // // // }
// // // // console.log(getkeys({a:1,b:2,c:3}))
// // // // //o/p:['a','b','c']


// // // // function checkprop(obj,prop){
// // // //     return prop in obj
// // // // }
// // // // console.log(checkprop({a:1,b:2,c:3},"c"))


// // // function pair(str){
// // //     const result=[];
// // //     for(let key of str){
// // //         result[key]=key.toUpperCase()
// // //     }
// // //     return result

// // // }
// // // console.log(pair("dct"))
// // // //o/p = [d="D",c="C",t="T"]

// // // function strlength(arr){
// // //     const result={};
// // //     for(let str of arr){
// // //         result[str]=str.length
// // //     }
// // //     return result
// // // }

// // // console.log(strlength(["abcd","k","098765"]))

// // // function findmax(obj){
// // //     let maxkey=obj.a
// // //     let maxvalue=-Infinity
// // //     for(let key in obj){
// // //         if(obj[key]>maxvalue){
// // //             maxvalue=obj[key]
// // //             maxkey=key
// // //         }
// // //     }return maxkey
// // // }
// // // console.log(findmax({a:1,b:20,c:3}))




// // // function arrmax(arr){
// // //     let max=arr[0]
// // //     for(i=1;i<arr.length;i++){
// // //         if(arr[i]>max){
// // //             max=arr[i]

// // //         }
// // //     }
// // //     return max
// // // }
// // // console.log(arrmax([10,20,108,56]))






// // // // const strlength=(arr)=>{
// // // //     const result={};
// // // //     for(let str of arr){
// // // //         result[str]=str.length
// // // //     }
// // // //     return result
// // // // }
// // // // console.log(strlength(["abc","ab","a","abcd"]))


// // // // const strongpasswords=function(passwords){
// // // //     return passwords.filter(ele=>ele.length>=8)

// // // // }
// // // // console.log(strongpasswords(["secret","gfjg","123456789","secret1243"]))



// // // const arr=[11,13,149,15,17]
// // // const result=arr.every((ele)=>{
// // //     return ele %2 !==0
// // // })
// // // console.log(result)

// // // const fruits=["apple","banana","cherry"]
// // // fruits.forEach((ele) => {
// // //     console.log(ele)
// // // })

// // // const names1=["kannavaram","kushan","kumar"]
// // // names1.forEach((ele)=>{
// // //      console.log(ele.toUpperCase( ))
// // // })

// // // const obj={a:8,b:2,c:3}
// // // for(key in obj){
// // //     console.log(`keys-${key} values-${obj[key]}`)
// // // }

// // // Object.keys(obj).forEach((ele)=>{
// // //     console.log(ele,obj[ele])
// // // })


// // function strindex(str){
// //     const result={};
// //     for(char=0;char<str.length;char++){
// //         result[char]=str[char]
// //     }
// //     return result
// // }
// // console.log(strindex("dct"))


// // function checkvowels(str){
// //     const result={};
// //     const vowels='aeiou'
// //     for(i=0;i<str.length;i++){
// //         if(vowels.includes(str[i])){
// //             result[str[i]]=true
// //         }
// //         else{
// //             result[str[i]]=false
// //         }
// //     }
// //     return result
// // }
// // console.log(checkvowels("react"))




// // // function swap(obj) {
// // //     const keys = Object.keys(obj); // store keys first because we'll overwrite
// // //     for (let key of keys) {
// // //         const value = obj[key];
// // //         delete obj[key];  // remove the old key
// // //         obj[value] = key; // assign swapped key-value
// // //     }
// // //     return obj;
// // // }

// // // console.log(swap({ green: "peace", blue: "tranquility" }));

// // // function swap(obj){
// // //     const result={}
// // //     for(let key in obj){
// // //         result[obj[key]]=key
// // //     }
// // //     return result
// // // }
// // // console.log(swap({a:"apple",b:"ball"}))



// // // function swapwithoutnewobj(obj){
// // //     const k =Object.keys(obj)
// // //     for(let key of k){
// // //         obj[obj[key]]=key

// // //     }
// // //     return obj
// // // }
// // // console.log(swapwithoutnewobj({a:"apple",b:"ball"}))

// // // function total(cart){
// // //     let sum=0;
// // //     for(let values in cart){
// // //         sum=sum+cart[values]
// // //     }
// // //     return sum;
// // // }
// // // console.log(total({a:10,bALL:20,CAT:3000}))




// // // function evenorodd(arr){
// // //     const result=[];
// // //     for (i=0;i<arr.length;i++){
// // //        if(arr[i]%2==0){
// // //         result.push(arr[i])
// // //        }
// // //     }
// // //     return result
    
// // // }
// // // console.log(evenorodd([2,3,4,5,6,9,42,4,523]))



// // const even=function(arr){
// //     return arr.filter(ele=>ele%2==0)
// // }
// // console.log(even([1,2,3,4,5,6,7,8,9,10,11,352,442226]))


// // function odd(arr1){
// //     return arr1.map(function(ele){
// //         return ele%2 !==0
// //     })

// // }
// // console.log(odd([1,2,3,4,5,6,7,8,9]))




// // const strongpassword=function(arr){
// //     return arr.filter(ele=>ele.length>=8)
// // }
// // console.log(strongpassword(["secret@123","12345678","lksfja","we"]))


// //reverse a string
// // const str="kushan"
// // let result=''
// // for(i=str.length-1;i>=0;i--){
// // //     result+=str[i]
// // // }
// // // console.log(result)

// // function ispalindrome(str){
// //     const reverse=str.split().reverse().join()
// //     return str===reverse;
// // }
// // console.log(ispalindrome("hth"))

// // // function findlargest(num){
// // //     let largest=num[0]
// // //     for(i=1;i<num.length;i++){
// // //         if(num[i]>largest){
// // //             largest=num[i]
// // //         }
        
// // //     }
// // //     return largest
// // // }
// // // console.log(findlargest(["20","30","40","50"]))

// // // const arr=[5,6,7]
// // // arr.shift()
// // // console.log(arr)

// // //To find vowels in a string

// // function findvowels(str){
// //     let result="";
// //     const vowels="aeiou";
// //     for(i=0;i<str.length;i++){
// //         if(vowels.includes(str[i])){
// //             result+=str[i]
// //         }
// //     }
// //     return result
// // }
// // console.log(findvowels("kushankumar"))





// // function countvowels(str){
// //     let count=0;
// //     const vowels="aeiou";
// //     for(i=0;i<str.length;i++){
// //         if(vowels.includes(str[i])){
// //             count++
// //         }
// //     }
// //     return count
// // }
// // console.log(countvowels("kushankumar"))


// // function evenorodd(num){
// //     let result=""
// //     if(num%2==0){
// //         result="it is even "
// //     }
// //     else{
// //         result="odd"
// //     }
// //     return result

// // }
// // console.log(evenorodd(11))



// // function evenoroddinarray(arr){
// //     let result=[]
// //     for(i=0;i<arr.length;i++){
// //         if(arr[i]%2==0){
// //             result+=arr[i]+ ' is even   ,'
// //         }
// //         else{
// //             result+=arr[i]+" is odd  ,"
// //         }

// //     }

// //     return result

// // }
// // console.log(evenoroddinarray([1,2,3,4,5,6,7]))






// // <html>
// // <head>
// // </head>
// // <body>
// //     <button onclick="create()">
// //         Click Here!
// //     </button>

// //     <script>
// //         function create() {
// //             let geeks = document.createElement('geeks');
// //             geeks.textContent = "Geeksforgeeks";
// //             geeks.setAttribute('class', 'note');
// //             document.body.appendChild(geeks);
// //         }
// //     </script>
// // </body>


// function count(str){
//     let positivecount=0,negativecount=0
//     for(i=0;i<str.length;i++){
//         if(str[i]=="+"){
//             positivecount++
//         }
//         else{
//             negativecount++
//         }
//     }
//     return {positivecount,negativecount}
    
// }
// const result=count("+++-------")
// console.log(`positive count are=${result.positivecount}  ,  negative count are = ${result.negativecount}`)



function evenorodd(num){
    let result=[]
    for(let i=0;i<num.length;i++){
        if(num[i]%2==0){
            result+=num[i] + "-it is even , "
        }
        else{
            result+=num[i]+" -odd, "
        }
    }
    return result
}
console.log(evenorodd([1,2,3,4,5,]))





let name1 ="ava"
function showname(){
    console.log(name1)
}
showname()