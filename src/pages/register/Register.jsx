import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const { signUpUser } = useContext(AuthContext)
    const onSubmit = (data) => {
        // console.log(data);
        // console.log(data);
        const email = data.email;
        const password = data.password;
        const username = data.name;
        const imageUrl = data.
            photoURL;

        reset()

        signUpUser(email, password)
            .then((result) => {
                // console.log(result.user)
                toast.success("Account create successfully!")
                
                    // set user profile
                updateProfile(result.user, {
                    displayName: username, photoURL: imageUrl
                }).then((result) => {
                   console.log(result.user);
                }).catch((error) => {
                    console.log(error.message);
                });
            })
            .catch(error => {
                toast.error(error.message)
            })


    }

    return (
        <div className="hero bg-green-500 p-5 ">
            <div className=" ">
                <div className="text-center py-4 ">
                    <p className="text-3xl font-bold text-center text-white my-1">Register Account</p>

                    <p className="border-2 w-20 border-red-500 mx-auto "></p>
                </div>

                <div className="card  rounded-none md:w-[500px] lg:w-[500px] w-full shadow-2xl bg-base-100">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body gap-0 px-4 py-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input
                                defaultValue="ratan" {...register("name")}
                                {...register("name", { required: true })}
                                type="text" placeholder="name" className="input input-bordered" />
                            {errors.name && <small className="text-red-400">This field is required</small>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input
                                defaultValue="mamamami@gmail.com" {...register("email")}
                                {...register("email", { required: true })}

                                type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <small className="text-red-400">This field is required</small>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">photoURL</span>
                            </label>
                            <input
                                defaultValue="https://i.ibb.co/6tHj0Vh/banner1.jpg" {...register("photoURL")}
                                {...register("photoURL", { required: true })}

                                type="text" placeholder="Image URL" className="input input-bordered" />
                            {errors.photoURL && <small className="text-red-400">This field is required</small>}
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 bottom-3 ">{showPassword ? <FaRegEye /> : <FaEyeSlash />}</span>
                            <input
                                defaultValue="mamaMami" {...register("email")}

                                {...register("password", { required: true })}

                                {...register("password", { pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/ })}
                                type={`${showPassword ? 'text' : 'password'}`} placeholder="password" className="input input-bordered " />

                            {errors.password && <small className="text-red-400">
                                Password Must have an Uppercase and a Lowercase letter
                            </small>}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-success text-white">Register Account</button>
                        </div>
                        <p className="text-center py-1">You have already an account  <Link to='/login' className="text-green-500 font-bold underline">Log in</Link></p>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Register;