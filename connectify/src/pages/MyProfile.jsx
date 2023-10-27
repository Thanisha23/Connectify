// import profile from "../images/profile.png";
import { useState } from "react";
const MyProfile = () => {
  // Simulated user data
  const [userData, setUserData] = useState({
    id: 1,
    username: "johndoe",
    name: "John Doe",
    bio: "A passionate social media user.",
  });

  // State for editing the name
  const [editingName, setEditingName] = useState(false);
  const [newName, setNewName] = useState(userData.name);

  // Handle name edit
  const handleEditName = () => {
    setEditingName(true);
  };

  // Handle name save
  const handleSaveName = () => {
    // Send an API request to update the user's name on the server
    // In a real app, you'd use a fetch or Axios for this.
    // For simplicity, we'll update the name locally here.
    setUserData({ ...userData, name: newName });
    setEditingName(false);
  };
  return (
    <div className="profile-page">
      <div className="profile">
        <img src="profile-image.jpg" alt="Profile" />
        <h2>{userData.name}</h2>
        <p>@{userData.username}</p>
        <p>{userData.bio}</p>
      </div>
      <div className="edit-profile">
        {editingName ? (
          <div>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button onClick={handleSaveName}>Save</button>
          </div>
        ) : (
          <button onClick={handleEditName}>Edit Name</button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
