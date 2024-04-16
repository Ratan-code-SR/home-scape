
import { useLoaderData } from "react-router-dom";
import Slider from './slide/Slider';
import Estate from "./Estate";
import Review from "./review/Review";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import Gallery from "./gallery/Gallery";

AOS.init();

const Home = () => {
    const { loading } = useContext(AuthContext)
    const loadData = useLoaderData()

    useEffect(() => {
        document.title = "Home"
    }, [])

    if (loading) {
        return <div className="text-center my-72 ">
            <span className="loading loading-spinner text-neutral"></span>
        </div>
    }
    console.log(loadData);
    return (
        <>
            <Slider loadData={loadData} />
            <section className="my-5">
                <div className="text-center py-4 ">
                    <p className="text-2xl font-bold"
                        data-duration-aos="1000"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >Estate Featured Properties</p>
                    <h5 className="text-xl font-bold mb-3"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"

                    >Handpicked properties by our team.</h5>
                    <p className="border-2 w-20 border-orange-500 mx-auto "></p>

                </div>

                <div className="grid md:grid-cols-3 gap-3 grid-cols-1"
                >
                    {
                        Array.isArray(loadData) && loadData.map(data => <Estate key={data.id} data={data} />)
                    }
                </div>

            </section>
            <section>
                <div className="text-center py-2 ">
                    <p className="text-2xl font-bold"
                        data-aos="flip-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                    >Our Feature Gallery </p>
                    <p className="border-2 w-20 border-orange-500 mx-auto"></p>
                </div>
                <div>
                    <Gallery />
                </div>
            </section>
            <section className="my-10 ">
                <div className="text-center py-2 ">
                    <p className="text-2xl font-bold"
                        data-aos="flip-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                    >Client Review</p>
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
