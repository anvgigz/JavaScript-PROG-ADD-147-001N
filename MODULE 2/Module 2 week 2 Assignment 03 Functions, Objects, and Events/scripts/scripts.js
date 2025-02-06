// Functions, objects, and events

//Dog objects
const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "just hanging out waiting for water",
    altTag: "Black dog in a bucket."
}
const dog2 = {
    heading: "relaxing in the grass",
    image: "images/gold-dog.jpg",
    caption: "just hanging out",
    altTag: "Golden dog laying in the grass."
}
const dog3 = {
    heading: "Lets play fetch",
    image: "images/snow-dog.jpg",
    caption: "Why arent you playing with me",
    altTag: "Dog playing fetch in the snow"
}
const dog4 = {
    heading: "Beach bonding",
    image: "images/white-dogs.jpg",
    caption: "Hanging at the beach with my best friend",
    altTag: "Beach Time"
}

function chooseDog(dog) {
    if (dog == 1) {
        loadMe(dog1, 1); // don't put dog1 in quotes or it will pass a string not the object
    } else if(dog == 2) {
        loadMe(dog2,2);
    } else if(dog == 3) {
        loadMe(dog3,3);
    } else if(dog == 4) {
        loadMe(dog4,4);
    }
}

function loadMe(dog, dogNum){
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.alt);
    HideButton(dogNum);
}

function HideButton(dogNum) {
    document.getElementById("loadButton" + dogNum).style.display = "none";
}