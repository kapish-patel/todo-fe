
import Category from './Category'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import { getTodos } from '../../Redux/slice/todoSlice';
import { useEffect } from 'react'
import './Todo.css'

function TodoCategories() {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.userid);
  const username = useSelector((state) => state.user.username);
  const categories = useSelector((state) => state.user.categories);


  const category1 = useSelector((state) => state.todos.category1);
  const category2 = useSelector((state) => state.todos.category2);
  const category3 = useSelector((state) => state.todos.category3);
  const category4 = useSelector((state) => state.todos.category4);
  const category5 = useSelector((state) => state.todos.category5);

  useEffect(() => {
    dispatch(getTodos(userId));
  }, [dispatch, userId]);

  const navigate = useNavigate();

  return (
    <>
      <div className="user-container" onClick={() => {navigate('/profile')}}>
        <FontAwesomeIcon icon={faUser} />
        &nbsp; &nbsp;
        <p>{username}</p>
      </div>
      <div className='categories-container'>
        {/* category with a prop as name */}
          <Category name={categories[0]} cid={0} todos={category1}/>
          <Category name={categories[1]} cid={1} todos={category2}/>
          <Category name={categories[2]} cid={2} todos={category3}/>
          <Category name={categories[3]} cid={3} todos={category4}/>
          <Category name={categories[4]} cid={4} todos={category5}/>
      </div>
    </>
  )
}

export default TodoCategories
