

const Gallery = () => {
    return (
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 ">
                <img src="https://i.ibb.co/QNQrW1m/1.jpg" alt=""  hover:data-aos="zoom-in" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" data-aos="flip-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="2000"/>
                  <img alt="" className="w-full h-full rounded shadow-sm dark:bg-gray-500 aspect-square " data-aos="flip-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="2000" src="https://i.ibb.co/8B7FYF8/2.jpg0" />
                  <img alt="" className="w-full h-full rounded shadow-sm  dark:bg-gray-500 aspect-square"  data-aos="flip-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="2000"src="https://i.ibb.co/VJVYPRC/3.jpg" />
                  <img alt="" className="w-full h-full rounded shadow-sm dark:bg-gray-500 aspect-square" data-aos="flip-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="2000" src="https://i.ibb.co/7GPqDLB/4.jpg" />
                  <img alt="" className="w-full h-full rounded shadow-sm dark:bg-gray-500 aspect-square" data-aos="flip-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="2000" src="https://i.ibb.co/kXyyxkC/5.jpg" />
            </div>
        </section>
    );
};

export default Gallery;