

let magician : string [] =['Herry poter', 'Hermione granger', 'Rone weasly', 'Albus dumbledor'];

function copyArray(arr:string[]){
    return[...arr]



}

function make_great(magicianArray:string[]){

    for(let i=0;i<magicianArray.length;i++){

        magicianArray[i] = 'the great ' + magicianArray[i]
     
    }

}

function show_magician (magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}

const copymagicianArray=copyArray(magician)

make_great( copymagicianArray)

console.log('\n\nThis is my orignal array:');
show_magician(magician)

console.log('\n\nThis is my modified copy of the array:');
show_magician(copymagicianArray)