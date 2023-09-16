import PropTypes from "prop-types";
import userimg from "../images/profile.png";
import { Context } from "../main";
import { useContext } from "react";
const UserProfile = (props) => {
  const { user, userLoading } = useContext(Context);
  return (
    <div
      className={`flex gap-5 items-center ${
        props.toggle
          ? "bg-none transition-all duration-300 delay-200"
          : "bg-black rounded-xl p-2"
      }`}
    >
      <div className="min-w-[3.5rem] h-[3.5rem]">
        <img
          src={userimg}
          alt="user-img"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      {/* <div className={`${props.toggle ? "text-black" : "text-white"}`}
          > */}
      <div className={props.toggle ? "opacity-0 delay-200" : "text-white"}>
        <h3 className="text-xl">
          {" "}
          {userLoading ? (
            <p>Loading...</p>
          ) : (
            <p className="username font-Lilita text-xl">{user.name}</p>
          )}
        </h3>
        <span className="text-[0.75rem] opacity-60 ">{user.email}</span>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  toggle: PropTypes.bool.isRequired,
};

export default UserProfile;
