//---------------------------------------------
//--------------- DOM OBJECTS -----------------
//---------------------------------------------

const BookContainer = document.querySelector("#BookContainer")
const AddBookButton = document.querySelector("#AddBookButton")

//---------------------------------------------
//-------------- DOM FUNCTIONS ----------------
//---------------------------------------------

AddBookButton.addEventListener("click", ()=> {
    console.log("Hello from Add Button!")
})

//---------------------------------------------
//------------------ MAIN? --------------------
//---------------------------------------------

const myLibrary = [];

function Book(title, author, pages, read, id){

    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor")
    }

    this.title = "Blank"
    this.author = "Blank"
    this.pages = 0
    this.read = false
    this.id = "Blank"
}

//Should already have the book created?
function addBookToLibrary(){
    
}

function displayBooks(){
    for(let i = 0;  i < myLibrary.length; ++i){
        const BookDiv = document.createElement("div");
        BookDiv.classList.add("Book")
        BookContainer.appendChild(BookDiv)
    }
}

const Book1 = new Book("Dew", "Dew", 100, false, 111)
const Book2 = new Book("Dewart", "Dewart", 111, true, 222)

myLibrary.push(Book1)
myLibrary.push(Book2)

displayBooks()
