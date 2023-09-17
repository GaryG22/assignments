//used to create multiple similar objects 
//Create a new empty object and assign it to the this variable.
//good practice to capatilize first letter of the constructor function
function Book(title, author, year) { //parameters x3
    //adding properties to "this"
    //"this" refers to the object when it is being created
    this.TitleDetails = title; //properties = value  (value is stored within the property)
    this.AuthorDetails = author; //properties = value
    this.YearDetails = year; //properties = value
    //"getDetails" is our method and manipulates the data with accordance to each object
    this.getDetails = function(){
        return ("Title:" + this.TitleDetails +" "+ "Author:" + this.AuthorDetails +" "+ "Year:" + this.YearDetails)
                                            //adds spacing                    //adds spacing
    }
}

//Assign the arguments to the title, author, and year properties of the object.
//create object (The "new" operator is used to create multiple new objects)
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925); //arguments
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960); //arguments
const book3 = new Book("The Cat In The Hat", "Dr. Seuss", 1957) //arguments
const book4 = new Book("The Lorax", "Dr.seuss", 1971) //arguments



//access the properties
console.log(book1.getDetails());
console.log(book2.getDetails()); 
console.log(book3.getDetails());
console.log(book4.getDetails());