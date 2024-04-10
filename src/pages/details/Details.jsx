import { useParams, useLoaderData } from 'react-router-dom'
const Details = () => {
    const detailsData = useLoaderData()
    const { id } = useParams()
    // console.log(id);
    // console.log(data);
    const findData = detailsData.find(data => data.id == id);
    // console.log(findData);
    const { image_url, segment_name, price, location, bad, baths, Area } = findData;
    return (
        <div className='my-10'>
            <div className="text-center py-2 ">
                <p className="text-2xl font-bold">View all details</p>
                <p className="border-2 w-20 border-orange-500 mx-auto"></p>
            </div>
         
            <div className='flex  gap-5 '>
                <div className='w-1/2'>
                    <img src={image_url} alt="" className='w-full' />
                </div>
                <div className='w-1/2' >
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quo minima placeat, distinctio odit voluptatibus rem excepturi. Nam iure debitis aliquam delectus consectetur ex quae, sint repellendus fugit voluptates labore?</p>
                </div>
            </div>
        </div>
    );
};

export default Details;