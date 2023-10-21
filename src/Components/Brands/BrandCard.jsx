import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { brandName, img, description } = brand;
  const navigate = useNavigate();

  const handleBrands = (brandName) =>{
    fetch(`https://clothing-cove-server-agauz9mr8-niloys-projects-59c08af4.vercel.app/products/${brandName}`)
    .then(res => res.json())
    .then(data => {
        navigate(`/products/${brandName}`, { state: { products: data } })
        console.log(data);
    })
  }


  return (
    <div onClick={()=> handleBrands(brandName)}>
      <div className="group relative block bg-black">
        <img
          alt="Developer"
          src={img}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-xl font-bold text-white sm:text-2xl">
            {brandName}
          </p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandCard;
