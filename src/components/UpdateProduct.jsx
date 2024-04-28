import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const photoUrl = form.photoUrl.value;
        const itemName = form.itemName.value;
        const subCategory = form.subCategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing = form.processing.value;
        const stockStatus = form.stockStatus.value;
        const updateProductInfo = { photoUrl, itemName, subCategory, description, price, rating, customization, processing, stockStatus }

        fetch(`http://localhost:5000/update/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProductInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }
    return (
        <div className="bg-base-200">
            <div className="container max-w-4xl mx-auto text-center py-6 ">
                <form
                    onSubmit={handleUpdate}
                    className="w-full bg-base-100 p-10 rounded-xl">
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 border-b pb-3">Update Your Product</h2>
                    </div>
                    {/* Form row 1 */}
                    <div className="md:flex gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Image</span>
                            </div>
                            <input type="text" name="photoUrl" defaultValue={product.photoUrl} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Item Name</span>
                            </div>
                            <input type="text" name="itemName" defaultValue={product.itemName} placeholder="Item Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Form row 2 */}
                    <div className="md:flex gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Subcategory Name</span>
                            </div>
                            <input type="text" name="subCategory" defaultValue={product.subCategory} placeholder="Subcategory Name" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Short Description</span>
                            </div>
                            <input type="text" name="description" defaultValue={product.description} placeholder="Short Descriptione" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Form row 3 */}
                    <div className="md:flex gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Price</span>
                            </div>
                            <input type="text" name="price" defaultValue={product.price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Rating</span>
                            </div>
                            <input type="text" name="rating" defaultValue={product.rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Customization</span>
                            </div>
                            <div  className="flex items-center gap-4 border py-3 rounded-md">
                                <span className="ml-4">Yes</span>
                                <input
                                    type="radio"
                                    name="customization"
                                    value='Yes'
                                    className="radio"
                                />
                                <span className="ml-2">No</span>
                                <input
                                    type="radio"
                                    name="customization"
                                    value='No'
                                    className="radio"
                                />
                            </div>
                        </label>
                    </div>
                    {/* Form row 4 */}
                    <div className="md:flex gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Processing Time</span>
                            </div>
                            <input type="text" name="processing" defaultValue={product.processing} placeholder="Processing Time" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Stock Status</span>
                            </div>
                            <div className="flex items-center gap-4 border py-3 rounded-md">
                                <span className="ml-4">In Stock</span>
                                <input type="radio" name="stockStatus" defaultValue={product.stockStatus} value='In Stock' className="radio" />
                                <span className="ml-2">Made to order</span>
                                <input type="radio" name="stockStatus" defaultValue={product.stockStatus} value='Made to order' className="radio" />
                            </div>
                        </label>
                    </div>
                    <input type="submit" className="my-4 btn btn-block bg-[#8f5e44] text-white hover:bg-[#9f5229]" value="Update Product" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;