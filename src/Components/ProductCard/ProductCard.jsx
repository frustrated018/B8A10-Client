import PropTypes from "prop-types";
import { BiDollar } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, productName, description, photo, price, rating } = product;

  const navigate = useNavigate();

  //       viewing details function
  const handleViewDetails = (_id) => {
    fetch(`https://clothing-cove-server-jxbnyope8-niloys-projects-59c08af4.vercel.app/products/details/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        navigate(`/products/details/${_id}`, { state: { product: data } });
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-[#f5f5f5]">
        <img
          alt={productName}
          src={photo}
          className="h-56 w-full rounded-md object-contain"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Name</dt>

              <dd className="font-medium">{productName}</dd>
            </div>
            <div>
              <dd className="text-sm text-gray-500">{description}</dd>
            </div>
          </dl>

          {/* rating and price */}

          <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="text-[#007b7d] text-xl">
                <AiFillStar></AiFillStar>
              </div>
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Rating</p>

                <p className="font-medium">{rating}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="text-[#007b7d] text-xl">
                <BiDollar></BiDollar>
              </div>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Price</p>

                <p className="font-medium">{price}</p>
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="flex justify-center items-center gap-4 mt-4">
            {/* view details */}
            <button
              onClick={() => handleViewDetails(_id)}
              className="inline-block rounded bg-[#007b7d] px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#00a8a9]"
              href="/download"
            >
              View Details
            </button>
            {/* Add to cart */}
            <Link
              to={`/updateproduct/${_id}`}
              className="group relative inline-flex items-center overflow-hidden rounded bg-[#007b7d] px-8 py-3 text-white focus:outline-none focus:ring active:bg-[#00a8a9]"
              href="/download"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <GrDocumentUpdate></GrDocumentUpdate>
              </span>

              <span className="text-sm font-medium transition-all group-hover:me-4">
                Update Product
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
