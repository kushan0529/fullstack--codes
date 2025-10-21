// let a1=[10,20]
// let a2=a1;
// console.log( a2.push(30,40))
// console.log(a1)
// let a3=[10,20,30]
// let a4=a3
// console.log(a3)
// a4.push(40)

// a4.unshift(9)
// a4.shift()
// a4.shift()
// console.log(a4)
// console.log(a3)

// let a1=[10,20]
// let a2=structuredClone(a1)
// a2.unshift(0)
// console.log(a2)
// console.log(a1)



let a1=[10,20]
let a2=a1.slice(0)
a2.unshift(0)
console.log(a2)
console.log(a1)


function frequency(str){
    let result={}
    for(let char of str){
        if(char in result){
            result[char]+=1
        }
        else{
            result[char]=1
        }
    }
    return result;
}
console.log(frequency("aaabbcdd"))

const str="javascript"
let count=0
for(i=0;i<str.length;i++){
    if(str[i]=="a"){
        count++
    }
}
console.log(count)



