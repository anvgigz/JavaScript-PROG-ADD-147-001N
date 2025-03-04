
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let holidaysText = "";

for (const month of months) {
    holidaysText += `<h2>${month}</h2>`;
    switch (month) {
        case "January":
            holidaysText += "New Year's Day<br>";
            holidaysText += "Martin Luther King Jr. Day<br>";
            break;
        case "February":
            holidaysText += "Presidents' Day<br>";
            holidaysText += "Valentine's Day<br>";
            break;
        case "March":
            holidaysText += "St. Patrick's Day<br>";
            holidaysText += "International Women's Day<br>";
            break;
        case "April":
            holidaysText += "April Fool's Day<br>";
            holidaysText += "Earth Day<br>";
            break;
        case "May":
            holidaysText += "Labor Day<br>";
            holidaysText += "Memorial Day<br>";
            break;
        case "June":
            holidaysText += "Juneteenth<br>";
            holidaysText += "Father's Day<br>";
            break;
        case "July":
            holidaysText += "Independence Day<br>";
            holidaysText += "Bastille Day<br>";
            break;
        case "August":
            holidaysText += "Women's Equality Day<br>";
            holidaysText += "International Dog Day<br>";
            break;
        case "September":
            holidaysText += "Labor Day<br>";
            holidaysText += "Patriot Day<br>";
            break;
        case "October":
            holidaysText += "Halloween<br>";
            holidaysText += "Columbus Day<br>";
            break;
        case "November":
            holidaysText += "Veterans Day<br>";
            holidaysText += "Thanksgiving<br>";
            break;
        case "December":
            holidaysText += "Christmas<br>";
            holidaysText += "New Year's Eve<br>";
            break;
        default:
            holidaysText += "No holidays available<br>";
    }
}

document.getElementById("holidays").innerHTML = holidaysText;