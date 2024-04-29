import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const CraftItemsSection = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/craftItemSection`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, [user]);

    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <h2 className="text-4xl font-bold text-center my-8">Craft Item</h2>
                <p className="text-center">Artisanal Elegance: Hand-Painted Ceramic Vase, Elevating Every Corner of Your Home.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {products.slice(0, 6).map(product => (
                    <div key={product._id} className="card bg-base-100 shadow-xl">
                        <figure className="px-8 pt-8">
                            <img src={product.photoUrl} alt={`image to ${product.itemName}`} className="rounded-xl w-[300px] h-[300px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.itemName}</h2>
                            <p>{product.description}</p>
                            <p className="flex items-center text-xl">
                                <FaStar className="ml-1 text-amber-400 hover:text-amber-600" />
                                <FaStar className="ml-1 text-amber-400 hover:text-amber-600" />
                                <FaStar className="ml-1 text-amber-400 hover:text-amber-600" />
                                <FaStar className="ml-1 text-amber-400 hover:text-amber-600" />
                                <FaStar className="mx-1 text-gray-500" />
                                {product.rating}
                            </p>
                            <p className="text-2xl font-semibold">${product.price}</p>
                            <p><span className="font-semibold">Customization:</span> {product.customization}</p>
                            <p><span className="font-semibold">Stock Status:</span> {product.stockStatus}</p>
                            <div className="card-actions">
                                <Link to={`/viewDetailsCraftItem/${product._id}`}>
                                    <button className="btn my-3 btn-sm bg-green-600 hover:bg-green-400 text-white">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CraftItemsSection;
