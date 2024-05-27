"use strict";
function make_sendwich(item) {
    console.log('\n Making your sendwich:');
    item.forEach(element => console.log("- " + element));
    console.log('\n Enjoy your sendwich !');
}
make_sendwich(['Ham', 'Cheese', 'Lettus']);
make_sendwich(['Turkey', 'Becon']);
make_sendwich(['Peanut butter', 'Jelly']);
