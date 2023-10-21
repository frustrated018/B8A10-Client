const SliderCard = () => {
  return (
    <div>
      <section className="bg-[#f5f5f5] rounded-lg max-w-7xl mx-auto my-10">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Understand User Flow.
              <strong className="font-extrabold text-[#007b7d] sm:block">
                Increase Conversion.
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
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
