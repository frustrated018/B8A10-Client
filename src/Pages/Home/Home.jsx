import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Footer from "../../Components/Footer/Footer";
import Faq from "../../Components/Faq/Faq";
import Testimonial from "../../Components/Testimonial/Testimonial";
import OurSpecialty from "../../Components/OurSpecialty/OurSpecialty";

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
            backgroundImage: "url(https://i.ibb.co/KhrH4WX/wave1.png)", // change this to svg after assignment and find out how to deploy svg files
          }}
        ></div>
        {/* Brand Based products */}
        <div className="w-full bg-[#F5F5F5]">
          <Brands brands={brands}></Brands>
        </div>
        {/* Our Specialty */}
        <OurSpecialty />
        {/* Testimonial section */}
        <div className=" bg-[#f5f5f5] pt-10 px-10">
          <Testimonial></Testimonial>
        </div>
        {/* FAQ section */}
        <div className=" bg-[#f5f5f5] pt-10 px-10">
          <Faq></Faq>
        </div>

        {/* empty Wave div  */}
        <div
          style={{
            aspectRatio: "900/200",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: "url(https://i.ibb.co/vD8vfQ6/wave2.png)", // change this to svg after assignment and find out how to deploy svg files
          }}
        ></div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
