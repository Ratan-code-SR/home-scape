import { useParams, useLoaderData } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { MdBedroomParent, MdElevator } from "react-icons/md";
import { BiSwim } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";

const Details = () => {
    const detailsData = useLoaderData()
    const { id } = useParams()
    const findData = detailsData.find(data => data.id == id);

    const { amenities, image_url, segment_name, price, location, bed, baths, Area, Status, facilities } = findData;
    return (
        <div className='my-10 bg-[#f5f7fb] p-2'>

            <div className='md:flex grid grid-cols-1 gap-5 '>
                <div className='md:w-1/2 w-full'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='md:text-3xl leading-5'>{segment_name} <span className='bg-[#ff385c] text-sm text-white  md:font-bold px-2 rounded-full'>{Status}</span></p>
                            <p className="flex items-center my-1"><CiLocationOn /> {location}</p>
                        </div>
                        <div>
                            <p className='text-[#ff385c] font-bold md:text-2xl'>{price}</p>
                            <p>{Area}</p>
                        </div>
                    </div>
                    <div className='bg-[#ffffff] p-4 shadow-xl'>
                        <div className=" py-2 ">
                            <p className="text-2xl font-bold">Properties</p>
                            <p className="border-2 w-20 border-orange-500 "></p>
                        </div>
                        <img src={image_url} alt="" className='w-full' /></div>
                </div>
                <div className='md:w-1/2 w-full' >
                    <div className=" py-2 ">
                        <p className="text-2xl font-bold">Description</p>
                        <p className="border-2 w-20 border-orange-500 "></p>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quo minima placeat, distinctio odit voluptatibus rem excepturi. Nam iure debitis aliquam delectus consectetur ex quae, sint repellendus fugit voluptates labore?</p>

                    <div>
                        <div className=" py-2 ">
                            <p className="text-2xl font-bold">Property Details</p>
                            <p className="border-2 w-20 border-orange-500 "></p>
                            <div>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td className='text-sm font-bold'>Price: <span className='font-normal '>{price}</span></td>
                                                <td className='text-sm font-bold'>Area: <span className='font-normal '>{Area}</span></td>
                                                <td className='text-sm font-bold'>Property type: <span className='font-normal '>{segment_name}</span></td>

                                            </tr>
                                            <tr>

                                                <td className='text-sm font-bold'>Bed Rooms: <span className='text-sm font-normal'>{bed}</span></td>
                                                <td className='text-sm font-bold'>Bath Rooms: <span className='text-sm font-normal'>{baths}</span></td>
                                                <td className='text-sm font-bold'>Property Status: <span className='text-sm font-normal'>{Status}</span></td>
                                            </tr>


                                            <tr>

                                                <td ><p className='flex items-center gap-2'><MdBedroomParent />{facilities[0]}</p></td>
                                                <td ><p className='flex items-center gap-2'><BiSwim />{facilities[1]}</p></td>
                                                <td ><p className='flex items-center gap-2'><MdElevator />{facilities[2]}</p></td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ========================= */}
                    <div>
                        <div className=" py-2 ">
                            <p className="text-2xl font-bold">Amenities</p>
                            <p className="border-2 w-20 border-orange-500 "></p>
                            <div>
                                <div className="overflow-x-auto">
                                    <table className="table">

                                        <tbody>


                                            <tr>
                                                {
                                                    amenities.slice(0, 3).map(amenity => <td>
                                                        <p className='flex gap-3 items-center'><span className='text-green-400 font-bold'><FaRegCheckCircle /></span> {amenity}</p>
                                                    </td>)
                                                }
                                            </tr>
                                            <tr>
                                                {
                                                    amenities.slice(3, 6).map(amenity => <td>
                                                        <p className='flex gap-3 items-center'> <span className='text-green-400 font-bold'><FaRegCheckCircle /></span> {amenity}</p>
                                                    </td>)
                                                }
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <p className='border-2 border-green-500 mt-5 '></p>
            <div className='my-10 '>
                <h1 className='text-center font-bold text-3xl '>Request Inquiry</h1>
                <p className='border-2 border-green-500 w-[100px] mx-auto mt-2'></p>
                <div className="hero-content ">
                    <div className="card shrink-0 w-full md:w-[700px] rounded-none shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email:</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name:</span>
                                </label>
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
                                <button className="p-3 text-white bg-[#ff385c]">Submit Request</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Details;