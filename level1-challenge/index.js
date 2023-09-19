//used to create new objects and set values for any existing object properties 
//Create a new empty object and assign it to the "this" variable.
//good practice to capatilize first letter of the constructor function 
//(tells us that the function is to be run wth "new")
function Book(title, author, year) { //parameters x3 
    //adding properties to "this"
    //"this" refers to the object when it is being created
    this.titleDetails = title //properties = value  (value is stored within the property)
    this.authorDetails = author //properties = value
    this.yearDetails = year //properties = value
    //"getDetails" is our method and manipulates the data with accordance to each object
    this.getDetails = function(){
        console.log ("Title:" + this.titleDetails +" "+ "Author:" + this.authorDetails +" "+ "Year:" + this.yearDetails)
                                            //adds spacing                    //adds spacing
    }
}

//Assign the arguments to the title, author, and year properties of the object.
//create object (The "new" operator is used to create multiple new objects)
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925)  // Expected output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Year: 1925
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960) // Expected output: Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960
const book3 = new Book("The Cat In The Hat", "Dr. Seuss", 1957) //arguments
const book4 = new Book("The Lorax", "Dr.seuss", 1971) //arguments



//access the properties
//"getdetails" is our method to access those properties from the selected object
book1.getDetails()
book2.getDetails()
book4.getDetails()
book3.getDetails()