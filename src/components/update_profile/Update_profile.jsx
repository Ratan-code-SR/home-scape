import { useForm } from "react-hook-form"
import { useContext, useEffect } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import { HiOutlineMailOpen } from "react-icons/hi";


const Update_profile = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const { user } = useContext(AuthContext)
    useEffect(() => {
        document.title = "Update Profile-HomeScape"
    }, [])
    const onSubmit = (data) => {
        const email = data.email;
        const username = data.name;
        const imageUrl = data.
            photoURL;


        updateProfile(user, {
            displayName: username, photoURL: imageUrl, email: email
        }).then(() => {

            toast.success('Profile update successfully!  Please refresh now and show your profile details.')

        }).catch((error) => {
            console.log(error.message);
            toast.error(error.message)
        });

    }

    return (
        <div className="hero bg-gradient-to-r from-green-200 to-green-400 p-5 ">
            <div className=" ">
                <div className="text-center py-4 ">
                    <p className="text-3xl font-bold text-center text-white my-1">Update Your Profile</p>

                    <p className="border-2 w-20 border-red-500 mx-auto "></p>
                </div>
                <div className="md:flex justify-between items-center gap-5 grid grid-cols-1">
                    {/* showing profile */}
                    <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex flex-col">
                            <div className=" mx-auto">
                                <img src={user.photoURL} alt="" className="md:w-[300px] md:h-[300px]" />
                            </div>
                            <h2 className="text-2xl text-center font-semibold">{user.displayName}</h2>
                            <div className="space-y-1 text-center mx-auto">
                                {user.email ? <><span className="flex items-center space-x-2">
                                    <HiOutlineMailOpen />
                                    <span className="dark:text-gray-600">{user.email}</span>
                                </span></>  : ""}
                            </div>
                        </div>



                    </div>
                    <div className="card  rounded-none md:w-[500px] lg:w-[500px] w-full shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body gap-0 px-4 py-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input
                                    defaultValue={`${user.displayName ? user.displayName : ""}`}
                                    {...register("name")}
                                    {...register("name", { required: false })}
                                    type="text" placeholder="name" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input
                                    defaultValue={`${user.email ? user.email : "email is not found"}`}

                                    {...register("email")}
                                    {...register("email", { required: false })}

                                    type="email" placeholder="email" disabled className="input input-bordered" />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">photoURL</span>
                                </label>
                                <input
                                    defaultValue={`${user.photoURL ? user.photoURL : ""}`}
                                    {...register("photoURL")}
                                    {...register("photoURL", { required: false })}
                                    type="text" placeholder="Image URL" className="input input-bordered" />

                            </div>

                            <div className="form-control mt-6">
                                <button className="relative rounded px-5 py-2.5 overflow-hidden group bg- bg-[#ff385c]  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:text-black hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative">Update Profile</span>
                                </button>
                            </div>

                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update_profile;