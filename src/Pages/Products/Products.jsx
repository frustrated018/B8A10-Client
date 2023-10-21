import { useLocation } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Slider from "../../Components/Slider/Slider";

const Products = () => {
  const location = useLocation();
  const { products } = location.state;

  //   console.log(products);

  return (
    <div
      className="bg-[#F5F5F5]"
      style={{
        backgroundImage: "url(https://i.ibb.co/c6cmsZF/stacked-waves-haikei.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Slider></Slider>
      <div className=" max-w-[1320px] lg:mx-20 md:mx-10 mx-5 grid md:grid-cols-2 grid-cols-1 gap-3 py-10">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
