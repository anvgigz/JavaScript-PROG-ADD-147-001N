function calculate() {
    var chi = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);
    let birthDate = new Date(year, month - 1, date);

    // Broad Chinese Zodiac Calculation
    if ((birthDate >= new Date(1948, 1, 10) && birthDate <= new Date(1949, 0, 28)) ||
        (birthDate >= new Date(1960, 0, 28) && birthDate <= new Date(1961, 1, 14)) ||
        (birthDate >= new Date(1972, 1, 15) && birthDate <= new Date(1973, 1, 2)) ||
        (birthDate >= new Date(1984, 1, 2) && birthDate <= new Date(1985, 1, 19)) ||
        (birthDate >= new Date(1996, 1, 19) && birthDate <= new Date(1997, 1, 6)) ||
        (birthDate >= new Date(2008, 1, 7) && birthDate <= new Date(2009, 0, 25)) ||
        (birthDate >= new Date(2020, 0, 25) && birthDate <= new Date(2021, 1, 11))) {
        chi = "Rat";
    } else if ((birthDate >= new Date(1949, 0, 29) && birthDate <= new Date(1950, 1, 16)) ||
               (birthDate >= new Date(1961, 1, 15) && birthDate <= new Date(1962, 1, 4)) ||
               (birthDate >= new Date(1973, 1, 3) && birthDate <= new Date(1974, 0, 22)) ||
               (birthDate >= new Date(1985, 1, 20) && birthDate <= new Date(1986, 1, 8)) ||
               (birthDate >= new Date(1997, 1, 7) && birthDate <= new Date(1998, 0, 27)) ||
               (birthDate >= new Date(2009, 0, 26) && birthDate <= new Date(2010, 1, 13)) ||
               (birthDate >= new Date(2021, 1, 12) && birthDate <= new Date(2022, 0, 31))) {
        chi = "Ox";
    } else if ((birthDate >= new Date(1950, 1, 17) && birthDate <= new Date(1951, 1, 5)) ||
               (birthDate >= new Date(1962, 1, 5) && birthDate <= new Date(1963, 0, 24)) ||
               (birthDate >= new Date(1974, 0, 23) && birthDate <= new Date(1975, 0, 10)) ||
               (birthDate >= new Date(1986, 1, 9) && birthDate <= new Date(1987, 0, 28)) ||
               (birthDate >= new Date(1998, 0, 28) && birthDate <= new Date(1999, 1, 15)) ||
               (birthDate >= new Date(2010, 1, 14) && birthDate <= new Date(2011, 1, 2)) ||
               (birthDate >= new Date(2022, 1, 1) && birthDate <= new Date(2023, 0, 21))) {
        chi = "Tiger";
    } else if ((birthDate >= new Date(1951, 1, 6) && birthDate <= new Date(1952, 0, 26)) ||
               (birthDate >= new Date(1963, 0, 25) && birthDate <= new Date(1964, 1, 12)) ||
               (birthDate >= new Date(1975, 1, 11) && birthDate <= new Date(1976, 0, 30)) ||
               (birthDate >= new Date(1987, 0, 29) && birthDate <= new Date(1988, 1, 16)) ||
               (birthDate >= new Date(1999, 1, 16) && birthDate <= new Date(2000, 1, 4)) ||
               (birthDate >= new Date(2011, 1, 3) && birthDate <= new Date(2012, 0, 22)) ||
               (birthDate >= new Date(2023, 0, 22) && birthDate <= new Date(2024, 1, 9))) {
        chi = "Rabbit";
    } else if ((birthDate >= new Date(1952, 0, 27) && birthDate <= new Date(1953, 1, 13)) ||
               (birthDate >= new Date(1964, 1, 13) && birthDate <= new Date(1965, 1, 1)) ||
               (birthDate >= new Date(1976, 0, 31) && birthDate <= new Date(1977, 1, 17)) ||
               (birthDate >= new Date(1988, 1, 17) && birthDate <= new Date(1989, 1, 5)) ||
               (birthDate >= new Date(2000, 1, 5) && birthDate <= new Date(2001, 0, 23)) ||
               (birthDate >= new Date(2012, 0, 23) && birthDate <= new Date(2013, 1, 9)) ||
               (birthDate >= new Date(2024, 1, 10) && birthDate <= new Date(2025, 0, 28))) {
        chi = "Dragon";
    } else if ((birthDate >= new Date(1953, 1, 14) && birthDate <= new Date(1954, 1, 2)) ||
               (birthDate >= new Date(1965, 1, 2) && birthDate <= new Date(1966, 0, 20)) ||
               (birthDate >= new Date(1977, 1, 18) && birthDate <= new Date(1978, 0, 6)) ||
               (birthDate >= new Date(1989, 1, 6) && birthDate <= new Date(1990, 0, 26)) ||
               (birthDate >= new Date(2001, 0, 24) && birthDate <= new Date(2002, 1, 11)) ||
               (birthDate >= new Date(2013, 1, 10) && birthDate <= new Date(2014, 0, 30)) ||
               (birthDate >= new Date(2025, 0, 29) && birthDate <= new Date(2026, 1, 16))) {
        chi = "Snake";
    } else if ((birthDate >= new Date(1954, 1, 3) && birthDate <= new Date(1955, 0, 23)) ||
               (birthDate >= new Date(1966, 0, 21) && birthDate <= new Date(1967, 1, 8)) ||
               (birthDate >= new Date(1978, 0, 7) && birthDate <= new Date(1979, 0, 27)) ||
               (birthDate >= new Date(1990, 0, 27) && birthDate <= new Date(1991, 1, 14)) ||
               (birthDate >= new Date(2002, 1, 12) && birthDate <= new Date(2003, 0, 31)) ||
               (birthDate >= new Date(2014, 0, 31) && birthDate <= new Date(2015, 1, 18)) ||
               (birthDate >= new Date(2026, 1, 17) && birthDate <= new Date(2027, 1, 5))) {
        chi = "Horse";
    } else if ((birthDate >= new Date(1955, 0, 24) && birthDate <= new Date(1956, 1, 11)) ||
               (birthDate >= new Date(1967, 1, 9) && birthDate <= new Date(1968, 0, 29)) ||
               (birthDate >= new Date(1979, 0, 28) && birthDate <= new Date(1980, 1, 15)) ||
               (birthDate >= new Date(1991, 1, 15) && birthDate <= new Date(1992, 1, 3)) ||
               (birthDate >= new Date(2003, 1, 1) && birthDate <= new Date(2004, 0, 21)) ||
               (birthDate >= new Date(2015, 1, 19) && birthDate <= new Date(2016, 1, 7)) ||
               (birthDate >= new Date(2027, 1, 6) && birthDate <= new Date(2028, 0, 25))) {
        chi = "Goat";
    } else if ((birthDate >= new Date(1944, 0, 24) && birthDate <= new Date(1945, 1, 12)) ||
               (birthDate >= new Date(1956, 1, 12) && birthDate <= new Date(1957, 0, 30)) ||
               (birthDate >= new Date(1968, 0 , 30) && birthDate <= new Date(1969, 1, 16)) ||
               (birthDate >= new Date(1980, 1, 16) && birthDate <= new Date(1981, 1, 4)) ||
               (birthDate >= new Date(1992, 1, 4) && birthDate <= new Date(1993, 0, 22)) ||
               (birthDate >= new Date(2004, 0, 22) && birthDate <= new Date(2005, 1, 8)) ||
               (birthDate >= new Date(2016, 1, 8) && birthDate <= new Date(2017, 0, 27)) ||
               (birthDate >= new Date(2028, 0, 26) && birthDate <= new Date (2029, 1, 12))) {
        chi = "Monkey";
    } else if ((birthDate >= new Date(1945, 1, 13) && birthDate <= new Date(1946, 0, 31)) ||
               (birthDate >= new Date(1957, 0, 31) && birthDate <= new Date(1958, 1, 17)) ||
               (birthDate >= new Date(1969, 1, 17) && birthDate <= new Date(1970, 1, 5)) ||
               (birthDate >= new Date(1981, 1, 5) && birthDate <= new Date(1982, 0, 24)) ||
               (birthDate >= new Date(1993, 0, 23) && birthDate <= new Date(1994, 1, 9)) ||
               (birthDate >= new Date(2005, 1, 9) && birthDate <= new Date(2006, 0, 28)) ||
               (birthDate >= new Date(2017, 0, 28) && birthDate <= new Date(2018,1, 15)) ||
               (birthDate >= new Date(2029, 1, 13) && birthDate <= new Date(2030, 1, 2))) {
        chi = "Rooster";
    } else if ((birthDate >= new Date(1958, 1, 18) && birthDate <= new Date(1958, 1, 7)) ||
               (birthDate >= new Date(1970, 1, 6) && birthDate <= new Date(1971, 0, 26)) ||
               (birthDate >= new Date(1982, 0, 25) && birthDate <= new Date(1983, 1, 12)) ||
               (birthDate >= new Date(1994, 1, 10) && birthDate <= new Date(1995, 0, 30)) ||
               (birthDate >= new Date(2006, 0, 29) && birthDate <= new Date(2007, 1, 17)) ||
               (birthDate >= new Date(2019, 1, 16) && birthDate <= new Date(2019, 1, 4)) ||
               (birthDate >= new Date(2030, 1, 3) && birthDate <= new Date(2031, 0, 22))) {
        chi = "Dog";
    } else if ((birthDate >= new Date(1947, 0, 22) && birthDate <= new Date(1948, 1, 9)) ||
               (birthDate >= new Date(1959, 1, 8) && birthDate <= new Date(1960, 0, 27)) ||
               (birthDate >= new Date(1971, 0, 27) && birthDate <= new Date(1972, 1, 14)) ||
               (birthDate >= new Date(1983, 1, 13) && birthDate <= new Date(1984, 1, 1)) ||
               (birthDate >= new Date(1995, 0, 31) && birthDate <= new Date(1996, 1, 18)) ||
               (birthDate >= new Date(2007, 1, 18) && birthDate <= new Date(2008, 1, 6)) ||
               (birthDate >= new Date(2019, 1, 5) && birthDate <= new Date(2020, 0, 24)) ||
               (birthDate >= new Date(2031, 0, 23) && birthDate <= new Date(2032, 1, 10))) {
        chi = "Pig";
    } else {
        chi = "That year is not in my list";
    }

    // Simple decision structure using switch case
    switch (chi) {
        case "Rat":
        case "Ox":
        case "Tiger":
        case "Rabbit":
        case "Dragon":
        case "Snake":
        case "Horse":
        case "Goat":
        case "Monkey":
        case "Rooster":
        case "Dog":
        case "Pig":
            document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
            break;
        default:
            document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is not in the list.";
    }

    document.getElementById("nameout").innerHTML = myname;
}

















// The Below code does not work VVVVVV
// function calculate() {
//     var chi = '';
//     let myname = document.getElementById("fname").value;
//     let month = parseInt(document.getElementById("month").value);
//     let date = parseInt(document.getElementById("date").value);
//     let year = parseInt(document.getElementById("year").value);
//     let birthDate = new Date(year, month - 1, date);

//     // Broad Chinese Zodiac Calculation
//     switch (birthDate) {
//         case (birthDate >= new Date(1948, 1, 10) && birthDate <= new Date(1949, 0, 28)):
//         case (birthDate >= new Date(1960, 0, 28) && birthDate <= new Date(1961, 1, 14)):
//         case (birthDate >= new Date(1972, 1, 15) && birthDate <= new Date(1973, 1, 2)):
//         case (birthDate >= new Date(1984, 1, 2) && birthDate <= new Date(1985, 1, 19)):
//         case (birthDate >= new Date(1996, 1, 19) && birthDate <= new Date(1997, 1, 6)):
//         case (birthDate >= new Date(2008, 1, 7) && birthDate <= new Date(2009, 0, 25)):
//         case (birthDate >= new Date(2020, 0, 25) && birthDate <= new Date(2021, 1, 11)):
//             chi = "Rat";
//             break;
//         case (birthDate >= new Date(1949, 0, 29) && birthDate <= new Date(1950, 1, 16)):
//         case (birthDate >= new Date(1961, 1, 15) && birthDate <= new Date(1962, 1, 4)):
//         case (birthDate >= new Date(1973, 1, 3) && birthDate <= new Date(1974, 0, 22)):
//         case (birthDate >= new Date(1985, 1, 20) && birthDate <= new Date(1986, 1, 8)):
//         case (birthDate >= new Date(1997, 1, 7) && birthDate <= new Date(1998, 0, 27)):
//         case (birthDate >= new Date(2009, 0, 26) && birthDate <= new Date(2010, 1, 13)):
//         case (birthDate >= new Date(2021, 1, 12) && birthDate <= new Date(2022, 0, 31)):
//             chi = "Ox";
//             break;
//         case (birthDate >= new Date(1950, 1, 17) && birthDate <= new Date(1951, 1, 5)):
//         case (birthDate >= new Date(1962, 1, 5) && birthDate <= new Date(1963, 0, 24)):
//         case (birthDate >= new Date(1974, 0, 23) && birthDate <= new Date(1975, 0, 10)):
//         case (birthDate >= new Date(1986, 1, 9) && birthDate <= new Date(1987, 0, 28)):
//         case (birthDate >= new Date(1998, 0, 28) && birthDate <= new Date(1999, 1, 15)):
//         case (birthDate >= new Date(2010, 1, 14) && birthDate <= new Date(2011, 1, 2)):
//         case (birthDate >= new Date(2022, 1, 1) && birthDate <= new Date(2023, 0, 21)):
//             chi = "Tiger";
//             break;
//         case (birthDate >= new Date(1951, 1, 6) && birthDate <= new Date(1952, 0, 26)):
//         case (birthDate >= new Date(1963, 0, 25) && birthDate <= new Date(1964, 1, 12)):
//         case (birthDate >= new Date(1975, 1, 11) && birthDate <= new Date(1976, 0, 30)):
//         case (birthDate >= new Date(1987, 0, 29) && birthDate <= new Date(1988, 1, 16)):
//         case (birthDate >= new Date(1999, 1, 16) && birthDate <= new Date(2000, 1, 4)):
//         case (birthDate >= new Date(2011, 1, 3) && birthDate <= new Date(2012, 0, 22)):
//         case (birthDate >= new Date(2023, 0, 22) && birthDate <= new Date(2024, 1, 9)):
//             chi = "Rabbit";
//             break;
//         case (birthDate >= new Date(1952, 0, 27) && birthDate <= new Date(1953, 1, 13)):
//         case (birthDate >= new Date(1964, 1, 13) && birthDate <= new Date(1965, 1, 1)):
//         case (birthDate >= new Date(1976, 0, 31) && birthDate <= new Date(1977, 1, 17)):
//         case (birthDate >= new Date(1988, 1, 17) && birthDate <= new Date(1989, 1, 5)):
//         case (birthDate >= new Date(2000, 1, 5) && birthDate <= new Date(2001, 0, 23)):
//         case (birthDate >= new Date(2012, 0, 23) && birthDate <= new Date(2013, 1, 9)):
//         case (birthDate >= new Date(2024, 1, 10) && birthDate <= new Date(2025, 0, 28)):
//             chi = "Dragon";
//             break;
//         case (birthDate >= new Date(1953, 1, 14) && birthDate <= new Date(1954, 1, 2)):
//         case (birthDate >= new Date(1965, 1, 2) && birthDate <= new Date(1966, 0, 20)):
//         case (birthDate >= new Date(1977, 1, 18) && birthDate <= new Date(1978, 0, 6)):
//         case (birthDate >= new Date(1989, 1, 6) && birthDate <= new Date(1990, 0, 26)):
//         case (birthDate >= new Date(2001, 0, 24) && birthDate <= new Date(2002, 1, 11)):
//         case (birthDate >= new Date(2013, 1, 10) && birthDate <= new Date(2014, 0, 30)):
//         case (birthDate >= new Date(2025, 0, 29) && birthDate <= new Date(2026, 1, 16)):
//             chi = "Snake";
//             break;
//         case (birthDate >= new Date(1954, 1, 3) && birthDate <= new Date(1955, 0, 23)):
//         case (birthDate >= new Date(1966, 0, 21) && birthDate <= new Date(1967, 1, 8)):
//         case (birthDate >= new Date(1978, 0, 7) && birthDate <= new Date(1979, 0, 27)):
//         case (birthDate >= new Date(1990, 0, 27) && birthDate <= new Date(1991, 1, 14)):
//         case (birthDate >= new Date(2002, 1, 12) && birthDate <= new Date(2003, 0, 31)):
//         case (birthDate >= new Date(2014, 0, 31) && birthDate <= new Date(2015, 1, 18)):
//         case (birthDate >= new Date(2026, 1, 17) && birthDate <= new Date(2027, 1, 5)):
//             chi = "Horse";
//             break;
//         case (birthDate >= new Date(1955, 0, 24) && birthDate <= new Date(1956, 1, 11)):
//         case (birthDate >= new Date(1967, 1, 9) && birthDate <= new Date(1968, 0, 29)):
//         case (birthDate >= new Date(1979, 0, 28) && birthDate <= new Date(1980, 1, 15)):
//         case (birthDate >= new Date(1991, 1, 15) && birthDate <= new Date(1992, 1, 3)):
//         case (birthDate >= new Date(2003, 1, 1) && birthDate <= new Date(2004, 0, 21)):
//         case (birthDate >= new Date(2015, 1, 19) && birthDate <= new Date(2016, 1, 7)):
//         case (birthDate >= new Date(2027, 1, 6) && birthDate <= new Date(2028, 0, 25)):
//             chi = "Goat";
//             break;
//         case (birthDate >= new Date(1944, 0, 24) && birthDate <= new Date(1945, 1, 12)):
//         case (birthDate >= new Date(1956, 1, 12) && birthDate <= new Date(1957, 0, 30)):
//         case (birthDate >= new Date(1968, 0 , 30) && birthDate <= new Date(1969, 1, 16)):
//         case (birthDate >= new Date(1980, 1, 16) && birthDate <= new Date(1981, 1, 4)):
//         case (birthDate >= new Date(1992, 1, 4) && birthDate <= new Date(1993, 0, 22)):
//         case (birthDate >= new Date(2004, 0, 22) && birthDate <= new Date(2005, 1, 8)):
//         case (birthDate >= new Date(2016, 1, 8) && birthDate <= new Date(2017, 0, 27)):
//         case (birthDate >= new Date(2028, 0, 26) && birthDate <= new Date (2029, 1, 12)):
//             chi = "Monkey";
//             break;
//         case (birthDate >= new Date(1945, 1, 13) && birthDate <= new Date(1946, 0, 31)):
//         case (birthDate >= new Date(1957, 0, 31) && birthDate <= new Date(1958, 1, 17)):
//         case (birthDate >= new Date(1969, 1, 17) && birthDate <= new Date(1970, 1, 5)):
//         case (birthDate >- new Date(1981, 1, 5) && birthDate <= new Date(1982, 0, 24)):
//         case (birthDate >= new Date(1993, 0, 23) && birthDate <= new Date(1994, 1, 9)):
//         case (birthDate >= new Date(2005, 1, 9) && birthDate <= new Date(2006, 0, 28)):
//         case (birthDate >= new Date(2017, 0, 28) && birthDate <= new Date(2018,1, 15)):
//         case (birthDate >= new Date(2029, 1, 13) && birthDate <= new Date(2030, 1, 2)):
//             chi = "Rooster";
//             break;
//         case (birthDate >= new Date(1958, 1, 18) && birthDate <= new Date(1958, 1, 7)):
//         case (birthDate >= new Date(1970, 1, 6) && birthDate <= new Date(1971, 0, 26)):
//         case (birthDate >= new Date(1982, 0, 25) && birthDate <= new Date(1983, 1, 12)):
//         case (birthDate >= new Date(1994, 1, 10) && birthDate <= new Date(1995, 0, 30)):
//         case (birthDate >= new Date(2006, 0, 29) && birthDate <= new Date(2007, 1, 17)):
//         case (birthDate >= new Date(2019, 1, 16) && birthDate <= new Date(2019, 1, 4)):
//         case (birthDate >= new Date(2030, 1, 3) && birthDate <= new Date(2031, 0, 22)):
//             chi = "Dog";
//             break;
//         case (birthDate >= new Date(1947, 0, 22) && birthDate <= new Date(1948, 1, 9)):
//         case (birthDate >= new Date(1959, 1, 8) && birthDate <= new Date(1960, 0, 27)):
//         case (birthDate >= new Date(1971, 0, 27) && birthDate <= new Date(1972, 1, 14)):
//         case (birthDate >= new Date(1983, 1, 13) && birthDate <= new Date(1984, 1, 1)):
//         case (birthDate >= new Date(1995, 0, 31) & birthDate <= new Date(1996, 1, 18)):
//         case (birthDate >= new Date(2007, 1, 18) && birthDate <= new Date(2008, 1, 6)):
//         case (birthDate >= new Date(2019, 1, 5) && birthDate <= new Date(2020, 0, 24)):
//         case (birthDate >= new Date(2031, 0, 23) && birthDate <= new Date(2032, 1, 10)):
//             chi = "Pig";
//             break;
//          default:
//             chi = "That year is not in my list";
//     }
//     document.getElementById("nameout").innerHTML = myname;
//     document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;


// }