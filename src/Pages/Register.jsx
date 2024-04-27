import { useContext } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;

        console.log(name, email, photoUrl, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className="">
            <div className=" min-h-screen bg-base-200">
                <div className=" flex-col ">
                    <div className="text-center py-10">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                    </div>
                    <div className="card shrink-0  max-w-3xl mx-auto pb-10 shadow-xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="PhotoUrl" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex w-full relative ">
                                    <input type="password" name="password" placeholder="Password" className="input w-full input-bordered" required />
                                    <span className="absolute top-4 right-3"><FaEye></FaEye></span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
                            <Link to={'/login'} rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;