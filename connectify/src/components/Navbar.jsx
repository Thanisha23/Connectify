import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, loading, setLoading, setUser } =
    useContext(Context);
  console.log(isAuthenticated);

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
    } catch (error) {
      toast.error("Error logging out!");
      setIsAuthenticated(true);
      setLoading(false);
    }
  };
  return (
    <div className="justify-start items-start flex gap-[9rem] font-Lilita  w-screen bg-gray-100 fixed top-0 left-0 z-50 shadow-lg">
      <div className="text-5xl ml-[2rem] mt-[1rem]">
        Connecti<span className="text-yellow-500">fy</span>
      </div>
      <div className="mt-[1.5rem]">
        <ul className="  flex justify-center items-center gap-[4rem] text-2xl">
          <li className="hover:bg-yellow-500 hover:rounded-t-[5rem] rounded-br-[5rem] w-[7rem] h-[3rem] text-center p-[0.5rem] hover:transition hover:duration-700 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-yellow-500 hover:rounded-t-[5rem] rounded-br-[5rem] w-[7rem] h-[3rem] text-center p-[0.5rem] hover:transition hover:duration-700 ease-in-out">
            <a href="#">Features</a>
          </li>
          <li className="hover:bg-yellow-500 hover:rounded-t-[5rem] rounded-br-[5rem] w-[7rem] h-[3rem] text-center p-[0.5rem] hover:transition hover:duration-700 ease-in-out">
            <a href="#">About</a>
          </li>
          <li className="hover:bg-yellow-500 hover:rounded-t-[5rem] rounded-br-[5rem] w-[7rem] h-[3rem] text-center p-[0.5rem] hover:transition hover:duration-700 ease-in-out">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="text-xl p-[1rem] ml-[2.5rem]">
        {isAuthenticated ? (
          <button
            disabled={loading}
            onClick={logoutHandler}
            className="bg-yellow-400 w-[6rem] h-[3rem] rounded-t-[5rem] rounded-br-[5rem] hover:bg-yellow-500 hover:transition hover:duration-700 ease-in-out"
          >
            Logout
          </button>
        ) : (
          <button className="bg-yellow-400 w-[6rem] h-[3rem] rounded-t-[5rem] rounded-br-[5rem] hover:bg-yellow-500 hover:transition hover:duration-700 ease-in-out">
            <Link to="/login">Login</Link>
          </button>
        )}

        <button className="bg-yellow-400 w-[6rem] h-[3rem] rounded-t-[5rem] rounded-br-[5rem] hover:bg-yellow-500 hover:transition hover:duration-700 ease-in-out ml-[2rem]">
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
