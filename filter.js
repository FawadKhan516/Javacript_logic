// filter coding

const myObject = {
    name: "Faddi",
    age: 25,
    hobbies: ["coding", "music", "reading"],
    skills: [
      { name: "JavaScript", level: "Advanced" },
      { name: "PHP", level: "Intermediate" },
      { name: "Laravel", level: "Intermediate" }
    ],
    friends: [
      { name: "Ali", age: 24 },
      { name: "Ahmed", age: 26 }
    ],
    favoriteMovies: ["Inception", "Interstellar", "The Dark Knight"]
  };
  


const object = myObject.favoriteMovies.filter(function(value){
    return value;
})
  console.log(object);