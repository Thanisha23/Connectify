// import { useState } from "react";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// // import { getUser } from "../../api/UserRequests";
// import axios from "axios";
// import PropTypes from "prop-types";
// const Conversation = ({ data, currentUser, online }) => {
//   const [userData, setUserData] = useState(null);
//   const dispatch = useDispatch();
//   const API = axios.create({ baseURL: "http://localhost:4000/api/v1" });
//   const getUser = (userId) => API.get(`users/userid/${userId}`);
//   useEffect(() => {
//     const userId = data.members.find((id) => id !== currentUser);
//     const getUserData = async () => {
//       try {
//         const { data } = await getUser(userId);
//         setUserData(data);
//         dispatch({ type: "SAVE_USER", data: data });
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     getUserData();
//   }, []);
//   return (
//     <>
//       <div className="follower conversation">
//         <div>
//           {online && <div className="online-dot"></div>}
//           {/* <img
//             src={
//               userData?.profilePicture
//                 ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture
//                 : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png"
//             }
//             alt="Profile"
//             className="followerImage"
//             style={{ width: "50px", height: "50px" }}
//           /> */}
//           <div className="name" style={{ fontSize: "0.8rem" }}>
//             <span>
//               {userData?.firstname} {userData?.lastname}
//             </span>
//             <span style={{ color: online ? "#51e200" : "" }}>
//               {online ? "Online" : "Offline"}
//             </span>
//           </div>
//         </div>
//       </div>
//       <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
//     </>
//   );
// };

// Conversation.propTypes = {
//   data: PropTypes.object.isRequired, // Modify the type as needed
//   currentUser: PropTypes.string.isRequired, // Modify the type as needed
//   online: PropTypes.bool.isRequired, // Modify the type as needed
// };
// export default Conversation;
