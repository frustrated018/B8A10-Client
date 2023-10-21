import { useLoaderData } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const ProductDetails = () => {

  const product = useLoaderData();
  

  const {
    longerDescription,
    type,
    productName,
    photo,
    price,
    rating,
    description,
    brandName,
  } = product;

  const { user } = useContext(AuthContext);
  const email = user?.email;
  //  new product to add to the cart collection
  const newProduct = {
    email,
    brandName,
    productName,
    description,
    photo,
    price,
    rating,
  };

  //   Adding to cart
  const handleAddToCart = () => {
    fetch(
      "https://clothing-cove-server-jxbnyope8-niloys-projects-59c08af4.vercel.app/cart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire(
          "Success",
          "Successfully added the item to the cart",
          "success"
        );
      });
  };

  return (
    <div className="flex justify-center items-center lg:pt-20 md:pt-10 py-5"
    style={{
      backgroundImage: "url(https://i.ibb.co/gMW1ZLX/Contour-Line.png)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "relative",
    }}
    >
      <article className="overflow-hidden rounded-lg border border-gray-100 bg-[#f5f5f5] shadow-sm w-[80%] md:w-1/2">
        <img alt="Office" src={photo} className="h-56 w-full object-cover" />

        <div className="p-4 sm:p-6">
          {/* Longer description */}
          <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Brand</dt>
                <dd className="text-gray-700 sm:col-span-2">{brandName}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Product Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{productName}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Type</dt>
                <dd className="text-gray-700 sm:col-span-2">{type}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Price</dt>
                <dd className="text-gray-700 sm:col-span-2">${price}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Description</dt>
                <dd className="text-gray-700 sm:col-span-2">
                 {longerDescription}
                </dd>
              </div>
            </dl>
          </div>

          <button
            onClick={handleAddToCart}
            className="group relative inline-flex items-center overflow-hidden rounded bg-[#007b7d] px-8 py-3 text-white focus:outline-none focus:ring active:bg-[#00a8a9] mt-4"
            href="/download"
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <BsCart4></BsCart4>
            </span>

            <span className="text-sm font-medium transition-all group-hover:me-4">
              Add to Cart
            </span>
          </button>
        </div>
      </article>
    </div>
  );
};

export default ProductDetails;
