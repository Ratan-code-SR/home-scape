import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Nav = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const navLinks = <>
        <li className="ml-5 hover:underline transition-all delay-75 font-bold "><NavLink to='/'>Home</NavLink></li>
        <li className="ml-5 hover:underline transition-all delay-75 font-bold "><NavLink to='/about'>About</NavLink></li>
        <li className="ml-5 hover:underline transition-all delay-75 font-bold "><NavLink to='/contact'>Contact</NavLink></li>
        {
            user ? <> <li className="ml-5 hover:underline transition-all delay-75 font-bold"><NavLink to='/updateProfile'>Update Profile</NavLink></li></> : ""
        }
        {user ? <li onClick={() => {
            logoutUser()
        }} className="ml-5 hover:underline transition-all delay-75 font-bold md:hidden block">Log Out</li>
            : <>
                <li className="ml-5 hover:underline transition-all delay-75 font-bold md:hidden block"><NavLink to='/login'>Log In</NavLink></li>
                <li className="ml-5 hover:underline transition-all delay-75 font-bold md:hidden block"><NavLink to='/register'>Register</NavLink></li>
            </>}
    </>
    return (
        <div className="navbar">
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
                {
                    user ? <>
                        <div className="tooltip tooltip-bottom z-10 d" data-tip={`${user.displayName ? user.displayName : "Not Found"}`}>
                            <div className="  ">
                                <img className="w-10 h-10 rounded-full " alt="Tailwind CSS Navbar component " src={user.photoURL} />
                            </div>
                        </div>

                        <button onClick={() => {
                            logoutUser()
                        }} className="md:block hidden relative rounded px-5 py-2.5 overflow-hidden group bg-green-500  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Logout</span>
                        </button>
                    </> : <>
                        <Link to='/Register'><button className=" md:block hidden rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Register</span>
                        </button></Link>
                        <Link to='/login'> <button className=" md:block hidden rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Log In</span>
                        </button></Link>

                    </>
                }
            </div>
        </div>
    );
};

export default Nav;