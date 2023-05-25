import React, { useContext } from 'react'

//component
import TodoCategory from './TodoCategory'

//context
import TodoContext from '../context/TodoContext'

const TodoList = () => {
    const { categories } = useContext(TodoContext)

    return (
        <>
            <h3 className="todo-list-header">Todo List</h3>
            <div className="todo-list-container">
                {categories.map((category, idx) => (
                    <TodoCategory key={idx} category={category} />
                ))}
            </div>
        </>
    )
}

export default TodoList