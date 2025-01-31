import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom'



const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const { signUpUser, setUser, loading } = useContext(AuthContext)
    useEffect(() => {
        document.title = "Register"
    }, [])
    const onSubmit = (data) => {

        const email = data.email;
        const password = data.password;
        const displayName = data.name;
        const photoURL = data.
            photoURL;

        reset()

        signUpUser(email, password)
            .then((result) => {
                toast.success("Account create successfully!")
                updateProfile(result.user, {
                    displayName:displayName,
                    photoURL:photoURL

                });

                setUser({ displayName:displayName, photoURL:photoURL })
                setTimeout(() => {
                    navigate(location?.state ? location.state : "/")
                }, 1000);
                if (loading) {
                    return <>
                        <div className="flex justify-center my-52">
                            <span className="loading loading-spinner text-neutral text-center"></span>
                        </div>
                    </>
                }

            })
            .catch(error => {
                toast.error(error.message)
            })

    }

    return (
        <div className="hero bg-gradient-to-r from-green-200 to-green-400 p-5 ">
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
                                defaultValue="https://i.ibb.co/vjcKbF3/1-5.jpg" {...register("photoURL")}
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
                            <button type="submit" className="relative rounded px-5 py-2.5 overflow-hidden group  bg-[#ff385c]  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:text-black hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative">Register Account</span>
                            </button>
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