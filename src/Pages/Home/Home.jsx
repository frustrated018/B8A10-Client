import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Footer from "../../Components/Footer/Footer";
import Faq from "../../Components/Faq/Faq";

const Home = () => {
  const brands = useLoaderData();

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
        {/* Brand Based products */}
        <div className="w-full bg-[#F5F5F5]">
          <Brands brands={brands}></Brands>
        </div>
        {/* FAQ section */}
        <div  className=" bg-[#f5f5f5] pt-10 px-10">
          <Faq></Faq>
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
