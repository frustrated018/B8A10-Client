import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Banner = () => {
  return (
    <div>
      <section className="relative bg-[url(https://i.ibb.co/pbwM737/banner3.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-[#007b7d] opacity-25 rounded-lg"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Discover the Latest
              <strong className="block font-extrabold text-[#00a8a9]">
                Trends
              </strong>
            </h1>

            <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
              Explore our collection of the trendiest fashion and apparel,
              carefully curated just for you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <button className="block w-full rounded bg-[#007b7d] px-12 py-3 text-base font-medium text-white shadow hover:bg-[#00a8a9] focus:outline-none focus:ring active:bg-[#00a8a9] sm:w-auto">
                Get Started
              </button>

              <button className="block w-full rounded bg-[#f5f5f5] px-12 py-3 text-base font-medium text-[#007b7d] shadow  focus:outline-none focus:ring sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
