// import axios from "axios";

// import { useEffect, useState } from "react";

// const Dashboard = () => {
//   const [userData, setUserData] = useState({});
//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/api/v1/users/me")
//       .then((response) => {
//         setUserData(response.data.user);
//       })
//       .catch((error) => {
//         console.log("Error fetching user data:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Welcome back, {userData.user}</h1>
//     </div>
//   );
// };

// export default Dashboard;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user's profile information
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/users/my-profile",
          {
            withCredentials: true,
          }
        );
        let username = data.user;
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Dashboard;
