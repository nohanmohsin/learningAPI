const people = {id: 10, name: "masud"};
// stringify makes js to json
const username = JSON.stringify(people);
console.log(username);
// parse makes json to js
const objectify = JSON.parse(username);
console.log(objectify);