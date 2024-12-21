let name = "Ahmed";
let age = 13;

// console.log(`My name is ${name} and I am ${age} years old.`);

let fName = new String("Zulnoorain-Ahmed");

console.log(fName[0]);
console.log(fName.__proto__);
console.log(fName.length);
console.log(fName.toUpperCase());
console.log(fName.charAt(2));
console.log(fName.indexOf('l'));
let newStr = fName.substring(0, 5);
console.log(newStr);
let anotherStr = fName.slice(0, 5);
console.log(anotherStr);
let newStr2 = "                 Hello World!                    ";
console.log(newStr2.trim());
let url = "https://www.google.com/search?q=javascript%20string";
url = url.replace("%20", "-");
console.log(url);
console.log(url.includes("google"));
console.log(fName.split("-"));









