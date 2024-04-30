import { useContext, useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaStar } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyArtAndCraft = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [filterValue, setFilterValue] = useState('')
    useEffect(() => {
        fetch(`https://art-craft-store-server.vercel.app/myArtAndCraft/${user?.email}`)
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
                fetch(`https://art-craft-store-server.vercel.app/delete/${id}`, {
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
    const handleFilter = (event) => {
        const value = event.target.value;
        setFilterValue(value);
    };
    const filteredProducts = products.filter(product => {
        if (filterValue === "") {
            return true;
        } else {
            return product.customization === filterValue;
        }
    });
    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <h2 className="text-4xl font-bold text-center my-8">My Art And Craft List</h2>
            </div>
            <div className="flex max-w-[850px] items-center justify-between my-10">
                <p className="w-16  text-amber-700 hover:text-amber-500 text-3xl p-3"> <Link to={'/'}><FaArrowAltCircleLeft></FaArrowAltCircleLeft></Link></p>
                <label className="form-control w-full max-w-xs">
                    <select onChange={handleFilter} className="select w-32 text-white btn hover:bg-amber-700 bg-amber-600 select-bordered">
                        <option className="text-white" value="">All</option>
                        <option className="text-white" value="Yes">Yes</option>
                        <option className="text-white" value="No">No</option>
                    </select>
                </label>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    filteredProducts?.map(product => (
                        <div
                            key={product._id}
                            className="card  bg-base-100 shadow-xl p-2">
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

                                    <div className="card-actions my-3">
                                        <Link to={`/update/${product._id}`}><button data-tooltip-id="my-tooltip-1" className="btn btn-sm bg-green-600 hover:bg-green-400 text-white"><GrDocumentUpdate></GrDocumentUpdate></button></Link>

                                        <button data-tooltip-id="my-tooltip-2" onClick={() => handleDelete(product._id)} className="btn btn-sm bg-red-600 hover:bg-red-500 text-white"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ReactTooltip
                id="my-tooltip-1"
                place="bottom"
                content="Update"
            />
            <ReactTooltip
                id="my-tooltip-2"
                place="bottom"
                content="Delete"
            />
        </div>
    );
};

export default MyArtAndCraft;