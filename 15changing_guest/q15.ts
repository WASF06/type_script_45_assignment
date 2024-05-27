let guest_list:string[]=[`Wajahat`,`Ali`,`Ahmed`]

for(let i=0;i<guest_list.length; i++ ){



    console.log('Dear Mr.'+ guest_list[i]+', \n \n It is pleasure to invite you in our party.\n\nTHANK YOU!\n\n')

}



let absent_guest: string = 'Wajahat';

let new_guest:string = 'Faizan '

guest_list[0]= new_guest;

for(let i=0;i<guest_list.length; i++ ){



    console.log('Dear Mr.'+ guest_list[i]+', \n \n It is pleasure to invite you in our party.\n\nTHANK YOU!\n\n')

}
console.log(`Mr ${absent_guest} is not coming to the party`)