let guest_list:string[]=[`Wajahat`,`Ali`,`Ahmed`]
// for(let i=0;i<guest_list.length; i++ ){
//     console.log('Dear Mr.'+ guest_list[i]+', \n \n It is pleasure to invite you in our party.\n\nTHANK YOU!\n\n')
// }
let absent_guest: string = 'Wajahat';
let new_guest:string = 'Faizan '
guest_list[0]= new_guest;
//for(let i=0;i<guest_list.length; i++ ){
//  console.log('Dear Mr.'+ guest_list[i]+', \n \n It is pleasure to invite you in our party.\n\nTHANK YOU!\n\n')
//}
// console.log(`Mr ${absent_guest} is not coming to the party`)
// console.log ('Good news! we find big table so  we are inviting 3 more guest')
// 3 guest are added.
guest_list.unshift('Shujat');
guest_list.splice(2 , 0 , 'Rohan');
guest_list.push('Haseeb');
// 6 guest are invited here.
// for(let i=0;i<guest_list.length; i++ ){
//    console.log('Dear Mr.'+ guest_list[i]+', \n \n It is pleasure to invite you in our party.\n\nTHANK YOU!\n\n')
// }
// soory msg for guest.
// console.log('\nSorry we can not arrange big table ,only two people are invited');

// removed guest are here.
while(guest_list.length > 2 ){
   let remove_guest= guest_list.pop();
   //console.log (`Soory Mr. ${remove_guest} you are not invited for dinner.`)
}
// invites guest.

// for(let i=0;i<guest_list.length; i++ ){
//     console.log('Dear Mr.'+ guest_list[i]+', \n \n It is pleasure to invite you in our party.\n\nTHANK YOU!\n\n')
//  }

 //removed guest from array.
 guest_list.splice(0,2);
 console.log(guest_list)

 // exercise.19.
 //print a massege indicating the number of people you are inviting to dinner.

 console.log(`total number of guest are ${guest_list.length}`)

 

