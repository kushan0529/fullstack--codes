//   const str="UcUNIFYaGUGUFUtGSK"
//   let lowercaseLetters = '';
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char >= 'a' && char <= 'z' && char === char.toLowerCase()) {
//       lowercaseLetters += char;
//     }
//   }
// console.log(lowercaseLetters)

const str="UcUNIFYaGUGUFUtGSK";

let lowercaseletter="";
for(let i=0;i<str.length;i++){
    let char=str[i];
    if(char>='a' && char <= 'z' && char === char.toLowerCase()){
        lowercaseletter += char;

    }
}
console.log(lowercaseletter)