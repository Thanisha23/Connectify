import welcomebg from "../images/welcome.jpg";
import { FcGoogle } from "react-icons/fc";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Context } from "../main";
import { useContext } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   if (password !== confirmPassword) {
  //     toast.error("Passwords do not match.");
  //   }
  //   // console.log(name, email, password);
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:4000/api/v1/users/new",
  //       {
  //         name,
  //         email,
  //         password,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         withCredentials: true,
  //       }
  //     );
  //     toast.success(data.message);
  //   } catch (error) {
  //     toast.error("some error");
  //     console.log(error);
  //   }
  // };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      setPassword("");
      setConfirmPassword("");
      return; // Return early if passwords don't match
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/users/new",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setIsAuthenticated(true);
    } catch (error) {
      toast.error("Error registering user.");
      console.log(error);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/dashboard"} />;

  return (
    <div className="bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600">
      <div className="absolute top-5 left-9">
        <Link to="/">
          <HiArrowLeftCircle size={50} />
        </Link>
      </div>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="max-w-3xl bg-white rounded-2xl overflow-hidden md:flex min-h-[30rem] shadow-2xl">
          {/* Left Side: Form */}
          <div className="md:w-2/3 px-6 py-8">
            <h1 className="text-4xl font-Lilita mb-6">
              Connecti<span className="text-yellow-500">fy</span>
            </h1>
            <form className="font-Lilita" onSubmit={submitHandler}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-black  mb-2">
                  Username
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Choose a username"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black font-sans"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-black  mb-2">
                  Email
                </label>
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black font-sans"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-black  mb-2">
                  Password
                </label>
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Choose a password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black font-sans"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-black  mb-2"
                >
                  Confirm Password
                </label>
                <input
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black font-sans"
                />
              </div>
              <button
                type="submit"
                className=" mb-[1rem] w-full bg-gradient-to-br from-yellow-600 via-yellow-400 to-yellow-300 text-black py-2 px-4 rounded-lg hover:bg-gradient-to-br hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-600"
              >
                Sign Up
              </button>

              <hr />

              <button
                type="submit"
                className="grid grid-cols-10 justify-center items-center  mt-[1rem] w-full bg-gradient-to-br from-yellow-600 via-yellow-400 to-yellow-300 text-black py-2 px-4 rounded-lg hover:bg-gradient-to-br hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-600"
              >
                <div className="col-span-7 ml-[4rem]">Sign Up with Google</div>

                <span className="col-span-3 mr-[1rem]">
                  <FcGoogle sixe={50} />
                </span>
              </button>
            </form>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-2/3">
            <img
              src={welcomebg}
              alt="Background"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
