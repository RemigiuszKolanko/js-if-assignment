// Task number 1
const randomNumber = Math.random();
const maxValue = 0.7;
const minValue = 0.2;
const numbers = [2, 13, 43, 21, -1, 78, -21.3];
const secondRandomNumber = Math.random();

if (randomNumber > maxValue) {
    alert(`Hurrah! Number greather than ${maxValue}.`);
}

// Task number 2
for (let i = 0; i < numbers.length; i++) {
    console.log(`Index number ${i}: ${numbers[i]}`);
}

let i = 0;
for (const number of numbers) {
    console.log(`Index number ${i}: ${number}`);
    i++;
}

let j = 0;
while (j < numbers.length) {
    console.log(`Index number ${j}: ${numbers[j]}`);
    j++;
}

// Task number 3
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(`Index number ${i}: ${numbers[i]}`);
}

//Task number 4
if (randomNumber > maxValue && secondRandomNumber > maxValue) {
    alert(`Hurrah! Both numbers greather than ${maxValue}. You are lucky!`);
} else if (randomNumber < minValue || secondRandomNumber < minValue) {
    alert(`Not good! At least one of the number smaller than ${minValue}.`)
}

