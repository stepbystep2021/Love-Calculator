// ==1) Random Number Generation in Javascript: Building a Love Calculator

// 1vers
var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

//2 vers
prompt("What is your name?");
prompt("What is his (her) name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
// console.log(loveScore);
alert("Your love score is: " + loveScore + "%");






// ==2) Control Statements: Using If-Else Conditionals & Logic
prompt("What is your name?");
prompt("What is his (her) name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
    alert("Your love score is: " + loveScore + "% " + "You love each other like Romeo and Julliete.");
} else {
    alert("Your love score is: " + loveScore + "%" `!` )
}




// ==3) Comparators and Equality
// ==4) Combining Comparators

prompt("What is your name?");
prompt("What is his (her) name?");

var lovScore = Math.random() * 100;
lovScore = Math.floor(lovScore) + 1; //1+100

if (lovScore > 70) {
    alert("Your love scor is " + lovScore + "%" + "You love other like Romeo and Julliete!");
}
 else if (lovScore > 30 && lovScore <= 70) {
    alert("Your love score is: " + lovScore + "%" `!`);
} 
else if (lovScore <= 30) {
    alert("Your love score is: " + lovScore + "%" + "You go todether like ice and fire!");
}




