import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CraftItemsSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://art-craft-store-server.vercel.app/craftItemSection`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);

    return (
        <div className="max-w-6xl mx-auto my-20">
            <div>
                <Fade direction="left">
                    <h2 className="text-4xl font-bold text-center my-8">Craft Item</h2>
                </Fade>
                <Fade direction="right">
                    <p className="text-center my-5">Artisanal Elegance: Hand-Painted Ceramic Vase, Elevating Every Corner of Your Home.</p>
                </Fade>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 p-2">
                {products.slice(0, 6).map(product => (
                    <div
                        key={product._id}
                        className="card  bg-base-100 shadow-xl border">
                        <figure><img src={product.photoUrl} className="max-h-72" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {product.itemName}
                                <div className="btn btn-sm rounded-3xl btn-secondary">{product.stockStatus}</div>
                            </h2>
                            <p>{product.description}</p>
                            <div className="card-actions items-center justify-end">
                                <p className="flex items-center text-xl">
                                    <FaStar className="ml-1 text-amber-400 hover:text-amber-600" ></FaStar>
                                    <FaStar className="ml-1 text-amber-400 hover:text-amber-600" ></FaStar>
                                    <FaStar className="ml-1 text-amber-400 hover:text-amber-600" ></FaStar>
                                    <FaStar className="ml-1 text-amber-400 hover:text-amber-600" ></FaStar>
                                    <FaStar className="mx-1 text-gray-500" ></FaStar>
                                    {product.rating}
                                </p>
                                <p className="text-2xl font-semibold">${product.price}</p>
                                <p><span className="font-semibold">Customization:</span> <span>{product.customization}</span></p>
                                <Fade direction="left">
                                    <div className="card-actions my-3">
                                        <Link to={`/viewDetailsCraftItem/${product._id}`}><button className="btn btn-sm bg-green-600 hover:bg-green-400 text-white">View Details</button></Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CraftItemsSection;
