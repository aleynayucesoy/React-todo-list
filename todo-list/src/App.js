import React from 'react'

//components
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

//context
import { TodoProvider } from './context/TodoContext'

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1>TODO List with Categories</h1>
        <p>Enter your input and select your category</p>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  )
}

export default App
