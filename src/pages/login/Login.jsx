import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(data,email,password);
    }
    return (
        <div className="hero bg-base-200">
            <div className=" ">
                <p className="text-3xl font-bold text-center my-1">Register Account</p>
                <div className="card  md:w-[500px] lg:w-[500px] w-full shadow-2xl bg-base-100">

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

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input
                                defaultValue="mamaMami" {...register("email")}

                                {...register("password", { required: true })}

                                {...register("password", { pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/ })}
                                type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <small className="text-red-400">
                                Password Must have an Uppercase and a Lowercase letter
                            </small>}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-center py-1">You have already an account  <Link className="text-orange-500 font-bold underline">Log in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;