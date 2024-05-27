let magician : string [] =['Herry poter', 'Hermione granger', 'Rone weasly', 'Albus dumbledor'];

function show_magician (magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}

show_magician(magician)