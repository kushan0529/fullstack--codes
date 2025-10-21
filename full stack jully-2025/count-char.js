function counting(str,char){
    let count=0
    for(let i=0;i<str.length;i++){
        if(str[i]==char){
            count=count+1;
        }
    }
    return count;
}
console.log(counting("abc", "a"))
console.log(counting("ljjskbkjsabvasb","j"))
console.log(counting("kkkkkkkkkkkk","k"))