import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";


const ArtAndCraftCategoriesSection = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://art-craft-store-server.vercel.app/artAndCraftCategoriesSection')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (

        <div className="max-w-6xl mx-auto my-20">
            <div>
                <Fade direction="right">
                    <h2 className="text-4xl font-bold text-center my-8">Art and Craft</h2>
                </Fade>
                <Fade direction="left">
                    <p className="text-center">Artisanal Elegance: Hand-Painted Ceramic Vase, Elevating Every Corner of Your Home.</p>
                </Fade>
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
                                {/* <Link to={`/subCategory/${product._id}`}> */}
                                <button className="btn my-3 btn-sm bg-green-600 hover:bg-green-400 text-white">View Details</button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ArtAndCraftCategoriesSection;