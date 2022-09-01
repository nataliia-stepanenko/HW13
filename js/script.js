"use strict"

const URL = 'https://jsonplaceholder.typicode.com/users';

// .then/.catch
fetch(URL)
    .then(response => response.json())
    .then(users => console.log(users.filter(user => user.company.name === "Johns Group")))
    .catch(error => console.error(error));


// async/await
// async function getUsers(){
//     try {
//         const response = await fetch(URL);
//         const users = await response.json();
//         console.log(users.filter(user => user.company.name === "Johns Group"));
//     } catch (error){
//         console.log(error);
//         }
// }
// getUsers();
