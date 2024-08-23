import "./Profile.css";
import { useState } from "react";
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { userUpdate } from '../../Redux/slice/userSlice';

function Profile() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [category1 , setCategory1] = useState(user.categories[0]);
  const [category2 , setCategory2] = useState(user.categories[1]);
  const [category3 , setCategory3] = useState(user.categories[2]);
  const [category4 , setCategory4] = useState(user.categories[3]);
  const [category5 , setCategory5] = useState(user.categories[4]);

  const handleUpdateProfileclick = (e) => { 
    e.preventDefault();
    const userDetails = {
      username: username,
      email: email,
      categories: [category1, category2, category3, category4, category5],
    }
    dispatch(userUpdate(userDetails));
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}}/>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>

        <label htmlFor="categories">Category 1:</label>
        <input type="text" id="categories" name="categories" value={category1} onChange={(e) => {setCategory1(e.target.value)}}/>

        <label htmlFor="categories">Category 2:</label>
        <input type="text" id="categories" name="categories" value={category2} onChange={(e) => {setCategory2(e.target.value)}}/>

        <label htmlFor="categories">Category 3:</label>
        <input type="text" id="categories" name="categories" value={category3} onChange={(e) => {setCategory3(e.target.value)}}/>

        <label htmlFor="categories">Category 4:</label>
        <input type="text" id="categories" name="categories" value={category4} onChange={(e) => {setCategory4(e.target.value)}}/>

        <label htmlFor="categories">Category 5:</label>
        <input type="text" id="categories" name="categories" value={category5} onChange={(e) => {setCategory5(e.target.value)}}/>

        <button type="submit" onClick={handleUpdateProfileclick}>Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
