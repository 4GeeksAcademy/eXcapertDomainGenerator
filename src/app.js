/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let tld = [".com", ".org", ".io"];
const permutate = (arr1 = [], arr2 = [], arr3 = [], arr4 = []) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        for (let l = 0; l < arr4.length; l++) {
          result.push(arr1[i] + arr2[j] + arr3[k] + arr4[l]);
        }
      }
    }
  }
  return result;
};

console.table(permutate(pronoun, adj, noun, tld));
console.log(permutate(pronoun, adj, noun, tld));
