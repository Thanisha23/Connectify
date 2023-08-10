import { useState } from "react";
const Dashboard = () => {
  const [editMode, setEditMode] = useState(false);
  const [userBio, setUserBio] = useState("A passionate coder");
  const yellowColor = "from-yellow-300 to-yellow-400"; // Gradient color classes

  const handleBioChange = (e) => {
    setUserBio(e.target.value);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const userPosts = [
    {
      id: 1,
      imageUrl: "post-image-1.jpg",
      caption: "Enjoying the sunset 🌅",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      imageUrl: "post-image-2.jpg",
      caption: "Exploring new places 🌎",
      timestamp: "5 hours ago",
    },
    // Add more user posts here
  ];

  return (
    <div className="flex p-8">
      {/* Profile Section */}
      <div className="w-1/4 pr-8">
        <div className={`bg-gradient-to-b ${yellowColor} p-4 rounded shadow`}>
          <div className="flex items-center">
            <img
              src="../images/avatar.png" // Replace with the actual image source
              alt="User Profile"
              className="w-[3rem] h-[2rem] rounded-full object-cover mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">User Name</h2>
              {editMode ? (
                <button
                  onClick={toggleEditMode}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
              ) : (
                <button
                  onClick={toggleEditMode}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
          {editMode ? (
            <textarea
              value={userBio}
              onChange={handleBioChange}
              className="w-full mt-2 p-2 border rounded"
            />
          ) : (
            <p className="mt-2 text-gray-700">{userBio}</p>
          )}
        </div>
      </div>

      {/* User Posts */}
      <div className="w-3/4">
        {userPosts.map((post) => (
          <div key={post.id} className="bg-white rounded shadow mb-4">
            <img
              src={post.imageUrl}
              alt={post.caption}
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-4">
              <p className="text-gray-700">{post.caption}</p>
              <p className="text-gray-400 text-sm mt-2">{post.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
