var guest_list = ["Wajahat", "Ali", "Ahmed"];
// for(let i=0;i<guest_list.length; i++ ){
//     console.log('Dear Mr.'+ guest_list[i]+', \n \n It is pleasure to invite you in our party.\n\nTHANK YOU!\n\n')
// }
var absent_guest = 'Wajahat';
var new_guest = 'Faizan ';
guest_list[0] = new_guest;
//for(let i=0;i<guest_list.length; i++ ){
//  console.log('Dear Mr.'+ guest_list[i]+', \n \n It is pleasure to invite you in our party.\n\nTHANK YOU!\n\n')
//}
console.log("Mr ".concat(absent_guest, " is not coming to the party"));
console.log('Good news! we find big table so  we are inviting 3 more guest');
guest_list.unshift('Shujat');
guest_list.splice(2, 0, 'Rohan');
guest_list.push('Haseeb');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr.' + guest_list[i] + ', \n \n It is pleasure to invite you in our party.\n\nTHANK YOU!\n\n');
}
console.log('\nSorry we can not arrange big table ,only two people are invited');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Mr.".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr.' + guest_list[i] + ', \n \n It is pleasure to invite you in our party.\n\nTHANK YOU!\n\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
