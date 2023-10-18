import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
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

        {/* empty Wave div  */}
        <div
          style={{
            aspectRatio: "900/200",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: "url(src/assets/wave2.svg)",
          }}
        ></div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
