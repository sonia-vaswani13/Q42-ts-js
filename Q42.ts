//Q42.Great Magicians: Start with a copy of your program from Exercise 39.
 //Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
 //Call show_magicians() to see that the list has actually been modified.

 type Magicians = string;
 const magicians: Magicians[]=["penn jillette","Criss Angel","Teller"];

 function showMagicians(magicians:[]): void  {
console.log(magicians.join("\n"));
 }
 function makeGreat(magicians:Magicians[]): Magicians[] {
    return magicians.map((magicians) => `${magicians} the Great`);
 }
 console.log("Original magicians:");
 showMagicians(magicians);

 const greatMagicians =  makeGreat(magicians)
 console.log("\nModified List:");
 showMagicians(greatMagicians);

