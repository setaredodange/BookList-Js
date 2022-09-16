const addBookBtn = document.querySelector('.add-btn')
const titleInputElem = document.querySelector('#title')
const authorInputElem= document.querySelector('#author')
const yearInputElem = document.querySelector('#year')
const booksContainer = document.querySelector('#book-list')
let books = []

addBookBtn.addEventListener('click', function (event){
    event.preventDefault()
    // console.log('add shod');

    let titleInputValue = titleInputElem.value
    let authorInputValue = authorInputElem.value
    let yearInputValue = yearInputElem.value

    

    if(titleInputValue==='' ||authorInputValue==='' ||yearInputValue===''  ){
        alert('لطفا همه موارد پر شود')

    }else{        
    let newBookObject = {
        id: books.length + 1,
        title: titleInputValue,
        author: authorInputValue,
        year: yearInputValue
    }
        books.push (newBookObject)

        setIntoLocalStorage(books)
    }
   
})


function setIntoLocalStorage (allBooksArray){
    localStorage.setItem('books', JSON.stringify(allBooksArray))
    makeEmptyInputs()
    booksGenerator(allBooksArray) 
}

function makeEmptyInputs (){
    titleInputElem.value = ''
    authorInputElem.value = ''
    yearInputElem.value = ''

}

function booksGenerator (allBooksArray){
    booksContainer.innerHTML = '' 

    allBooksArray.forEach(function(book){
        let newBookTrElem = document.createElement('tr')
        // console.log(newBookTrElem);

        let newBookTitleTh = document.createElement('th')
        newBookTitleTh.innerHTML = book.title

        let newBookAuthorTh = document.createElement('th')
        newBookAuthorTh.innerHTML = book.author

        let newBookYearTh = document.createElement('th')
        newBookYearTh.innerHTML = book.year 

        newBookTrElem.append(newBookTitleTh, newBookAuthorTh,newBookYearTh ) 
        // console.log(newBookTrElem);

        booksContainer.append(newBookTrElem)


    })
   
}

function getBooksFromLocalStorage(){
    let localStorageBooks = localStorage.getItem('books')
    // console.log(localStorageBooks);

    if (localStorageBooks){
books = JSON.parse(localStorageBooks)
booksGenerator(books)

    
}
}


window.addEventListener('load', getBooksFromLocalStorage);