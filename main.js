count = 0;
space = 0;
vowel= 0;
arr = ["a", "e", "i", "o", "u"];
let char = prompt("donnez votre phrase ");

for (const letter of char) {
  count++;

    if (arr.includes(letter)) {
        vowel++;
    }

         if (letter === " ") {
            space++;
        }
            if(letter === "."){
                break;
            }
}

console.log(count);
console.log(vowel);
console.log(space);
