//---------------------------------------------
//------------------ NOTES --------------------
//---------------------------------------------
/*
    So, the submit button doesn't work on the button.
    It only works on the form object itself, so have
    get the form object from the DOM and then use the form ("submit", (event))
    on the event listener and hopefully should work for required fields,
    as well as having the information available to create the books.
*/
//---------------------------------------------
//--------------- DOM OBJECTS -----------------
//---------------------------------------------

const BookContainer = document.querySelector("#BookContainer")
const AddBookButton = document.querySelector("#AddBookButton")
const DialogButton = document.querySelector("#DialogButton")
const Dialog = document.querySelector("#AddBookDialog")

//---------------------------------------------
//-------------- DOM FUNCTIONS ----------------
//---------------------------------------------

AddBookButton.addEventListener("click", ()=> {
    Dialog.showModal()
    console.log("Hi")
})

DialogButton.addEventListener("submit", (event) => {
    console.log("Hello....")
    event.preventDefault()
    console.log("Form submitted")
    Dialog.close()
})

//---------------------------------------------
//------------------ MAIN? --------------------
//---------------------------------------------

const myLibrary = [];

function Book(title, author, pages, read, id){

    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor")
    }

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = "Blank"
}

//Should already have the book created?
function addBookToLibrary(){
    
}

function displayBooks(){
    for(let i = 0;  i < myLibrary.length; ++i){
        //New Book Element
        const BookDiv = document.createElement("div");
        BookDiv.classList.add("Book")

        //Add book details to BookDiv and append as child
        const BookTitleDiv = document.createElement("div")
        BookTitleDiv.classList.add("BookDetails")
        BookTitleDiv.classList.add("BookTitle")
        BookTitleDiv.textContent = myLibrary[i].title
        BookDiv.appendChild(BookTitleDiv)

        const BookAuthorDiv = document.createElement("div")
        BookAuthorDiv.classList.add("BookDetails")
        BookAuthorDiv.classList.add("BookAuthor")
        BookAuthorDiv.textContent = myLibrary[i].author
        BookDiv.appendChild(BookAuthorDiv)

        const BookPagesDiv = document.createElement("div") 
        BookPagesDiv.classList.add("BookDetails")
        BookPagesDiv.classList.add("BookPages")
        BookPagesDiv.textContent = myLibrary[i].pages
        BookDiv.appendChild(BookPagesDiv)

        const BookReadDiv = document.createElement("div")
        BookReadDiv.classList.add("BookDetails")
        BookReadDiv.classList.add("BookRead")
        BookReadDiv.textContent = myLibrary[i].read
        BookDiv.appendChild(BookReadDiv)



        // BookDiv.classList.add("Book")
        BookContainer.appendChild(BookDiv)

    }
}

const Book1 = new Book("Dew", "Dew", 100, false, 111)
const Book2 = new Book("Dewart", "Dewart", 111, true, 222)

myLibrary.push(Book1)
myLibrary.push(Book2)

displayBooks()
