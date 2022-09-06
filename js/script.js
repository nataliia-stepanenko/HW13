"use strict"

const URL = 'https://jsonplaceholder.typicode.com/users';

// .then/.catch
fetch(URL)
    .then(response => response.json())
    .then(users => {const result = users.find(({ company: { name } }) => name === 'Johns Group')
        console.log(result)
    })
    .catch(error => console.error(error));


// async/await
// async function getUsers(){
//     try {
//         const response = await fetch(URL);
//         const users = await response.json();
//         const result = users.find(user => user.company.name === 'Johns Group')
//         console.log(result);
//     } catch (error){
//         console.log(error);
//         }
// }
// getUsers();
