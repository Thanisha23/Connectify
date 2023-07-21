import image from "../images/bg-2.png";
import feat1 from "../images/feat-1.jpg";
import feat2 from "../images/feat-2.jpg";
import feat3 from "../images/feat-3.jpg";
const Main = () => {
  return (
    <div className=" w-screen h-[75rem] bg-[url('../../public/assets/cccircular-1.jpg')] bg-cover bg-start relative">
      <div className="grid grid-cols-2  gap-[0.5rem] ">
        <section className="ml-[5rem] mt-[4rem]">
          <p className="text-6xl font-Lilita mt-[10rem]"> Connecting People,</p>
          <p className="text-6xl font-Lilita mt-[1rem]">
            Empowering Communities
          </p>
          <button className="bg-yellow-400 w-[12rem] h-[3rem] rounded-t-[5rem] rounded-br-[5rem] mt-[2rem] text-lg font-bold hover:bg-yellow-500 hover:transition hover:duration-700 ease-in-out">
            Let{"'"}s get started!!
          </button>
        </section>
        <section className="mt-[12rem] ml-[5rem]">
          <img src={image} alt="hello" />
        </section>
      </div>
      <div>
        <section className="mx-auto bg-transparent w-[90rem] mt-[5rem] shadow-2xl grid  grid-cols-2 p-[2rem] shadow-black rounded-[7rem] absolute top-[36rem] left-0 z-30 right-0">
          <div className="ml-[2rem] w-[43rem] ">
            <h1 className="text-black font-Lilita text-xl mb-[4rem] mt-[2rem] ">
              What We Do
            </h1>
            <p className="text-5xl font-Lilita mb-[0.5rem] ">
              Your All-in-One Social Hub:
            </p>
            <p className="text-5xl font-Lilita mb-[0.5rem]">
              Stay Connected, Explore Trends,
            </p>
            <p className="text-5xl font-Lilita mb-[0.5rem]">
              Share Your Voice, and Connect
            </p>
            <p className="text-5xl font-Lilita mb-[0.5rem]">with Friends!</p>
          </div>
          <div className="grid grid-cols-2 ml-[3rem] relative p-[2rem]">
            <card className="w-[14rem] h-[12rem] bg-yellow-300 shadow-2xl rounded-2xl ">
              <img
                className="rounded-full w-[7rem] h-[7rem]  shadow-2xl ml-[10rem] absolute top-0 bottom-5 left-2"
                src={feat1}
                alt="feat1"
              />

              <h1 className="mr-[8rem] pt-[2rem] pl-[1rem] font-Lilita text-3xl">
                Build Bonds
              </h1>
              <article>
                <p className="w-[13rem] pl-[1rem] pt-[0.5rem] font-Lilita text-xl">
                  Connect with
                  <br />
                  Friends & Family
                </p>
              </article>
            </card>
            <card className="w-[14rem] h-[12rem] bg-yellow-300 shadow-2xl rounded-2xl">
              <img
                className="rounded-full w-[7rem] h-[7rem]  shadow-2xl ml-[10rem] absolute top-0 bottom-5 left-[19rem]"
                src={feat2}
                alt="feat1"
              />

              <h1 className="mr-[8rem] pt-[2rem] pl-[1rem] font-Lilita text-3xl">
                Viralize
              </h1>
              <article>
                <p className="w-[13rem] pl-[1rem] pt-[0.5rem] font-Lilita text-xl">
                  Unleash Trends:
                  <br />
                  Go Viral with Our Trending Topics
                </p>
              </article>
            </card>
            <card className="w-[14rem] h-[12rem] bg-yellow-300 shadow-2xl rounded-2xl mt-[2rem]">
              <img
                className="rounded-full w-[7rem] h-[7rem]  shadow-2xl ml-[10rem] absolute top-[14.5rem] left-2"
                src={feat3}
                alt="feat1"
              />
              <h1 className="mr-[8rem] pt-[2rem] pl-[1rem] font-Lilita text-3xl">
                Expresso
              </h1>
              <article>
                <p className="w-[13rem] pl-[1rem] pt-[0.5rem] font-Lilita text-xl">
                  Expresso Your
                  <br />
                  Thoughts through Posts
                </p>
              </article>
            </card>
            <card className="w-[14rem] h-[12rem] bg-yellow-300 shadow-2xl  rounded-2xl mt-[2rem]">
              <img
                className="rounded-full w-[7rem] h-[7rem]  shadow-2xl  ml-[10rem] absolute top-[14.5rem] right-20"
                src={feat3}
                alt="feat1"
              />
              <h1 className="mr-[8rem] pt-[2rem] pl-[1rem] font-Lilita text-3xl">
                Beyond Feeds
              </h1>
              <article>
                <p className="w-[13rem] pl-[1rem] pt-[0.5rem] font-Lilita text-xl">
                  Discover News and
                  <br />
                  Updates
                </p>
              </article>
            </card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
