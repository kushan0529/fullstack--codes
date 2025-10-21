
// const arr=[10,11,12,13,14]
// const result=arr.map(function(ele){
//      return ele + 5
// })
//  console.log(result)


// const names=["dravid","sachin","zaheer"]
// const result = names.map(function(ele){
//      return ele[0] +ele[ele.length-1]
// })
// console.log(result)


const arr=[10,11,12,13,14]
const result = arr.map(function(ele){
     if(ele%2==0){
          return ele + 2
     }else{
          return ele
     }
})
console.log(result)