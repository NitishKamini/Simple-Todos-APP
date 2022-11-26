// Write your code here

import './index.css'

const TodoItem = props => {
  const {listDetails, deleteTodoItem} = props
  const {id, title} = listDetails
  const deleteItem = () => {
    deleteTodoItem(id)
  }
  return (
    <li className="todo-container">
      <p className="list-paragraph">{title}</p>
      <button type="button" className="delete-button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
