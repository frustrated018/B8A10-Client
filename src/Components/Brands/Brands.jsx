import PropTypes from "prop-types";
import BrandCard from "./BrandCard";

const Brands = ({ brands }) => {
  return (
    <div>
      <div className="text-red-500 text-4xl text-center pb-10">
        Find Products Based on Brands
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-10 md:mx-10 mx-5">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
