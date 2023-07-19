const Navbar = () => {
  return (
    <div className="justify-start items-start flex gap-[12rem] font-Lilita  w-screen bg-gray-100">
      <div className="text-5xl ml-[2rem] mt-[1rem]">
        Connecti<span className="text-yellow-500">fy</span>
      </div>
      <div className="mt-[1.5rem]">
        <ul className="  flex justify-center items-center gap-[4rem] text-2xl">
          <li className="hover:bg-yellow-500 hover:rounded-t-[5rem] rounded-br-[5rem] w-[7rem] h-[3rem] text-center p-[0.5rem] hover:transition hover:duration-700 ease-in-out">
            <a href="#">Home</a>
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

      <div className="text-xl p-[1rem]">
        <button className="bg-yellow-500 w-[6rem] h-[3rem] rounded-t-[5rem] rounded-br-[5rem] hover:bg-yellow-400 hover:transition hover:duration-700 ease-in-out">
          Login &rarr;
        </button>
      </div>
    </div>
  );
};

export default Navbar;
