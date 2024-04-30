import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllArtAndCraft = () => {
    const [allproducts, setAllproducts] = useState([])
    console.log(allproducts);


    useEffect(() => {
        fetch('http://localhost:5000/allArtAndCraft')
            .then(res => res.json())
            .then(data => {
                setAllproducts(data);
            })
    }, [])
    return (
        <div className=" max-w-6xl mx-auto my-10">
            <div>
                <p className="text-4xl ml-10 my-12"> AllArtAndCraft</p>
            </div>
            <div>
                {/* head */}
                <table className="table">
                    <thead className="table">
                        <tr className="grid grid-cols-4">
                            <th>Item Name</th>
                            <th>Sub-Category</th>
                            <th>Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
                {
                    allproducts.map(allproduct =>
                        <div
                            key={allproduct._id}
                            className="overflow-x-auto"
                        >
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <tbody>
                                        {/* row 1 */}
                                        <tr className="grid grid-cols-4">
                                            <td>{allproduct.itemName}d</td>
                                            <td>{allproduct.subCategory}</td>
                                            <td>{allproduct.stockStatus}</td>
                                            <th>
                                                <Link to={`/viewDetailsCraftItem/${allproduct._id}`}>
                                                    <button className="btn btn-ghost btn-xs">details</button>
                                                </Link>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default AllArtAndCraft;