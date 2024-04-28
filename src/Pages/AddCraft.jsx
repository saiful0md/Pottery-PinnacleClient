import { useContext } from "react";
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
        const stock = form.stock.value;
        const product = { photoUrl, itemName, subCategory, description, price, rating, customization, processing, stock }
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
                console.log(data);
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
                                <span className="label-text">Image</span>
                            </div>
                            <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Item Name</span>
                            </div>
                            <input type="text" name="itemName" placeholder="Item Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Form row 2 */}
                    <div className="md:flex gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Subcategory Name</span>
                            </div>
                            <input type="text" name="subCategory" placeholder="Subcategory Name" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Short Description</span>
                            </div>
                            <input type="text" name="description" placeholder="Short Descriptione" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Form row 3 */}
                    <div className="md:flex gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Rating</span>
                            </div>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Customization</span>
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
                                <span className="label-text">Processing Time</span>
                            </div>
                            <input type="text" name="processing" placeholder="Processing Time" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Stock Status</span>
                            </div>
                            <input type="text" name="stock" placeholder="Stock Status" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Form row 5 */}
                    <div className="md:flex gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">User Name</span>
                            </div>
                            <input type="text" name="userName" placeholder="User Name" disabled defaultValue={user.displayName} className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">User Email</span>
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