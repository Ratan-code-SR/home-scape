import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { useContext, useState } from "react";
import google from '../../assets/google.jpg'
import github from '../../assets/github.png'
import { AuthContext } from "../../components/provider/AuthProvider";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {signInUser} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(data, email, password);
        reset()
        signInUser(email,password)
        .then((result)=> {
            console.log(result);
            toast.success("Log in successfully!")
        })
        .catch(error =>{
            console.log(error.message);
            toast.error(error.message)
        })
    }
    return (
        <div className="hero my-10 bg-green-500 p-5">
            <div className="">
                <div className="text-center py-4 ">
                    <p className="text-3xl font-bold text-center text-white my-1">Login Account</p>

                    <p className="border-2 w-20 border-red-500 mx-auto "></p>
                </div>
                <div className="card  md:w-[500px] lg:w-[500px] w-full shadow-2xl bg-base-100 rounded-none">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body gap-0 px-4 py-0 border border-green-400">

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


                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 bottom-3 ">{showPassword ? <FaRegEye /> : <FaEyeSlash />}</span>
                            <input
                                defaultValue="mamaMami" {...register("email")}

                                {...register("password", { required: true })}

                                {...register("password", { pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/ })}
                                type={`${showPassword ? 'text' : 'password'}`} placeholder="password" className="input input-bordered" />

                            {errors.password && <small className="text-red-400">
                                Password Must have an Uppercase and a Lowercase letter
                            </small>}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-success text-white">Log In</button>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="border-b border-black"></p>
                            <span className="text-xl">or</span>
                            <p className="border-b border-black"> </p>
                        </div>
                        <div className="flex items-center justify-center gap-3 ">
                            <button className="w-12"><img src={google} alt="" /></button>
                            <button className="w-10"><img src={github} alt="" /></button>
                        </div>
                        <p className="text-center py-1">You have don't account  <Link to='/register' className="text-blue-500 font-bold text-sm underline">Register Now</Link></p>
                    </form>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    );
};

export default Register;