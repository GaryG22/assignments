function Book(title, author, year) {
//"this" refers to the object when it is being created
    this.TitleDetails = title;
    this.AuthorDetails = author;
    this.YearDetails = year;
    this.getDetails = function(){
        return ("Title:" + this.TitleDetails +" "+ "Author:" + this.AuthorDetails +" "+ "Year:" + this.YearDetails)
    }
}
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("The Cat In The Hat", "Dr. Seuss", 1957)
const book4 = new Book("The Lorax", "Dr.seuss", 1971)
//create object (Keyword new is used to create the object)

console.log(book1.getDetails());// Expected output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Year: 1925


//access the properties
console.log(book2.getDetails()); // Expected output: Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960
console.log(book3.getDetails());
console.log(book4.getDetails());