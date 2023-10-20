import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Products = () => {

    const products = useLoaderData();


    return (
        <div className="bg-[#F5F5F5]">
            <div className="text-center text-4xl text-red-500 pt-20"> all the product cards will be here</div>
            <div className="grid grid-cols-2 gap-3">
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;