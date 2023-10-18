import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Banner = () => {
  return (
    <div className="bg-[#007B7D] text-white relative flex items-center">
      <div
        className="max-w-screen-xl mx-auto px-6 w-full"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <section className="mt-10">
          <div
            className="relative flex items-center h-full rounded-lg"
            style={{
              background: `url(https://i.ibb.co/pbwM737/banner3.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-400 opacity-25 rounded-lg"></div>
            <div className="py-10 text-left w-full lg:w-[80%] lg:h-[30%]">
              <div className="w-3/4 max-w-2xl mx-auto text-gray-900 relative" data-aos="fade-left"
                data-aos-delay="200">
                <h1 className="text-4xl font-extrabold mb-4">
                  Discover the Latest Trends
                </h1>
                <p className="text-lg">
                  Explore our collection of the trendiest fashion and apparel,
                  carefully curated just for you.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <div
            className="relative flex items-center h-full rounded-lg"
            style={{
              background: `url(https://i.ibb.co/drHkKWd/banner1.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-400 opacity-25  rounded-lg"></div>
            <div className="py-10 text-left w-full lg:w-[80%] lg:h-[30%]">
              <div
                className="w-3/4 max-w-2xl mx-auto text-gray-900 relative"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <h1 className="text-4xl font-extrabold mb-4">
                  Elevate Your Style
                </h1>
                <p className="text-lg">
                  Upgrade your wardrobe with our exclusive selection of elegant
                  clothing and accessories.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <div
            className="relative flex items-center h-full rounded-lg"
            style={{
              background: `url(https://i.ibb.co/cbBNqjP/banner4.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-400 opacity-25  rounded-lg"></div>
            <div className="py-10 text-left w-full lg:w-[80%] lg.h-[30%]">
              <div className="w-3/4 max-w-2xl mx-auto text-gray-900 relative" data-aos="fade-left"
                data-aos-delay="200">
                <h1 className="text-4xl font-extrabold mb-4">
                  Unleash Your Unique Style
                </h1>
                <p className="text-lg">
                  Embrace your individuality with our diverse range of fashion
                  items, designed to express your personality.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
