

const cat1 = {
    heading: "This is nice blanket destroyer cat",
    image: "images/destroyer cat.jpg",
    caption: "This cat will destroy everything you own and will never leave you alone",
    altTag: "Destroyer cat"
}

const cat2 = {
    heading: "This cat will make you think that he loves you but he does not",
    image: "images/evil cat.jpg",
    caption: "Just look at that face, he is up to no good",
    altTag: "no cares evil cat"
}

const cat3 = {
    heading: "This cat will never leave you alone",
    image: "images/evilDistractoCat.jpg",
    caption: "This cat will always be in your face and will never leave you alone",
    altTag: "evil distracto cat"
}

const cat4 = {
    heading: "This cat will destroy your house",
    image: "images/more evil cat.jpg",
    caption: "This cat will terrorize your other pets and scratch up anything you don't want it to and if you have kids.... beware",
    altTag: "very mean evil cat"
}

let catCounter = 0;

function chooseCat(cat) {
    if (cat == 1) {
        loadMe(cat1, 1);
    } else if (cat == 2) {
        loadMe(cat2, 2);
    } else if (cat == 3) {
        loadMe(cat3, 3);
    } else if (cat == 4) {
        loadMe(cat4, 4);
    }
    catCounter++;
    document.getElementById("message").innerText = `\n\n\n\n\nI have seen ${catCounter} of the most evil cats.`;
    if (catCounter == 4) {
        revealMostEvilCat();
    } else if (catCounter < 4) {}
}

function loadMe(cat, catNum) {
    document.getElementById("heading" + catNum).innerHTML = cat.heading;
    document.getElementById("img" + catNum).src = cat.image;
    document.getElementById("img" + catNum).style.display = "block";
    document.getElementById("p"+catNum).innerHTML = cat.caption;
    document.getElementById("img"+catNum).setAttribute('alt',cat.altTag);
    HideButton(catNum);
}

function HideButton(catNum) {
    document.getElementById("loadbutton"+ catNum).style.display = "none";
}

function revealMostEvilCat() {
    const message = "\n\n\n\n\n\nYou have seen all the most evil cats around but the worst is cat is now revealed you will never be ready to face this cat";
    document.getElementById("message").innerText = message;
    document.getElementById("mostEvilCat").style.display = "block";
}