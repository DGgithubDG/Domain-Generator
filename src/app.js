/* eslint-disable */

let pronouns = ["the", "our", "their", "his"];
let adjs = ["great", "big", "small", "huge", "giant"];
let nouns = ["jogger", "racoon", "rat", "robber", "thief"];
let domain = [".com", ".us", ".eu"];
let emptyArray = [];

for (let i = 0; i < pronouns.length; i++) {
  for (let e = 0; e < adjs.length; e++) {
    for (let o = 0; o < nouns.length; o++) {
      for (let u = 0; u < domain.length; u++) {
        emptyArray.push(
          "" + pronouns[i] + adjs[e] + nouns[o] + domain[u] + "<br/>"
        );
      }
    }
  }
}

console.log(emptyArray);

document.querySelector("#domain-results").innerHTML = emptyArray;
//console.log(pronoun[0].concat("hello", ".com "));
//console.log(adj[0].concat("goodbye", ".us "));
////console.log(noun[0].concat("how", ".org "));
//console.log(pronoun[1].concat("when", ".oi "));
////console.log(adj[1].concat("tonight", ".co.uk "));
//console.log(noun[1].concat("yesterday", ".us "));
