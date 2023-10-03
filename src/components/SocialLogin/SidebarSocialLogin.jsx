
import {  IoLogoFacebook,  IoLogoGoogle } from 'react-icons/io5';
import useAuth from '../../Hooks/useAuth';

const SidebarSocialLogin = () => {
    const { googleLogin, FacebookLogin,} = useAuth()
    const handleSocialLogin = (media) => {
        media();
    }
    return (
        <>
            <div className='mb-5'>
                <h3 className='text-xl text-[#403F3F] mb-3 font-semibold'>Login With</h3>
                <div>
                    <ul className='space-y-2'>
                        <li onClick={() => handleSocialLogin(googleLogin)} className='flex items-center gap-2 pl-10 border border-gray-600 text-gray-600 rounded py-2 cursor-pointer text-lg'> <IoLogoGoogle  className=''></IoLogoGoogle> <span className='text-base'>Login with Google</span> </li>
                        <li onClick={() => handleSocialLogin(FacebookLogin)} className='flex items-center gap-2 pl-10 border border-blue-500 text-blue-500 rounded py-2 cursor-pointer text-lg'> <IoLogoFacebook className=''></IoLogoFacebook> <span className='text-base'>Login with Facebook</span> </li>
                    </ul>
                </div>
            </div>   
        </>
    );
};

export default SidebarSocialLogin;