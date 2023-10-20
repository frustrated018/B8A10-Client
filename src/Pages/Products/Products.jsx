import { useLocation } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";

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
      <div className="text-center text-4xl text-red-500 pt-10">
        all the product cards will be here
      </div>
      <div className=" max-w-[1320px] lg:mx-20 md:mx-10 mx-5 grid md:grid-cols-2 grid-cols-1 gap-3 py-10">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
