import './Common.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteTodo, updateTodo } from '../../Redux/slice/todoSlice';

function Todo({data}) {
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState(data.description);

    const handleCheckmarkClick = () => {
        console.log('checkmark clicked');
        const todo = {
            id: data.id,
            todobucketid: data.todobucketid,
            description: data.description,
            userId: data.userId,
            completed: !data.completed,
        }
        dispatch(deleteTodo(todo));
    };

    const handleTextClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setDescription(e.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
        const updatedata = {
            id: data.id,
            todobucketid: data.todobucketid,
            description: description,
            userId: data.userId,
            completed: data.completed,
        }
        dispatch(updateTodo(updatedata));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setIsEditing(false);
            const updatedata = {
              id: data.id,
              description: description,
            }
            dispatch(updateTodo(updatedata));
        }
    };

    return (
        <div className="todo-container">
            {isEditing ? (
                <input
                    type="text"
                    value={description}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    onKeyPress={handleKeyPress}
                    autoFocus
                />
            ) : (
                <p onClick={handleTextClick}>{description}</p>
            )}
            <div className="complete-checkmark-container" onClick={handleCheckmarkClick}>
                <FontAwesomeIcon icon={faCheck} />
            </div>
        </div>
    );
}

export default Todo;
