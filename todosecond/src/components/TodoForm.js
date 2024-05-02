import React from 'react'

function TodoForm({handleSubmit,todo,editId,setTodo}) {
 

  return (

    <form className="todoForm" onSubmit={handleSubmit} style={{marginBottom:"15px"}}>
                <input type='text'value={todo} onChange={(e)=>setTodo(e.target.value)}/>
                <button type="submit">{editId ? "Edit":"ADD"}</button>
    </form>
  )
}

export default TodoForm