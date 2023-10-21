import { useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;

  const {
    longerDescription,
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
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
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
