// .Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alienColor: string = "green"
// • If the alien is green, print a message that the player earned 5 points.

if (alienColor=== "green" ){
    console.log("version:1 player earned 5 points.");
}
else if (alienColor === "yellow"){
 console.log("player earned 10 points.");
}else if (alienColor === "Red"){
    console.log("player earned 15 points.");
}else{
    console.log("please select right color")
}

// version 2 of the program .
alienColor = "yellow"

if (alienColor=== "green" ){
    console.log("player earned 5 points.");
}
else if (alienColor === "yellow"){
 console.log("version:2 player earned 10 points.");
}else if (alienColor === "Red"){
    console.log(" player earned 15 points.");
}else{
    console.log("please select right color")
}

// version 3 of the program .
alienColor = "Red"

if (alienColor=== "green" ){
    console.log("player earned 5 points.");
}
else if (alienColor === "yellow"){
 console.log("player earned 10 points.");
}
else if (alienColor === "Red"){
    console.log("version:3 player earned 15 points.");
}

else{
    console.log("please select right color")
}

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
