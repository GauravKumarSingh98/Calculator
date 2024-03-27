import React from 'react'
import TodoItem from './TodoItem'

export default function ToDoItems({todoItems, onDeleteClick}) {
   
  return (
    <div className='items-container'>
        {todoItems.map((item) => (
            <TodoItem todoDate={item.dueDate} todoName={item.name} onDeleteClick ={onDeleteClick}/>
        ))}
    </div>
  )
}
