import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

import zQue1 from "../assets/qZone1.png";
import zQue2 from "../assets/qZone2.png";
import zQue3 from "../assets/qZone3.png";
import SidebarSocialLogin from "./SocialLogin/SidebarSocialLogin";

import useAuth from "../Hooks/useAuth";

const RightSidebar = () => {
    const {user} = useAuth()
    return (
        <>
            {
                !user && <SidebarSocialLogin></SidebarSocialLogin>
            }
            
            <div className='mb-5'>
                <h3 className='text-xl text-[#403F3F] mb-3 font-semibold'>Find Us On</h3>
                <ul className='rounded-md border border-gray-200 divide-y'>
                    <li> <a href="" className='py-2 pl-4 flex gap-2 items-center'> <span className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center '><IoLogoFacebook className='text-xl text-blue-500'></IoLogoFacebook></span>  <span className='text-[#706F6F] text-base font-medium'>Facebook</span> </a> </li>
                    <li> <a href="" className='py-2 pl-4 flex gap-2 items-center'> <span className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center '><IoLogoTwitter className='text-xl text-sky-500'></IoLogoTwitter></span>  <span className='text-[#706F6F] text-base font-medium'>Twitter</span> </a> </li>
                    <li> <a href="" className='py-2 pl-4 flex gap-2 items-center'> <span className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center '><IoLogoInstagram className='text-xl text-pink-500'></IoLogoInstagram></span>  <span className='text-[#706F6F] text-base font-medium'>Instagram</span> </a> </li>
                </ul>
            </div>
            <div className='p-5 bg-[#F3F3F3]'>
                <h3 className='text-xl text-[#403F3F] mb-3 font-semibold'>Q-Zone</h3>
                <div>
                    <div className='mb-3'>
                        <img src={zQue1} className='w-full' alt="zque1" />
                    </div>
                    <div className='mb-3'>
                        <img src={zQue2} className='w-full' alt="zque1" />
                    </div>
                    <div className=''>
                        <img src={zQue3} className='w-full' alt="zque1" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RightSidebar;