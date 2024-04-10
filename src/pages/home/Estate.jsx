import { Link, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBedroomParent, MdBathtub ,MdOutlineSquareFoot,MdAddHomeWork } from "react-icons/md";





const Estate = ({ data }) => {
    const { id, image_url, segment_name, price, location, bed, baths, Area } = data;
    // console.log(data);
    return (
        <>

            <div className="card w-full bg-base-100 p-2 border-2 border-green-300 rounded-md">
                <div className="relative">
                    <img className="h-[250px]  " src={image_url} alt="Shoes" />
                    <p className="absolute left-2 bottom-1 text-green-400 opacity-90 text-2xl font-bold">{price}</p>
                </div>

                <div className="pt-5">
                    <h2 className="card-title"><MdAddHomeWork />{segment_name}</h2>
                    <h5 className="flex gap-2 items-center"><CiLocationOn /> {location}</h5>
                    <div className="flex gap-5 text-md items-center">
                        <p className="flex gap-1 items-center"><MdOutlineBedroomParent /> {bed} bedroom</p>
                        <p className="flex gap-1 items-center"><MdBathtub /> {baths} baths</p>
                        <p className="flex gap-1 items-center"><MdOutlineSquareFoot/> {Area}</p>
                    </div>

                    <div className="card-actions justify-end mt-2">
                        <Link to={`/details/${id}`} className="btn btn-success text-[#ffffffd3] w-full">View Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Estate;