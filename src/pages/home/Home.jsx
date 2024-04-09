
import { useLoaderData } from "react-router-dom";
import Slider from './Slider';
import Estate from "./Estate";


const Home = () => {

    const loadData = useLoaderData();
    // console.log(data);

    return (
        <>
            <Slider key={loadData.id} loadData={loadData} />
            <section className="my-5">
                <div className="my-10 text-center">
                    <h1 className="text-5xl font-bold">Featured Properties</h1>
                    <h5 className="text-3xl font-bold">Handpicked properties by our team.</h5>
                </div>
                <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
                    {
                        loadData.map(data => <Estate key={data.id} data={data} />)
                    }
                </div>

            </section>
        </>
    );
}
export default Home;
