const SliderCard = () => {
  return (
    <div>
      <section className="bg-[url(https://i.ibb.co/cbBNqjP/banner4.jpg)] bg-cover bg-no-repeat rounded-lg max-w-7xl mx-auto my-10">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Unleash Your 
              <strong className="font-extrabold text-[#00a8a9] sm:block mt-2">
              Uniqueness
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed text-white">
            Embrace your individuality with our diverse range of fashion items, designed to express your personality.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="block w-full rounded bg-[#007b7d] px-12 py-3 text-lg font-medium text-white shadow hover:bg-[#00A8A9] focus:outline-none focus:ring active:bg-[#389393] sm:w-auto">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SliderCard;
