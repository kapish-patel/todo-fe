import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" defaultValue="John" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" defaultValue="asdasd@example.com" />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
