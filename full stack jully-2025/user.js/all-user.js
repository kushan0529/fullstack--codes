const axios=require("axios")
const url ="https://jsonplaceholder.typicode.com/users";
axios.get(url)
    .then((response) => {
        const users =response.data
        console.log(`Total users - ${users.length}`)
        users.forEach((ele) => {
            console.log(ele.username)
            
        });
    })
    .catch((err) => {
        console.log(err.message)
    })