


// Higher Order Function
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled); 



// Arrow Functions
const add = (a, b) => a + b;
console.log(add(5, 3));



// Destructuring
const arr = [1, 2, 3];
const [first, second] = arr;
console.log(first, second); 



// Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "nayeem" };
            resolve(data); 
        }, 2000);
    });
};

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));





// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); 




