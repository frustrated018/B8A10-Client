import { GiClothes } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { BiSolidDiscount } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa6";
import { GiRunningShoe } from "react-icons/gi";
import { IoWatch } from "react-icons/io5";

const OnlineClothingShop = () => {
  return (
    <>
      <section className="">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto bg-blue-200 mt-10 rounded-lg">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Explore Our Fashion Collection
              </h2>

              <p className="mt-4 text-neutral">
                Discover the latest trends and express your style with our
                diverse range of clothing items. From casual wear to formal
                attire, our online clothing shop has everything you need to
                elevate your wardrobe.
              </p>

              <a
                href="/shop"
                className="mt-8 inline-block rounded bg-[#007b7d] px-12 py-3 text-base font-bold text-white transition hover:bg-[#38b3b5] focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Start Shopping Now
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a className="block rounded-xl border p-4 shadow-sm bg-[#38b3b5]">
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  {/* Clothing Icon */}
                  <GiClothes />
                </span>

                <h2 className="mt-2 font-bold">Casual Wear</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-neutral">
                  Comfortable and stylish everyday clothing.
                </p>
              </a>

              <a
                className="block rounded-xl border p-4 shadow-sm bg-[#38b3b5]"
                href="/shop/formal"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  {/* Clothing Icon */}
                  <FaUserTie />
                </span>

                <h2 className="mt-2 font-bold">Formal Attire</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-neutral">
                  Elegant outfits for special occasions.
                </p>
              </a>

              <a
                className="block rounded-xl border p-4 shadow-sm bg-[#38b3b5]"
                href="/shop/activewear"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  {/* Clothing Icon */}
                  <GiRunningShoe />
                </span>

                <h2 className="mt-2 font-bold">Activewear</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-neutral">
                  Stylish and functional sportswear.
                </p>
              </a>

              <a
                className="block rounded-xl border p-4 shadow-sm bg-[#38b3b5]"
                href="/shop/accessories"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  {/* Accessory Icon */}
                  <IoWatch />
                </span>

                <h2 className="mt-2 font-bold">Accessories</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-neutral">
                  Complete your look with fashionable accessories.
                </p>
              </a>

              <a
                className="block rounded-xl border p-4 shadow-sm bg-[#38b3b5]"
                href="/shop/sale"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  {/* Sale Icon */}
                  <BiSolidDiscount />
                </span>

                <h2 className="mt-2 font-bold">Sale Items</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-neutral">
                  Grab great deals on our discounted items.
                </p>
              </a>

              <a
                className="block rounded-xl border p-4 shadow-sm bg-[#38b3b5]"
                href="/contact"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  {/* Shipping Icon */}
                  <FaShippingFast />
                </span>

                <h2 className="mt-2 font-bold">Fast Delivery</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-neutral">
                  Get the fastest devivery with us.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineClothingShop;
