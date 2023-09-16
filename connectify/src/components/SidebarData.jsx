import { datas } from "../components/Data";
import { FiLogOut } from "react-icons/fi";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../main";
import { toast } from "react-hot-toast";
import axios from "axios";
const SidebarData = (props) => {
  const { setIsAuthenticated, setLoading, setUser } = useContext(Context);
  const navigate = useNavigate();
  const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(
        "http://localhost:4000/api/v1/users/logout",

        {
          withCredentials: true,
        }
      );

      toast.success("Logged Out Successfully!");
      setIsAuthenticated(false);
      setLoading(false);
      navigate("/");
      setUser({});
    } catch (error) {
      toast.error("Error logging out!");
      setIsAuthenticated(true);
      setLoading(false);
    }
  };
  return (
    <div className="">
      {datas.map((data) => {
        return (
          <div
            onClick={() => {
              navigate(data.navigateTo);
            }}
            className={`${
              props.toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } flex items-center mt-2 p-4 rounded-lg cursor-pointer hover:bg-white transition-all duration-300 last:absolute left-4 bottom-4`}
            key={data.id}
          >
            <div className="mr-8 text-[1.7rem] text-amber-800">{data.icon}</div>
            <div
              className={`${
                props.toggle ? "opacity-0 delay-200 " : ""
              } text-[1rem] text-amber-800 whitespace-pre`}
            >
              {data.text}
            </div>
          </div>
        );
      })}

      {/* //   id: 7,
  //   icon: <FiLogOut />,
  //   text: "Logout", */}

      <button
        className={`${
          props.toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
        } flex items-center mt-2 p-4 rounded-lg cursor-pointer hover:bg-white transition-all duration-300 absolute bottom-4`}
        onClick={logoutHandler}
      >
        <div className="mr-8 text-[1.7rem] text-amber-800">
          <FiLogOut />
        </div>
        <div
          className={`${
            props.toggle ? "opacity-0 delay-200 " : ""
          } text-[1rem] text-amber-800 whitespace-pre`}
        >
          Logout
        </div>
      </button>
    </div>
  );
};
SidebarData.propTypes = {
  toggle: PropTypes.bool.isRequired,
};
export default SidebarData;
