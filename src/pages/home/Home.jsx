
import { useLoaderData } from "react-router-dom";
import Slider from './slide/Slider';
import Estate from "./Estate";
import Review from "./review/Review";


const Home = () => {

    const loadData = useLoaderData();
    // console.log(data);

    return (
        <>
            <Slider loadData={loadData} />
            <section className="my-5">
                <div className="text-center py-4 ">
                    <p className="text-2xl font-bold">Featured Properties</p>
                    <h5 className="text-xl font-bold mb-3">Handpicked properties by our team.</h5>
                    <p className="border-2 w-20 border-orange-500 mx-auto "></p>

                </div>
              
                <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
                    {
                        loadData.map(data => <Estate key={data.id} data={data} />)
                    }
                </div>

            </section>
            <section className="my-10 ">
                <div className="text-center py-2 ">
                    <p className="text-2xl font-bold">Client Review</p>
                    <p className="border-2 w-20 border-orange-500 mx-auto"></p>
                </div>

                <div >
                    <Review />
                </div>
            </section>
        </>
    );
}
export default Home;
