
const About = () => {
    return (
        <section>
            <section className="md:flex  justify-between  my-10 gap-5 grid grid-cols-1">

                <div className="1/2">
                    <img src="https://i.ibb.co/7GPqDLB/4.jpg" alt="" />
                </div>
                <div className="md:w-2/4">
                    <div className="py-2 md:text-start text-center ">
                        <h1 className="text-2xl font-bold"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >About Us </h1>
                        <p className="border-2 w-20 border-orange-500  md:mx-0 mx-auto"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"></p>
                    </div>

                    <p><span className="text-3xl font-bold">W</span>elcome to HomeScape, your premier destination for real estate solutions tailored to your needs. With a passion for connecting individuals with their ideal properties, HomeScape strives to simplify the real estate journey for buyers, sellers, and investors alike. Our platform boasts a vast selection of meticulously curated listings, ranging from cozy starter homes to sprawling estates, ensuring that there's something for everyone. Backed by a team of industry experts, HomeScape is committed to providing unparalleled service and support throughout every step of the process. Whether you're a first-time buyer, seasoned investor, or homeowner looking to sell, HomeScape offers the tools, resources, and expertise to help you achieve your goals. We understand that finding the perfect property is more than just a transaction – it's about finding a place to call home. Let HomeScape be your guide as you embark on your real estate journey. Explore our platform today and discover the possibilities that await you.</p>
                </div>
            </section>
          <p className="border border-purple-400 opacity-50"></p>
            <section className="md:flex justify-between  md:flex-row flex flex-col-reverse my-10 gap-5  ">
                <div className="md:w-2/4">
                    <div className="py-2 ">
                        <h1 className="text-2xl font-bold md:text-start text-center"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >Our Mission </h1>
                        <p className="border-2 w-20 border-orange-500 md:mx-0 mx-auto "
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        ></p>
                    </div>
                    <p> <span className="text-3xl font-bold">O</span>ur mission at HomeScape is to revolutionize the real estate experience by providing a seamless and personalized platform for buyers, sellers, and investors. We aim to empower individuals to make informed decisions about their real estate ventures through comprehensive listings, innovative technology, and expert guidance. Our commitment is to foster transparency, trust, and satisfaction in every interaction, ensuring that each client feels supported and valued. At HomeScape, we believe in the transformative power of finding the perfect home or investment property, and we're dedicated to helping our users achieve their goals with confidence and ease. Join us in redefining the way real estate is done, one successful transaction at a time.</p>
                </div>

                <img className="md:w-1/2 w-full"
                    data-aos="flip-left"
                    data-aos-easing="linear"
                    data-aos-duration="1000" src="https://i.ibb.co/RTh3HdP/images-9.jpg" alt="" />
            </section>
        </section>

    );
};

export default About;