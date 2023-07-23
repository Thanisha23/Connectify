import welcomebg from "../images/welcome.jpg";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 relative">
      <div className="absolute top-5 left-9">
        <Link to="/">
          {" "}
          <HiArrowLeftCircle size={50} />
        </Link>
      </div>

      <div className="flex items-center justify-center min-h-screen ">
        <div className="max-w-xl bg-white rounded-2xl overflow-hidden md:flex min-h-[23rem] shadow-2xl">
          {/* Left Side: Form */}
          <div className="md:w-1/2 px-6 py-8">
            <h1 className="text-4xl font-Lilita mb-6">
              Connecti<span className="text-yellow-500">fy</span>
            </h1>
            <form className="font-Lilita">
              <div className="mb-4">
                <label htmlFor="username" className="block text-black mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Your username"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black font-sans"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="password" className="block text-black mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black font-sans"
                />
              </div>
              <div className="text-sm text-gray-400 font-sans text-right mb-4">
                <a href="#forgot-password">Forgot Password?</a>
              </div>
              <div className="mb-2 mt-1">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-br from-yellow-600 via-yellow-400 to-yellow-300 text-black py-2 px-4 rounded-lg hover:bg-gradient-to-br hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2">
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

export default Login;
