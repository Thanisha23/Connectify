import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Context } from "../main";

const LogoutHandler = () => {
  const navigate = useNavigate();
  const { setLoading, setUser, setIsAuthenticated } = useContext(Context);

  useEffect(() => {
    const handleLogout = async () => {
      setLoading(true);
      try {
        await axios.get("http://localhost:4000/api/v1/users/logout", {
          withCredentials: true,
        });

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

    handleLogout(); // Call the function when the component mounts

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return null; // This component doesn't render anything
};

export default LogoutHandler;
