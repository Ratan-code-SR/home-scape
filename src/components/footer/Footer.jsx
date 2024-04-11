import { Link } from "react-router-dom";
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import whatsapp from '../../assets/whatsapp.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/instagram.jpeg'
import logo1 from '../../assets/logo1.jpg'
import logo2 from '../../assets/logo2.jpg'


const Footer = () => {
    return (
        <footer className="footer footer-center bg-[#e6edf6] py-3 gap-4 ">

            <ul className="md:flex items-center md:gap-5 gap-2">
                <li className="ml-5 hover:underline transition-all delay-75 font-bold "><Link to='/'>Home</Link></li> 
                <li className="ml-5 hover:underline transition-all delay-75 font-bold "><Link to='/about'>About</Link></li>
                <li className="ml-5 hover:underline transition-all delay-75 font-bold "><Link to='/contact'>Contact</Link></li>
                <li className="ml-5 hover:underline transition-all delay-75 font-bold"><Link to='/updateProfile'>Update Profile</Link></li>
            </ul>
            
            <nav>
                <div className="grid grid-flow-col gap-2">
                    <a> <img className="w-5 h-5  rounded-full" src={facebook} alt="" /></a>
                    <a> <img className="w-5 h-5  rounded-full" src={twitter} alt="" /></a>
                    <a> <img className="w-5 h-5  rounded-full" src={youtube} alt="" /></a>
                    <a> <img className="w-5 h-5  rounded-full" src={whatsapp} alt="" /></a>
                    <a> <img className="w-5 h-5  rounded-full" src={instagram} alt="" /></a>

                </div>
            </nav>
            
           
            <aside>
                <small className="text-red-400 font-bold">Copyright © 2024 - All right reserved by HomeScape LTD.</small>
            </aside>
            <div className="md:flex grid grid-cols-1 justify-center items-center  ">
           <img className="h-5" src={logo1} alt="" />
           <img className="h-5" src={logo2} alt="" />
           </div>
        </footer>
    );
};

export default Footer;