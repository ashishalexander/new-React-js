import React from 'react'
import { FiCheck } from "react-icons/fi";

function TodoList({todos,handleDelete,handleEdit,handleComplete}) {
  return (
    <ul className='allTodos'>
                {todos.map((t)=>(
                     <li
                     className={`singleTodo ${t.completed ? 'completed' : ''}`}
                     key={t.id} >
                    <button onClick={()=>handleComplete(t.id)} style={{marginRight:"15px"}}><FiCheck /></button>
                    <span className='todoText'key={t.id}>{t.todo}</span>
                    <button onClick={()=>handleEdit(t.id)}>Edit</button>
                    <button onClick={()=> handleDelete(t.id)}>delete</button>
                </li>

                ))}
                
            </ul>
  )
}

export default TodoList