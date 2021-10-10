//array to hold book objects
let myLibrary = [
    Book("The Hobbit", "J.R. Tolkien", 321, true)
]

//book display section
const books = document.getElementsByClassName('display')[0]

//constructor for book object
function Book(title, author, pages, read){
    return {title, author, pages, read}
    
}


//function to display books from the myLibrary array
function displayBooks(){
    books.innerHTML = ''
    myLibrary.forEach((book, index) => {
        addBookToDisplay(book.title, book.author, book.pages, book.read,  index)
    });

    // const removeBtns = [...document.getElementsByClassName('remove')]

    // removeBtns.forEach((removeBtn) => {
    //     removeBtn.addEventListener('click', removeBook)
    // })

    // const changeBtns = [...document.getElementsByClassName('change')]

    // changeBtns.forEach((changeBtn) =>{
    //     changeBtn.addEventListener('click', changeRead)
    // })


}

//function to change the status of read of a book object 
function changeReadEvent(event){

    const bookId = parseInt(event.target.parentElement.id.substring(4))
    //change read in myLibrary

    myLibrary[bookId].read = !myLibrary[bookId].read
    //change read in display

    const bookRead = event.target.parentElement.getElementsByClassName('bookBody')[0].getElementsByTagName('p')[2]
    bookRead.textContent = (bookRead.textContent === 'Read') ? 'Not Read' : 'Read'
}

//function to remove a book object
function removeBook(event){
    const bookId = event.target.id
    myLibrary.splice(bookId, 1)
    displayBooks()
    
}

//function to add a book to the end of the display section
function addBookToDisplay(bookTitle, bookAuthor, bookPages, bookRead, bookIndex){
    //creating divs to store data
    const bookCard  = document.createElement('div')
    const bookHeader = document.createElement('div')
    const bookBody = document.createElement('div')


    //adding class to add style
    bookCard.classList.add('card')
    bookHeader.classList.add('bookTitle')
    bookBody.classList.add('bookBody')

    bookCard.setAttribute('id', `book${bookIndex}`)

    //adding p tag to hold data
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const read = document.createElement('p')

    //remove button
    const remove = document.createElement('button')
    remove.classList.add('remove')
    remove.setAttribute('id', `${bookIndex}`)
    remove.addEventListener('click', removeBook)

    //read button
    const changeRead = document.createElement('button')
    changeRead.classList.add('change')
    changeRead.setAttribute('id', `read${bookIndex}`)
    changeRead.addEventListener('click', changeReadEvent)

    title.textContent = bookTitle
    author.textContent = bookAuthor
    pages.textContent = bookPages
    read.textContent = bookRead ? "Read" : "Not Read"

    remove.textContent = "Remove"

    changeRead.textContent = "Change"

    bookHeader.appendChild(title)
    bookBody.appendChild(author)
    bookBody.appendChild(pages)
    bookBody.appendChild(read)

    bookCard.appendChild(bookHeader)
    bookCard.appendChild(bookBody)
    bookCard.appendChild(remove)
    bookCard.appendChild(changeRead)

    books.appendChild(bookCard)
}

//function to add the values taken as input by user to the library
function addBookToLibrary(event){
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const pages = document.getElementById("pages").value
    const read = document.getElementById("read").checked

    const book =  Book(title, author, pages, read)
    myLibrary.push(book)

    displayBooks()

    document.getElementById("title").value = ''
    document.getElementById("author").value = ''
    document.getElementById("pages").value = ''
    document.getElementById("read").checked = false


}

//adding event listener for adding the book
document.getElementById('bookAdd').addEventListener('click', addBookToLibrary)

//displaying the books on load
displayBooks()


