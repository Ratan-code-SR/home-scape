import { useForm } from "react-hook-form"

import { useContext } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";


const Update_profile = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const { user } = useContext(AuthContext)
    const onSubmit = (data) => {
        const email = data.email;
        const username = data.name;
        const imageUrl = data.
            photoURL;

        reset()


        updateProfile(user, {
            displayName: username, photoURL: imageUrl, email: email
        }).then((result) => {
            console.log(result.user);
            toast.success('Profile update successfully!')

        }).catch((error) => {
            console.log(error.message);
            toast.error(error.message)
        });


    }

    return (
        <div className="hero bg-green-500 p-5 ">
            <div className=" ">
                <div className="text-center py-4 ">
                    <p className="text-3xl font-bold text-center text-white my-1">Update Your Profile</p>

                    <p className="border-2 w-20 border-red-500 mx-auto "></p>
                </div>

                <div className="card  rounded-none md:w-[500px] lg:w-[500px] w-full shadow-2xl bg-base-100">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body gap-0 px-4 py-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input
                                {...register("name")}
                                {...register("name", { required: false })}
                                type="text" placeholder="name" className="input input-bordered" />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input
                                {...register("email")}
                                {...register("email", { required: false })}

                                type="email" placeholder="email" className="input input-bordered" />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">photoURL</span>
                            </label>
                            <input
                                {...register("photoURL")}
                                {...register("photoURL", { required: false })}
                                type="text" placeholder="Image URL" className="input input-bordered" />

                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-success text-white">Update Profile</button>
                        </div>

                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Update_profile;