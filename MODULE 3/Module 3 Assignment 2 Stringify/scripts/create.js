function addme() {
    // Get the input values
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // Create an object with the input values
    let contact = {
        fname: firstName,
        lname: lastName,
        email: email,
        phone: phone
    };

    // Convert the object to a JSON string
    let jsonString = JSON.stringify(contact);

    // Display the JSON string in the <p> element with id 'json-value'
    document.getElementById("json-value").innerHTML = jsonString;
}