function geteven(str){
    let result=[];
    for(let i=0;i<str.length;i++){
        if(str[i]%2==0){
            result.push(str[i])
        }
    }
    return result;
}
console.log(geteven([1,2,3,4]))
console.log(geteven([20,21,22]))
console.log(geteven([1,3,5]))
console.log(geteven([]))