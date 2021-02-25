// powerpoint Web Week 6 Javascript Callbacks Arrow Function
let animals = ['Giraffe', 'Elephant', 'Yak']

animals.forEach( function(animal, index) {          // index doesnt work
    console.log(animal)
})

// Arrow Notation
animals.forEach( (animal, index) => {
    console.log(animal, index)                      // Index works here
})

// Variance of Arrow notation- simplified
animals.forEach( (animal, index) => console.log(animal, index)   )                   // Index works here

// Different

animals.forEach( function(animal) {
    console.log(animal)
})

// arrow notation version= simplified
animals.forEach( animal => console.log(animal))         // If just one arguement, you can delete the () around animal