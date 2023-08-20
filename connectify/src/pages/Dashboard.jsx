import Navbar from "../components/Navbar";
import profile from "../images/profile.png";
import { Context } from "../main";
import { useContext, useEffect } from "react";
import Loader from "../components/Loader";
import axios from "axios";
import Sidebar from "../components/Sidebar";
const Dashboard = () => {
  const {
    loading,
    user,
    setUser,
    setIsAuthenticated,
    setUserLoading,
    userLoading,
  } = useContext(Context);
  // console.log(user);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:4000/api/v1/users/me", {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data.user);
          setUserLoading(false);
          setIsAuthenticated(true);
        })
        .catch(() => {
          setUser({});
          setUserLoading(false);
          setIsAuthenticated(false);
        });
    }, 2000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  // {userLoading ? (
  //   <p>Loading...</p>
  // ) : (
  //   <h1 className="username font-Lilita text-xl">{user.name}</h1>
  // )}

  return (
    // <div className="container flex justify-center font-Lilita bg-banner bg-cover ">
    //   <Navbar />

    //   <div className="profile-card w-[clamp(428px,990px,990px)] h-[660px] bg-white border-2 border-accent-bg rounded-xl grid grid-rows-[220px,auto] overflow-auto m-[3rem] pr-[2rem] pl-[2rem] ">
    //     {/* Profile Header Section */}
    //     <div
    //       className="profile-header bg-center bg-cover rounded-t-[30px] relative"
    //       style={{ backgroundImage: "url(/images/banner.jpg)" }}
    //     >
    //       <div className="main-profile absolute inset-y-[calc(100%-75px)] left-70px flex items-center gap-[2rem]">
    //         {/* <div className="profile-image w-150px h-150px bg-center bg-cover rounded-full border-10 border-primary-bg bg-["></div> */}
    //         <div>
    //           <img className="w-[150px] h-[150px] " src={profile} alt="user" />
    //         </div>
    //         <div className="profile-names flex flex-col justify-center bg-primary-bg text-primary-color px-30px rounded-r-[50px] transform translate-x-[-10px]">
    //           {userLoading ? (
    //             <p>Loading...</p>
    //           ) : (
    //             <h1 className="username font-Lilita text-xl">{user.name}</h1>
    //           )}
    //           <small className="page-title text-secondary-color">
    //             Front-End developer
    //           </small>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Profile Body Section */}
    //     <div className="profile-body grid grid-cols-[150px,auto] gap-[70px] p-70px">
    //       <div className="profile-actions grid grid-rows-[max-content,auto] gap-10px mt-30px">
    //         <button className="bg-yellow-400 w-[8rem] h-[3rem] hover:bg-yellow-500 hover:transition hover:duration-700 ease-in-out mt-[1rem] ml-[1rem] text-[1rem] rounded-lg">
    //           Follow
    //         </button>
    //         <button className="bg-yellow-400 w-[8rem] h-[3rem] hover:bg-yellow-500 hover:transition hover:duration-700 ease-in-out mt-[1rem] ml-[1rem] text-[1rem] rounded-lg">
    //           Message
    //         </button>
    //         <section className="bio bg-secondary-bg text-primary-color flex flex-col gap-10px p-10px rounded-10px">
    //           <div className="bio-header flex gap-10px border-b border-border-color text-secondary-color">
    //             <i className="fa fa-info-circle"></i>
    //             Bio
    //           </div>
    //           <p className="bio-text">Aspiring Frontend Developer</p>
    //         </section>
    //       </div>

    //       <div className="account-info grid grid-cols-[1fr,1fr,1fr] grid-rows-[2fr,1fr] gap-20px">
    //         <div className="data flex flex-col justify-between text-secondary-color p-30px text-center border border-border-color rounded-15px">
    //           <div className="important-data flex justify-between items-center">
    //             <section className="data-item">
    //               <h3 className="value">104</h3>
    //               <small className="title">Post</small>
    //             </section>
    //             <section className="data-item">
    //               <h3 className="value">21K</h3>
    //               <small className="title">Follower</small>
    //             </section>
    //             <section className="data-item">
    //               <h3 className="value">51</h3>
    //               <small className="title">Following</small>
    //             </section>
    //           </div>
    //           <div className="other-data flex justify-between items-center bg-secondary-bg p-15px rounded-10px">
    //             <section className="data-item">
    //               <h3 className="value">41K</h3>
    //               <small className="title">Likes</small>
    //             </section>
    //             <section className="data-item">
    //               <h3 className="value">12K</h3>
    //               <small className="title">Comments</small>
    //             </section>
    //             <section className="data-item">
    //               <h3 className="value">2K</h3>
    //               <small className="title">Saved</small>
    //             </section>
    //           </div>
    //         </div>
    //         <div className="social-media bg-secondary-bg text-secondary-color p-15px rounded-10px flex items-center gap-15px">
    //           <a href="" className="media-link">
    //             <i className="fab fa-facebook-square"></i>
    //           </a>
    //           <a
    //             href="https://twitter.com/MammadSahragard"
    //             className="media-link"
    //           >
    //             <i className="fab fa-twitter-square"></i>
    //           </a>
    //           <a
    //             href="https://www.linkedin.com/in/mohammadsahragard/"
    //             className="media-link"
    //           >
    //             <i className="fab fa-linkedin"></i>
    //           </a>
    //           <a
    //             href="https://www.instagram.com/mammad.sahragard/"
    //             className="media-link"
    //           >
    //             <i className="fab fa-instagram-square"></i>
    //           </a>
    //           <a
    //             href="https://github.com/MohammadSahragard"
    //             className="media-link"
    //           >
    //             <i className="fab fa-github-square"></i>
    //           </a>
    //         </div>
    //         <div className="last-post border border-border-color bg-secondary-bg rounded-10px p-10px grid grid-rows-[70%,auto,max-content] gap-10px">
    //           <div
    //             className="post-cover relative bg-center bg-cover rounded-5px"
    //             style={{ backgroundImage: "url(/images/last-post.jpg)" }}
    //           >
    //             <span className="last-badge absolute inset-3px bg-[rgba(0,0,0,0.7)] text-primary-color p-5px rounded-3px">
    //               Last Post
    //             </span>
    //           </div>
    //           <h3 className="post-title text-primary-color text-18px">
    //             3D layer
    //           </h3>
    //           <button className="post-CTA text-accent-color border border-accent-color text-center rounded-5px p-5px">
    //             View
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full h-screen bg-banner bg-cover flex items-center bg-no-repeat">
      <Sidebar />
    </div>
  );
};

export default Dashboard;
