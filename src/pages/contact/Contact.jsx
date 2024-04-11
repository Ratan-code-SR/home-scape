import { MdAddLocationAlt } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect } from "react";


const Contact = () => {
    useEffect(() => {
        document.title = "Contact"
    }, [])
    return (
        <section className="py-6 bg-gradient-to-r from-green-200 to-green-400 text-black ">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 "
                >
                    <h1 className='font-bold text-3xl '>Get in touch</h1>
                    <p className='border-2 border-[#ff385c] w-[100px]  mt-2'></p>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center  gap-2">
                            <span className="text-2xl text-[#ff385c]"> <MdAddLocationAlt /></span>
                            <span className="text-sm">Fake address, 9999 City</span>
                        </p>
                        <p className="flex items-center  gap-2">
                            <span className="text-2xl gap-2 text-[#ff385c]">     <FaPhoneAlt /></span>

                            <span className="text-sm">123456789</span>
                        </p>
                        <p className="flex items-center text-2xl gap-2">
                            <span className="text-2xl gap-2 text-[#ff385c]"> <IoMdMailUnread /></span>

                            <span className="text-sm">homescapecontact@gamil.com</span>
                        </p>
                    </div>
                </div>
                <div className=''>

                    <div className="hero-content ">
                        <div className="card shrink-0  rounded-none shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">

                                    <input type="email" placeholder="email" className="input input-bordered rounded-none" required />
                                </div>
                                <div className="form-control">

                                    <input type="text" placeholder="Full Name" className="input input-bordered rounded-none" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="number" placeholder="Phone Number" className="input input-bordered rounded-none" required />

                                </div>

                                <div className="form-control">
                                    <textarea className='input input-bordered rounded-none' name="" id="" cols="30" rows="10" placeholder=' message'></textarea>
                                </div>
                                <div className="form-control mt-6">
                                <button  className="relative rounded px-5 py-2.5 overflow-hidden group bg- bg-[#ff385c]  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:text-black hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative">Submit</span>
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;