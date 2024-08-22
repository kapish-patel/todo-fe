import React from 'react'
import Todo from '../common/Todo'

function Category() {
  return (
    <div className='category-container'>
      <h1>Category Name</h1>
      <div className="todos-container">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />

      </div>
    </div>
  )
}

export default Category
