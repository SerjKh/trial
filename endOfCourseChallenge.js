// function getRelationship(x, y) {
//     // Your code goes here!
//     if (isNaN(x) && isNaN(y)) {
// 		return "Can't compare relationships because "+x+" and "+y+" are not numbers.";        
//     }
//     else if (isNaN(x)) {
//     	return "Can't compare relationships because "+x+" is not a number.";
//     }
//     else if (isNaN(y)) {
//     	return "Can't compare relationships because "+y+" is not a number.";
//     }
//     if (x === y) {
//     	return "=";
//     }
//     if (x < y) {
//     	return "<";
//     }
//     if (x > y) {
//     	return ">";	
//     }
// };

// // Try logging these functions to test your code!
// console.log(getRelationship(1,4));
// console.log(getRelationship(1,1));
// console.log(getRelationship("that",2));
// console.log(getRelationship("this"," something else"));
// console.log(getRelationship(3));
// console.log(getRelationship("hi"));
// console.log(getRelationship(NaN));
// console.log(getRelationship(NaN, undefined));
var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];
//
function alphabetizer(names) {
    // Your code goes here!
    var names_sorted = [];
    for (i in names) {
    	var splitted_names = names[i].split(" "); //tmp array
    	names_sorted[i] = splitted_names[1] + " " + splitted_names[0]; 
    }
    return names_sorted.sort();
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));