import Todo from '../common/Todo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../../Redux/slice/todoSlice'

function Category({name, cid, todos}) {

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userid);
  const handleAddTodoClick = () => {  
    console.log('add todo clicked on id:', cid);
    const newtodo = {
      description: 'new todo',
      todobucketid: cid,
      userId: userId,
      completed: false
    }

    dispatch(addTodo(newtodo));
  }
  return (
    <div className='category-container'>
      <h1>{name}</h1>
      <div className="addTodo-container" onClick={handleAddTodoClick}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="todos-container">
        {todos.map(todo => (
          <Todo key={todo.id} data={todo}/>
        ))}
      </div>
    </div>
  )
}

export default Category
