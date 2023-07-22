import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <div className=" absolute top-[41rem] left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-0 m-0 ">
      <p className="text-[8rem] font-extrabold mt-auto absolute top-[0.8rem] z-40">
        <span className="bg-footer text-transparent bg-clip-text bg-cover">
          Connecti
        </span>
        <span className=" bg-gradient-to-br from-yellow-600 via-yellow-400 to-yellow-300 mix-blend-multiply text-transparent bg-clip-text bg-cover drop-shadow-xl">
          fy
        </span>
      </p>
      <div className="bg-footer bg-cover bg-end w-[80rem] h-[20rem]  rounded-[2rem] shadow-2xl top-[10rem] absolute grid grid-cols-4">
        <div className="col-span-2 text-white mt-[3rem] font-Lilita">
          <h1 className=" text-[2.5rem] ml-[3rem] ">
            Start your Journey with us Now!
          </h1>
          <div className="mt-[1rem] flex justify-center items-center mr-[15rem] gap-[2rem]">
            <div>
              <IoLocationSharp size={30} />
            </div>
            <div>
              <p className="text-lg">21-Ambadi Street,Vasai,India</p>
            </div>
          </div>

          <div className="mt-[1rem] flex justify-center items-center mr-[22rem] gap-[2rem]">
            <div>
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <p className="text-lg">+1 123 456231</p>
            </div>
          </div>

          <div className="mt-[1rem] flex justify-center items-center mr-[19rem] gap-[2rem]">
            <div>
              <MdEmail size={25} />
            </div>
            <div>
              <p className="text-lg">thanisha@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <input
            className="w-[38rem] h-[3rem] mt-[3rem] mr-[1rem] rounded-3xl pl-[2rem]"
            type="email"
            placeholder="Your e-mail"
          />
          <button className="bg-yellow-500 absolute top-[3rem] left-[64rem] w-[14rem] h-[3rem] rounded-3xl font-Lilita text-xl">
            Subscribe Now
          </button>
          <div className="mt-[2rem]  text-white font-Lilita grid grid-cols-5">
            <div className="col-span-2">
              <h1 className="  text-2xl mb-[0.5rem]">About the company</h1>
              <p className="w-[15rem] h-[30rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                magnam sunt repellat, provident quis illum nmklk xsakl Lorem,
                ipsum dolor.!
              </p>
            </div>
            <div className="grid grid-cols-4 col-span-3 mt-[3rem]">
              <div className="w-[3rem] h-[3rem]">
                <FaLinkedin size={30} />
              </div>
              <div className="w-[3rem] h-[3rem]">
                <FaFacebook size={30} />
              </div>
              <div className="w-[3rem] h-[3rem]">
                <FaTwitter size={30} />
              </div>
              <div className="w-[3rem] h-[3rem]">
                <FaGithub size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
