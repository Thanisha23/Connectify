import image from "../images/bg-2.png";

const Main = () => {
  return (
    <div className="grid grid-cols-2 h-screen w-screen gap-[1rem] bg-[url('../../public/assets/cccircular-1.jpg')] bg-cover bg-start">
      <section className="ml-[5rem] mt-[4rem]">
        <p className="text-6xl font-Lilita mt-[10rem]"> Connecting People,</p>
        <p className="text-6xl font-Lilita mt-[1rem]">Empowering Communities</p>
        <button className="bg-yellow-400 w-[12rem] h-[3rem] rounded-t-[5rem] rounded-br-[5rem] mt-[2rem] text-lg font-bold hover:bg-yellow-500 hover:transition hover:duration-700 ease-in-out">
          Let's get started!!
        </button>
      </section>
      <section className="mt-[7rem] ml-[5rem]">
        <img src={image} alt="hello" />
      </section>
    </div>
  );
};

export default Main;
