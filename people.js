const fullName = require("./names.js");
const hobbies = require("./hobbies.js");

const person = () => {
    return {
        name: fullName("John", "Doe"),
        hobbies: hobbies("football", "movies", "videogames")
    }
}

console.log(person())