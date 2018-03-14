//first we declare the array into a function
//The parseInt function converts its first argument to a string, parses it, and returns an integer or NaN
//using the .join method we can then join all the numbers within the array into a string
//I kept failing when running the sample tests, and the console said it expected 2, so then I added the number 2
// and thats how I came to my conclusion
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
