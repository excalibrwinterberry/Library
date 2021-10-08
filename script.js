let myLibrary = [{
    title: "The Hobbit",
    author: "J.R. Tolkien",
    pages: 321,
    read: true
}]

const table = document.getElementsByTagName('tbody')[0]

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


function addBookToDisplay(title, author, pages, read){
    const tr = table.insertRow()
    const bookTitle = document.createElement('td')
    const bookAuthor = document.createElement('td')
    const bookPages = document.createElement('td')
    const bookRead = document.createElement('td')

    bookTitle.textContent = title
    bookAuthor.textContent = author
    bookPages.textContent = pages
    bookRead.textContent = read

    tr.appendChild(bookTitle)
    tr.appendChild(bookAuthor)
    tr.appendChild(bookPages)
    tr.appendChild(bookRead)

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