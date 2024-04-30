import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ArtAndCraftCategoriesSection = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/artAndCraftCategoriesSection')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data);
            })
    }, [])
    return (

        <div className="max-w-6xl mx-auto my-20">
            <div>
                <h2 className="text-4xl font-bold text-center my-8">Art and Craft</h2>
                <p className="text-center">Artisanal Elegance: Hand-Painted Ceramic Vase, Elevating Every Corner of Your Home.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 my-10 gap-5">
                {products.map(product => (
                    <div key={product._id} className="card bg-base-100 border shadow-xl">
                        <figure className="px-8 pt-8">
                            <img src={product.photoUrl} alt={`image to ${product.itemName}`} className="rounded-xl w-[300px] h-[300px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className="text-3xl">{product.subCategory}</p>
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

export default ArtAndCraftCategoriesSection;