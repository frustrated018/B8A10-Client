const AddProduct = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: "url(src/assets/addProduct.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // height: "100vh",
        position: "relative",
      }}
    >
      <div>
        <div className="pt-12 max-w-[1300px] mx-auto">
          <div>
            <div className="text-[#f5f5f5] text-[45px] font-normal text-center">
              Add New Product
            </div>
            <div className="text-center text-[#f5f5f5] text-opacity-70 text-lg font-normal leading-[30px] w-3/4 mx-auto">
              If you want to add a new product to the database then you must
              fill out every part of the form carefully
            </div>
          </div>
          {/* Form */}
          <form className="mt-10">
            {/* Form Name & Brand Name row */}
            <div className="md:flex md:flex-row mb-8">
              <div className="form-control md:w-1/2 mx-4 mb-4 md:mb-0">
                <div className="text-stone-900 text-opacity-80 text-xl font-semibold leading-[30px]">
                  Name
                </div>
                <div>
                  <input
                    type="text"
                    required
                    name="productName"
                    placeholder="Name of the product"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="form-control md:w-1/2 mx-4">
                <div className="text-stone-900 text-opacity-80 text-xl font-semibold leading-[30px]">
                  Brand Name
                </div>
                <div>
                  <input
                    type="text"
                    required
                    name="brandName"
                    placeholder="Name of the brand"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
            </div>
            {/* Form Type & Price row */}
            <div className="md:flex md:flex-row mb-8">
              <div className="form-control md:w-1/2 mx-4 mb-4 md:mb-0">
                <div className="text-stone-900 text-opacity-80 text-xl font-semibold leading-[30px]">
                  Type
                </div>
                <div>
                  <input
                    type="text"
                    required
                    name="type"
                    placeholder="Type of product"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="form-control md:w-1/2 mx-4">
                <div className="text-stone-900 text-opacity-80 text-xl font-semibold leading-[30px]">
                  Price
                </div>
                <div>
                  <input
                    type="text"
                    required
                    name="price"
                    placeholder="Price"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
            </div>
            {/* Form Rating & Image URL row */}
            <div className="md:flex md:flex-row mb-8">
              <div className="form-control md:w-1/2 mx-4 mb-4 md:mb-0">
                <div className="text-stone-900 text-opacity-80 text-xl font-semibold leading-[30px]">
                  Rating
                </div>
                <div>
                  <input
                    type="text"
                    required
                    name="rating"
                    placeholder="Current market rating"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="form-control md:w-1/2 mx-4">
                <div className="text-stone-900 text-opacity-80 text-xl font-semibold leading-[30px]">
                  Image URL
                </div>
                <div>
                  <input
                    type="text"
                    required
                    name="photo"
                    placeholder="Product photo"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="form-control mx-4 mb-8">
              <div className="text-stone-900 text-opacity-80 text-xl font-semibold leading-[30px]">
                Description
              </div>
              <div>
                <input
                  type="text"
                  required
                  name="description"
                  placeholder="Write a short description about the product"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* Button */}
            <div className="w-1/2 ml-24 md:ml-44 lg:ml-80">
            <input
              type="submit"
              value="Add product"
              className="px-4 py-2 rounded-lg font-bold text-white bg-[rgb(0,168,169)] hover:bg-[rgb(113,221,253)] hover:text-[#333333] w-full mb-10 "
            />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
