
import Category from './Category'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
import './Todo.css'

function TodoCategories() {

  const navigate = useNavigate();

  return (
    <>
      <div className="user-container" onClick={() => {navigate('/profile')}}>
        <FontAwesomeIcon icon={faUser} />
        &nbsp; &nbsp;
        <p>John</p>
      </div>
      <div className='categories-container'>
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
      </div>
    </>
  )
}

export default TodoCategories
