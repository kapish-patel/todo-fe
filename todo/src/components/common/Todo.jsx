import './Common.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


function Todo() {
    const handleCheckmarkClick = () => {
        console.log('checkmark clicked');
    }
  return (
    <div className="todo-container">
        <p>todo name some todo and taskasdfasdfasdfsadf to complete</p>
        <div className="complete-checkmark-container" onClick={handleCheckmarkClick}>
            <FontAwesomeIcon icon={faCheck} />
        </div>
    </div>
  )
}

export default Todo
