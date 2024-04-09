import { NavLink } from "react-router-dom";


const Nav = () => {
    const navLinks = <>
        <li className="ml-5 hover:underline transition-all delay-75 font-bold "><NavLink to='/'>Home</NavLink></li>
        <li className="ml-5 hover:underline transition-all delay-75 font-bold "><NavLink to='/about'>About</NavLink></li>
        <li className="ml-5 hover:underline transition-all delay-75 font-bold"><NavLink to='/hello'>Update Profile</NavLink></li>
    </>
    return (
        <div className="navbar  ">
            <div className="navbar-start">
                <div className="dropdown  z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="rounded-none  bg-[#ffffff75] font-bold   dropdown-content mt-2 z-[1] p-2 shadow bg-base-100  w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl ">HomeScape</a>
            </div>
            <div className="navbar-center  hidden lg:flex ">
                <ul className=" menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <div className="w-10 ">
                    <img className="rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Nav;