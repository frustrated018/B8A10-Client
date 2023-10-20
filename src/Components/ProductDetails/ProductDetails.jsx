import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;

  const { longerDescription, productName, photo } = product;

  return (
    <div className="flex justify-center items-center lg:mt-20 md:mt-10 mt-5">
      <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-[80%] md:w-1/2">
        <img alt="Office" src={photo} className="h-56 w-full object-cover" />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900">{productName}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {longerDescription}
          </p>

          <a
            href="#"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Find out more
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5"
            >
              &rarr;
            </span>
          </a>
        </div>
      </article>
    </div>
  );
};

export default ProductDetails;
