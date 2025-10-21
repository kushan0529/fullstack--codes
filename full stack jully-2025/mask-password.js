const password="secret123"

//o/p="**********"
let result=""
for(let i=0;i<password.length;i++){
    result+="*"
}
console.log(result)


// function maskPassword(password) {
//   return Array(password.length + 1).join("*");
// }

// let userPassword = "MySecretPassword";
// let maskedPassword = maskPassword(userPassword);
// console.log(maskedPassword); // Output: ****************
