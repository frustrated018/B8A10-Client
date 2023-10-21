import { useContext } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useEffect } from "react";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const { user } = useContext(AuthContext);
  const email = user?.email;

  useEffect(() => {
    fetch(`http://localhost:5000/cart/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
      });
  }, [email]);

  //   deleting function

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Item has been deleted.", "success");
              const remaining = cartProducts.filter((prod) => prod._id !== _id);

              setCartProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/hCKCpnj/Simple-Shiny.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        height: "100vh",
      }}
    >
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-white sm:text-3xl">
                Your Cart
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                {cartProducts.map((cartProduct) => {
                  return (
                    <li
                      className="flex items-center gap-4"
                      key={cartProduct._id}
                    >
                      <img
                        src={cartProduct.photo}
                        alt=""
                        className="h-16 w-16 rounded object-cover"
                      />

                      <div>
                        <h3 className="text-sm text-white">
                          {cartProduct.productName}
                        </h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-white">
                          <div>
                            <dt className="inline">Brand: </dt>
                            <dd className="inline">{cartProduct.brandName}</dd>
                          </div>

                          <div>
                            <dt className="inline">Price: </dt>
                            <dd className="inline">${cartProduct.price}</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        {/* delete button */}
                        <button
                          className="text-white transition hover:text-red-600"
                          onClick={() => handleDelete(cartProduct._id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="flex justify-end">
                  <a
                    href="#"
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-white"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
