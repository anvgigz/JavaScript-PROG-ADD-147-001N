
class books {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }

    purchasedbooks() {
        return `${this.title} by ${this.author}, published in ${this.year}, is a ${this.genre} book.`;
    }
}



const book1 = new books("Automate THe Boring Stuff with Python",
    "Al Sweigart", 2015, "Programing");
const book2 = new books("Python Crash Course", "Eric Matthes", 2019, "Programing");
const book3 = new books("Learning Python", "Mark Lutz", 2013, "Programing");
const book4 = new books("Head First Python", "Paul Barry", 2010, "Programing");

document.getElementById("book1").innerHTML = book1.purchasedbooks();
document.getElementById("book2").innerHTML = book2.purchasedbooks();
document.getElementById("book3").innerHTML = book3.purchasedbooks();
document.getElementById("book4").innerHTML = book4.purchasedbooks();