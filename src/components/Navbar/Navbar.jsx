
import { Link, NavLink } from "react-router-dom";
import userIcon from "../../assets/user.png"
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {

    const {user,logoutUser} = useAuth();
    const handleLogout = () => {
        logoutUser()
    }

    return (
        <>
            <div>
                <div className="container py-6">
                    <div className='grid justify-center grid-cols-1 lg:grid-cols-4 gap-5'>
                        <div></div>
                        <div className='col-span-2'>
                            <nav>
                                <ul className='flex items-center justify-center gap-6'>
                                    <li><NavLink to="/" className='text-[#706F6F] text-lg font-normal'>Home</NavLink></li>
                                    <li><NavLink to="/user" className='text-[#706F6F] text-lg font-normal'>Dashboard</NavLink></li>
                                    <li><NavLink className='text-[#706F6F] text-lg font-normal'>Contact</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className=''>
                            <ul className='flex justify-end gap-4 items-center '>
                                {
                                    user ? <>
                                        <li><img src={ user?.photoURL ? user.photoURL : userIcon} className='w-10 h-10 rounded-full' alt="user icon" /></li>
                                        <li> <button onClick={handleLogout} className='py-2 px-4 bg-gray-800 text-white font-normal'>Logout</button> </li>
                                    </> : 
                                    <>
                                        <li> <Link to={'/user/login'} className='py-2 px-4 bg-gray-800 text-white font-normal'>Login</Link> </li>
                                    </>
                                }
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Navbar;