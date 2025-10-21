const axios=require('axios');
const username="rajeshwari";
const url =`https://api.genderize.io/?name=${username}`;

axios.get(url)
    .then((response) => {
        const result=response.data;
        console.log(`the gender of ${username} is ${result.gender}`)

    })
    .catch((err)=>{
        console.log(err.message)
    })





