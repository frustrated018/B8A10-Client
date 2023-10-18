import Banner from "../../Components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        {/* Empty div for the wave */}
        <div
          style={{
            aspectRatio: "960/200",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: "url(src/assets/wave1.svg)",
          }}
        ></div>
        <div className="h-[100vh] w-full bg-[#F5F5F5]">
          <div className="text-center text-4xl text-yellow-500 pt-10">
            This is the Card section
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
