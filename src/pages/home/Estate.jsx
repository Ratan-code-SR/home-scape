import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBedroomParent, MdBathtub, MdOutlineSquareFoot, MdAddHomeWork } from "react-icons/md";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Estate = ({ data }) => {
    const { id, image_url, segment_name, price, location, bed, baths, Area } = data;
    // console.log(data);
    return (
        <>

            <div className="card w-full bg-base-100 p-2 border-2 border-green-300 rounded-md"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                <div className="relative">
                    <img className="h-[250px] w-full " src={image_url} alt="Shoes" />
                    <p className="absolute left-2 bg-white opacity-70 px-2 bottom-1 text-green-500 text-2xl font-bold">{price}</p>
                </div>

                <div className="pt-5">
                    <h2 className="card-title"><MdAddHomeWork />{segment_name}</h2>
                    <h5 className="flex gap-2 items-center"><CiLocationOn /> {location}</h5>
                <div className=" md:grid md:grid-cols-2 flex md:gap-2 gap-2  items-center">
                        <p className="flex md:gap-1 gap-0 items-center text-sm "><MdOutlineBedroomParent /> {bed} bedroom</p>
                        <p className="flex md:gap-1 gap-0 items-center"><MdBathtub /> {baths} baths</p>
                        <p className="flex md:gap-1 gap-0 items-center text-sm "><MdOutlineSquareFoot /> {Area}</p>
                    </div>

                    <div className="card-actions justify-end mt-2 text-center">
                        <Link to={`/details/${id}`} className="relative  w-full px-5 py-2.5 overflow-hidden group bg- bg-green-500  hover:bg-gradient-to-r hover:from-[#ff385c] hover:to-green-400 text-white hover:text-black hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">View Property</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Estate;