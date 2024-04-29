import { useContext, useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaStar } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyArtAndCraft = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myArtAndCraft/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [user])
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = products.filter(product => product._id !== id)
                            setProducts(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <h2 className="text-4xl font-bold text-center my-8">My Art And Craft List</h2>
            </div>
            <p className="w-16  text-amber-700 hover:text-amber-500 text-3xl p-3"> <Link to={'/'}><FaArrowAltCircleLeft></FaArrowAltCircleLeft></Link></p>
            <div className="grid grid-cols-3 gap-5">
                {
                    products?.map(product => (
                        <div
                            key={product._id}
                            className="card  bg-base-100 shadow-xl">
                            <figure className="px-8 pt-8">
                                <img
                                    src={product.photoUrl} alt={`image to ${product.itemName}`} className="rounded-xl w-[300px] h-[300px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.itemName}</h2>
                                <p>{product.description}</p>
                                <p className="flex items-center text-xl">
                                    <FaStar className="ml-1 text-amber-400 hover:text-amber-600" ></FaStar>
                                    <FaStar className="ml-1 text-amber-400 hover:text-amber-600" ></FaStar>
                                    <FaStar className="ml-1 text-amber-400 hover:text-amber-600" ></FaStar>
                                    <FaStar className="ml-1 text-amber-400 hover:text-amber-600" ></FaStar>
                                    <FaStar className="mx-1 text-gray-500" ></FaStar>
                                    {product.rating}
                                </p>
                                <p>${product.price}</p>
                                <p><span className="font-semibold">Customization:</span> <span>{product.customization}</span></p>
                                <p><span className="font-semibold">Stock Status:</span> <span>{product.stockStatus}</span></p>
                                <div className="card-actions">
                                    <Link to={`/update/${product._id}`}><button className="btn btn-sm bg-green-600 hover:bg-green-400 text-white"><GrDocumentUpdate></GrDocumentUpdate></button></Link>
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-sm bg-red-600 hover:bg-red-500 text-white"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyArtAndCraft;