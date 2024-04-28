import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AddCraft = () => {
    const { user } = useContext(AuthContext);
    const handleAddCraft = e => {
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
        const userName = form.userName.value;
        const email = form.email.value;
        const product = { photoUrl, itemName, subCategory, description, price, rating, customization, processing, stockStatus , userName, email}
        // console.log(product);

        fetch('http://localhost:5000/addCraft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: 'Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset()
                }
            })
    }
    return (
        <div className="bg-base-200">
            <div className="container max-w-4xl mx-auto text-center py-6 ">
                <form
                    onSubmit={handleAddCraft}
                    className="w-full bg-base-100 p-10 rounded-xl">
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 border-b pb-3">Add Your Product</h2>
                    </div>
                    {/* Form row 1 */}
                    <div className="md:flex gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Image</span>
                            </div>
                            <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Item Name</span>
                            </div>
                            <input type="text" name="itemName" placeholder="Item Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Form row 2 */}
                    <div className="md:flex gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Subcategory Name</span>
                            </div>
                            <input type="text" name="subCategory" placeholder="Subcategory Name" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Short Description</span>
                            </div>
                            <input type="text" name="description" placeholder="Short Descriptione" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Form row 3 */}
                    <div className="md:flex gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Price</span>
                            </div>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Rating</span>
                            </div>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Customization</span>
                            </div>
                            <div className="flex items-center gap-4 border py-3 rounded-md">
                                <span className="ml-4">Yes</span>
                                <input type="radio" name="customization" value='Yes' className="radio" />
                                <span className="ml-2">No</span>
                                <input type="radio" name="customization" value='No' className="radio" />
                            </div>
                        </label>
                    </div>
                    {/* Form row 4 */}
                    <div className="md:flex gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Processing Time</span>
                            </div>
                            <input type="text" name="processing" placeholder="Processing Time" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Stock Status</span>
                            </div>
                            <div className="flex items-center gap-4 border py-3 rounded-md">
                                <span className="ml-4">In Stock</span>
                                <input type="radio" name="stockStatus" value='In Stock' className="radio" />
                                <span className="ml-2">Made to order</span>
                                <input type="radio" name="stockStatus" value='Made to order' className="radio" />
                            </div>
                        </label>
                    </div>
                    {/* Form row 5 */}
                    <div className="md:flex gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">User Name</span>
                            </div>
                            <input type="text" name="userName" placeholder="User Name" disabled defaultValue={user.displayName} className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">User Email</span>
                            </div>
                            <input type="email" name="email" placeholder="User Email" disabled defaultValue={user.email} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" className="my-4 btn btn-block bg-[#8f5e44] text-white hover:bg-[#9f5229]" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddCraft;