//prompts user for temperature in Fahrenheit
var tempF = prompt("What is the temperature in Degrees Fahrenheit?");

//converts temperature to degrees celcius
var tempC = (tempF - 32) * (5/9);

//outputs the conversion along with a description to console
console.log(tempF + " Degrees Fahrenheit is equivalent to " + tempC + " Degrees Celcius.");