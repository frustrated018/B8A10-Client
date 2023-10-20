import { useLoaderData } from "react-router-dom";

const Products = () => {

    const products = useLoaderData();
    console.log(products);


    return (
        <div className="bg-[#F5F5F5]">
            <div className="text-center text-4xl text-red-500 pt-20"> all the product cards will be here</div>
        </div>
    );
};

export default Products;