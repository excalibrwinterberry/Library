let myLibrary = [
    new Book("The Hobbit", "J.R. Tolkien", 321, true)
]

const books = document.getElementsByClassName('display')[0]

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function displayBooks(){
    myLibrary.forEach((book) => {
        addBookToDisplay(book.title, book.author, book.pages, book.read)
    });
}

function addBookToDisplay(bookTitle, bookAuthor, bookPages, bookRead){
    const bookCard  = document.createElement('div')
        const bookHeader = document.createElement('div')
        const bookBody = document.createElement('div')
        bookCard.classList.add('card')
        bookHeader.classList.add('bookTitle')
        bookBody.classList.add('bookBody')

        const title = document.createElement('p')
        const author = document.createElement('p')
        const pages = document.createElement('p')
        const read = document.createElement('p')

        title.textContent = bookTitle
        author.textContent = bookAuthor
        pages.textContent = bookPages
        read.textContent = bookRead

        bookHeader.appendChild(title)
        bookBody.appendChild(author)
        bookBody.appendChild(pages)
        bookBody.appendChild(read)

        bookCard.appendChild(bookHeader)
        bookCard.appendChild(bookBody)

        books.appendChild(bookCard)
}





function addBookToLibrary(event){
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const pages = document.getElementById("pages").value
    const read = document.getElementById("read").checked

    const book = new Book(title, author, pages, read)
    myLibrary.push(book)

    addBookToDisplay(title, author, pages, read)

    document.getElementById("title").value = ''
    document.getElementById("author").value = ''
    document.getElementById("pages").value = ''
    document.getElementById("read").checked = false


}


document.getElementById('bookAdd').addEventListener('click', addBookToLibrary)

displayBooks()