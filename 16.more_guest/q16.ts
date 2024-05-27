let guest_list:string[]=[`Wajahat`,`Ali`,`Ahmed`]

// for(let i=0;i<guest_list.length; i++ ){



//     console.log('Dear Mr.'+ guest_list[i]+', \n \n It is pleasure to invite you in our party.\n\nTHANK YOU!\n\n')

// }



let absent_guest: string = 'Wajahat';

let new_guest:string = 'Faizan '

guest_list[0]= new_guest;

for(let i=0;i<guest_list.length; i++ ){



    console.log('Dear Mr.'+ guest_list[i]+', \n \n It is pleasure to invite you in our party.\n\nTHANK YOU!\n\n')

}
console.log(`Mr ${absent_guest} is not coming to the party`)

console.log ('Good news! we find big table so  we are inviting 3 more guest')

guest_list.unshift('Shujat');
guest_list.splice(2 , 0 , 'Rohan');
guest_list.push('Haseeb');

for(let i=0;i<guest_list.length; i++ ){



    console.log('Dear Mr.'+ guest_list[i]+', \n \n It is pleasure to invite you in our party.\n\nTHANK YOU!\n\n')

}