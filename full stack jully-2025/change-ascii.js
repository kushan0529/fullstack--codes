const str="abcd";
let result=""
for(i=0;i<str.length;i++){
    if(str[i].charCodeAt() % 2==0){
        result=result+str[i].toUpperCase();
    }else{
        result=result+str[i]
    }
}
console.log(result)