

let magician : string [] =['Herry poter', 'Hermione granger', 'Rone weasly', 'Albus dumbledor'];

function make_great(magicianArray:string[]){

    for(let i=0;i<magicianArray.length;i++){

        magician[i] = 'the great ' + magicianArray[i]
     
    }

}

function show_magician (magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician)
show_magician(magician)