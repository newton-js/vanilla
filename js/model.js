


export const areaOfRectangle = function(length, breadth){
   return length * breadth;
}

console.log(areaOfRectangle(20, 40))




// working with Array ES6

console.log(areaOfRectangle(30, 6))

const winner = 'logi';  // string
let loser = 'jayboy';

console.log(loser)

loser = 'hazy';

console.log(loser)
// 
const birthYear = 2008;  // number

let age = 16;

const waec = true;  // boolean
const jamb = false;


const papaya = {                            //object
    name: 'mariam',
    gender: 'female',
    age: 24,
    married: false,
    crush: ['alfa', 'fawaz'],
}

const wives = ['mariam', 'mutmaina', 'roqibs', 'sumaiya']   // array
// console.log(wives.join(" "))

// Working with Array

// concat
// split
// replace
// slice
// splice

// forEach
// map
// filter
// find
// findIndex
// flat
// flatMap

// forEach
wives.forEach((item, index, arr) => {
    // console.log('fawaz number ' + (index+1) + " wife is " + item);
    // console.log(arr)
});

// map
const newWives = wives.map((ele) => {
    const wifehubby = `${ele} likes money`;
    return wifehubby;
}) 
// console.log(newWives);


const ages = [15, 9, 14, 18, 36, 25, 17];
// filter
const elder = ages.filter((each) => each >= 17);
// console.log(elder);


const concated = wives.concat(ages);
// console.log(concated);

const doings = "fawaz has two babes and he is still crushing on papaya and two more celebs";

console.log(doings.slice(0, 5)); 


// console.log(doings.replace('two', 'four')); 
// console.log(doings.replace('two', 'four')); 
// console.log(doings.replaceAll('two', 'four')); 

const doingsArray = doings.split(" ");

const timesta = Date();
console.log(timesta.split("("));

const xeno = navigator.geolocation;
// console.log(xeno);

// const io = new IntersectionObserver()

// console.log(doingsArray)


