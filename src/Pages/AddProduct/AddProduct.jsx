import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const hanldeAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const brandName = selectedBrand;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const longerDescription = form.longerDescription.value;

    const newProduct = {
      productName,
      brandName,
      type,
      price,
      rating,
      photo,
      description,
      longerDescription,
    };

    // Sending data to the server
    fetch(
      "https://clothing-cove-server-jxbnyope8-niloys-projects-59c08af4.vercel.app/products",
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
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Product Added",
            text: "The product has been added to the database successfully.",
          });
        }
      });
  };

  return (
    <div
      className=""
      style={{
        backgroundImage: "url(https://i.ibb.co/TWzwpNP/add-Product.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
          <form onSubmit={hanldeAddProduct} className="mt-10">
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
                  <select
                    name="brandName"
                    value={selectedBrand}
                    onChange={handleBrandChange}
                    className="input input-bordered w-full"
                  >
                    <option value="">Select a brand</option>
                    <option value="Zara">Zara</option>
                    <option value="Adidas">Adidas</option>
                    <option value="H&M">H&M</option>
                    <option value="Supreme">Supreme</option>
                    <option value="Nike">Nike</option>
                    <option value="Uniqlo">Uniqlo</option>
                  </select>
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
            {/* Longer Description */}
            <div className="form-control mx-4 mb-8">
              <div className="text-stone-900 text-opacity-80 text-xl font-semibold leading-[30px]">
                Longer Description
              </div>
              <div>
                <input
                  type="text"
                  required
                  name="longerDescription"
                  placeholder="Write a longer description about the product"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* Button */}
            <div className="w-1/2 ml-24 md:ml-44 lg:ml-80">
              <input
                type="submit"
                value="Add Product"
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
