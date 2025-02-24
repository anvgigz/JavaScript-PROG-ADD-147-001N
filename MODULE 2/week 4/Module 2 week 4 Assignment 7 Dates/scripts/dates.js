/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // Adding 1 because months are 0-indexed
const day = today.getDate();

document.getElementById("basic").innerHTML = "Today's date is: " + month + "/" + day + "/" + year;
// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const todaysDate = new Date();
document.getElementById("today").innerHTML = ("If you were wondering what the current date is then here it is ") + todaysDate;
// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const myBirthday = new Date("March 25, 1994 11:20:00");
document.getElementById("birthday").innerHTML = ("If you were wondering when my birthday is then here it is ") + myBirthday;



// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
const isoDate = new Date();
document.getElementById("iso").innerHTML = (" If you were wondering what the current date is in ISO standard so you could know when to wish me happy birthday then here it is. ") + isoDate.toISOString();

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
completeDate = new Date("2025-02-23")
document.getElementById("date1").innerHTML = ("This is ISO date Format: ") + completeDate;

const shortDate = new Date("03/20/1993");
document.getElementById("date2").innerHTML = ("This is a Short Date: ") + shortDate.getDate();

const longDate = new Date(" mar 25 1993");
document.getElementById("date3").innerHTML = ("This is a Long Date: ") + longDate;

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
const assignmentDueDate = new Date("2025-02-25");
document.getElementById("get1").innerHTML = ("This assignment is due on the ") + assignmentDueDate.getDate() + ("th");

const hoursLeft = new Date("2025-03-25");
document.getElementById("get2").innerHTML = ("You have  ") + hoursLeft.getHours() + ("  hours left to submit this assignment"); 

const minutesLeft = new Date("2025-02-24T14:50:00");
document.getElementById("get3").innerHTML = ("With the getMinutes Method you only need to worry about the minutes section in the date to be applied when getting called. ") + minutesLeft.getMinutes() + (" minutes");

const weekdayAsANumber = new Date("2025-02-24");
document.getElementById("get4").innerHTML = ("The getDay method will return the day of the week as a number. 'the 24th is a Monday which is the start of the week so the number will be ") + weekdayAsANumber.getDay();

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs

AssignmentEndDate = new Date("February 25, 2020");
AssignmentEndDate.setFullYear(2025);
document.getElementById("set1").innerHTML = ("The assignment due date has been changed to the correct year ") + AssignmentEndDate;

springClasses = new Date("January 1");
document.getElementById("set2").innerHTML = ("The Spring classes will start on ") + springClasses;

settingDates = new Date("January 1, 2025");
settingDates.setDate(20);
document.getElementById("set3").innerHTML = ("The Assignment due date has been changed to ") + settingDates;

settingHours = new Date("January 20, 2025");
settingHours.setHours(10);
document.getElementById("set4").innerHTML = ("The exact time the assignment is due by will be ") + settingHours;