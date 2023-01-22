const cars = ["Ford", "Chevy", "Toyota", "BMW"];

console.log(cars.length);

const moreCars = ["Fiat", "Jeep", "Lexus", "Honda"];

const totalCars = cars.concat(moreCars);

console.log(totalCars);

// Q3

console.log(totalCars.indexOf("Honda"));
console.log(totalCars.indexOf("Ford"));

// Q4

const stringOfCars = totalCars.join(", ");
console.log(stringOfCars);

// Q5
const carsFromString = stringOfCars.split();
console.log(carsFromString);

// Q6
const carsInReverse = totalCars.reverse();

console.log(carsInReverse);

// Q7
carsInReverse.sort();
console.log(carsInReverse.indexOf("BMW"));

// Q8
const pets = ["dog", "cat", "fish", "rabbit", "snake", "lizard", "bird"];
const reptiles = pets.slice(4, 6);

console.log(reptiles);
console.log(pets);

// Q9
const removedReptiles = pets.splice(4, 2, "hamster");

console.log(removedReptiles);
console.log(pets);

// Q10
const removedPet = pets.pop();
console.log(removedPet);
console.log(pets);

// Q11
pets.push(removedPet);
console.log(pets);

// Q12
pets.shift();
console.log(pets[0]);

// Q13
pets.unshift("turtle");
console.log(pets);

// Q14

const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34];

const addTwo = numbers.map((i) => i + 2);

console.log(addTwo);
