import React,{useState} from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App(){
    const [books,setBooks] =  useState([])

    const deleteBookById = (id)=>{
        const updatedbooks = books.filter((book)=>{
            return book.id!==id
        })
        setBooks(updatedbooks)
    }

    const createBook =(title)=>{
        const updatedbooks = [
            ...books,
            {
                id:Math.round(Math.random()*9999),
                title,
            }
        ]
        setBooks(updatedbooks)
    }
    return<div className='app'>
        <BookList books={books} onDelete ={deleteBookById}/>
        <BookCreate onCreate={createBook} />
    </div>

}

export default App