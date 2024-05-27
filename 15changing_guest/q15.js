var guest_list = ["Wajahat", "Ali", "Ahmed"];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr.' + guest_list[i] + ', \n \n It is pleasure to invite you in our party.\n\nTHANK YOU!\n\n');
}
var absent_guest = 'Wajahat';
var new_guest = 'Faizan ';
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr.' + guest_list[i] + ', \n \n It is pleasure to invite you in our party.\n\nTHANK YOU!\n\n');
}
console.log("Mr ".concat(absent_guest, " is not coming to the party"));
