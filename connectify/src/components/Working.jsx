import ball from "../images/ball.png";
import Footer from "../components/Footer";
const Working = () => {
  return (
    <div className="w-screen h-[70rem] bg-bg-3 bg-cover bg-start relative shadow-2xl">
      <div className="mx-auto w-[80rem] h-[18rem] absolute top-[15rem] left-0 right-0 bottom-0 bg-depth bg-start bg-cover bg-white rounded-[4rem] mt-[2rem]">
        <card className="bg-[#ffcc00] w-[15rem] h-[16rem] absolute bottom-[11rem] left-[3rem] rounded-[3rem] z-20 shadow-2xl">
          <center className="p-[1rem]">
            <h1 className="font-Lilita text-2xl">Join & Connect</h1>
            <p className="font-Lilita mt-[1rem] text-lg w-[12rem]">
              Sign up in seconds and dive into a vibrant community of friends,
              new and old. Connect with people who share your interests.
            </p>
          </center>

          <card className="bg-[#ffcc00] w-[15rem] h-[16rem] absolute bottom-0 left-[19rem] rounded-[3rem] z-20 shadow-2xl">
            <center className="p-[1rem]">
              <h1 className="font-Lilita text-2xl">Share & Inspire</h1>
              <p className="font-Lilita mt-[1rem] text-lg w-[12rem]">
                Share your life{"'"}s moments through photos, videos, and
                stories. Inspire others and be inspired by their experiences.
              </p>
            </center>
          </card>
          <card className="bg-[#ffcc00] w-[15rem] h-[16rem] absolute bottom-0 left-[39rem] rounded-[3rem] z-20 shadow-2xl">
            <center className="p-[1rem]">
              <h1 className="font-Lilita text-2xl">Discover & Explore</h1>
              <p className="font-Lilita mt-[1rem] text-lg w-[12rem]">
                Discover trending topics, explore diverse communities, and stay
                informed about the latest news and updates.
              </p>
            </center>
          </card>
          <card className="bg-[#ffcc00] w-[15rem] h-[16rem] absolute bottom-0 left-[59rem] rounded-[3rem] z-20 shadow-2xl">
            <center className="p-[1rem]">
              <h1 className="font-Lilita text-2xl">Engage & Interact</h1>
              <p className="font-Lilita mt-[1rem] text-lg w-[12rem]">
                Like, comment, and chat with friends. Engage in lively
                discussions and share your thoughts openly.
              </p>
            </center>
          </card>
        </card>

        <div className="grid grid-cols-2">
          <h1 className="font-Lilita text-[11rem] absolute left-[4rem] top-[9rem] ">
            How it works?
          </h1>

          <img
            className="top-[9rem] left-[66rem] absolute  w-[20rem] animate-bounce"
            src={ball}
            alt="ball"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
{
  // bg-[#ffcc00]
}
export default Working;
