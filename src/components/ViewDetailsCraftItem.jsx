import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";


const ViewDetailsCraftItem = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { photoUrl, itemName, subCategory, description, price, rating, customization, processing, stockStatus } = product

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [id])
    return (
        <div className="max-w-6xl mx-auto">

            <p className="w-16  text-amber-700 hover:text-amber-500 text-3xl p-3"> <Link to={'/'}><FaArrowAltCircleLeft></FaArrowAltCircleLeft></Link></p>
            <h2 className="text-4xl text-center lg:text-start lg:ml-6 font-bold my-10">View Detail: {itemName}</h2>
            <div className="card lg:card-side border bg-base-100 shadow-xl">
                <figure><img className="lg:p-8 lg:rounded-[40px] pt-6" src={photoUrl} alt="Album" /></figure>
                <div className="flex flex-col gap-8 px-5 p-7 lg:py-28">
                    <h2 className="card-title text-3xl">{itemName}</h2>
                    <p><span className="font-bold">Description:</span> {description}</p>
                    <p><span className="font-bold">Sub_Category:</span> {subCategory}</p>

                    <p><span className="font-bold">Rating:</span> ${price}</p>
                    <p className="flex items-center"><span className="font-bold">Price:</span>
                        <FaStar className="ml-1 text-amber-400 hover:text-amber-600" ></FaStar>
                        <FaStar className="ml-1 text-amber-400 hover:text-amber-600" ></FaStar>
                        <FaStar className="ml-1 text-amber-400 hover:text-amber-600" ></FaStar>
                        <FaStar className="ml-1 text-amber-400 hover:text-amber-600" ></FaStar>
                        <FaStar className="mx-1 text-gray-500" ></FaStar>
                        {rating}</p>
                    <p><span className="font-bold">Customization:</span> {customization}</p>
                    <p><span className="font-bold">Processing:</span> {processing}</p>
                    <p><span className="font-bold">Stock:</span> {stockStatus}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsCraftItem;