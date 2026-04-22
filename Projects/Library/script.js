//---------------------------------------------
//------------------ NOTES --------------------
//---------------------------------------------
/*

*/
//---------------------------------------------
//--------------- DOM OBJECTS -----------------
//---------------------------------------------

const BookContainer =   document.querySelector("#BookContainer")
const AddBookButton =   document.querySelector("#AddBookButton")
const DialogButton  =   document.querySelector("#DialogButton")
const Dialog        =   document.querySelector("#AddBookDialog")
const DialogForm    =   document.querySelector("#DialogForm")
const FormTitle     =   document.querySelector("#FormTitle")
const FormAuthor    =   document.querySelector("#FormAuthor")
const FormPages     =   document.querySelector("#FormPages")
const FormRead      =   document.querySelector("#FormRead")

//---------------------------------------------
//-------------- DOM FUNCTIONS ----------------
//---------------------------------------------

AddBookButton.addEventListener("click", ()=> {
    Dialog.showModal()
})

DialogForm.addEventListener("submit", (event) => {
    //Stops form from being submitted
    event.preventDefault()

    //Get info from form
    console.log("Form Title..? =>", FormTitle.value)
    console.log("Form Author..? =>", FormAuthor.value)
    console.log("Form Pages..? =>", FormPages.value)
    console.log("Form Read..? =>", FormRead.value)
    
    addBookToLibrary(FormTitle.value, FormAuthor.value, FormPages.value, FormRead.value)


    //Clear form info, for next book
    FormTitle.value = ""
    FormAuthor.value = ""
    FormPages.value = ""
    FormRead.value = ""

    //Close Add Book menu
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
function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    displayBooks()
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
