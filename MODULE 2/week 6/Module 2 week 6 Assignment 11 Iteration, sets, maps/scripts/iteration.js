/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const languages = ['Javascript', 'Python', 'Java', 'C++', 'C#'];
let mylist = "";
for (const language of languages) {
        mylist += language + "<br>";
    }
document.getElementById("list").innerHTML = mylist;
/*
JS Sets
https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)
*/
const songs = new Set(['Enter Sandman','Norwegian Wood','Ramble On','if six was nine', 'The End']);
let mysongs = "";
for (const song of songs) {
    mysongs += song + "<br>";
}
document.getElementById("set1").innerHTML = mysongs;

// add two more songs to the set then display in the set2 paragraph
songs.add('the trees')
songs.add('renegade')
let addedsongs = "";
for (const song of songs) {
    addedsongs += song + "<br>";
}
document.getElementById("set2").innerHTML = addedsongs;
/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const newStudents = new Map([
    ["Stephen", "stephen@gmail.com"],
    ["John", "john@gmail.com"],
    ["Mary", "mary@gmail.com"],
    ["Jane", "jane@gmail.com"],
    ["Joe", "joe@gmail.com"]
]);
let studentInfo = "";
newStudents.forEach((value, key) => {
    studentInfo += `${key}: ${value}<br>`;
});

document.getElementById("map1").innerHTML = "map1 <br>" + studentInfo;
// add two new names and emails and display in map2 use the forEach() method
newStudents.set("Tom", "Tom@gmail.com");
newStudents.set("Jerry", "Jerry@gmail.com");

let newestStudentInfo = "";
newStudents.forEach((value, key) => {
    newestStudentInfo += `${key}: ${value}<br>`;
});

document.getElementById("map2").innerHTML = "map2 <br>" + newestStudentInfo;


// get and display the email of one person, display in map3

document.getElementById("map3").innerHTML = "map3 <br>" + newStudents.get("Stephen");

// OR  this  VVV
// let Stephen = newStudents.get("Stephen");
// document.getElementById("map3").innerHTML = "map3 <br>" + Stephen;