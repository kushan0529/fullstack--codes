const str="jAvAAcRIpt"
let upppercase=""
let lowercase=""
for(let i=0;i<str.length;i++){
    if(str[i]==str[i].toUpperCase()){
        upppercase+=str[i]

    }else{
        lowercase+=str[i]
    }
}
console.log(upppercase+lowercase)