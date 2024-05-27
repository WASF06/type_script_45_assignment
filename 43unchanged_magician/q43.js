"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ['Herry poter', 'Hermione granger', 'Rone weasly', 'Albus dumbledor'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'the great ' + magicianArray[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copymagicianArray = copyArray(magician);
make_great(copymagicianArray);
console.log('\n\nThis is my orignal array:');
show_magician(magician);
console.log('\n\nThis is my modified copy of the array:');
show_magician(copymagicianArray);
