import { IoLogoFacebook, IoLogoGoogle, IoLogoTwitter } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';

const SocialLogin = () => {
    const {googleLogin,FacebookLogin, twitterLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSocialLogin = async (media) => {
        try{
            await media();
            toast.success("Login Success ")
            navigate( location?.state ? location.state : '/')
        }catch(err){
            toast.error(err.message)
        }
    }
    return (
        <>
            <ul className='flex flex-col lg:flex-row items-center justify-center gap-6 mt-3'>
                <li onClick={() => handleSocialLogin(googleLogin)} className='flex w-[50px] h-[50px] cursor-pointer items-center gap-3 py-3 border border-red-400   rounded-md justify-center'>
                    <IoLogoGoogle className='text-xl text-red-400'></IoLogoGoogle> 
                    {/* <span className='text-gray-500'>Login With Google</span> */}
                </li>
                <li onClick={() => handleSocialLogin(FacebookLogin)} className='flex w-[50px] h-[50px] cursor-pointer  items-center gap-3 py-3 border border-blue-500   rounded-md justify-center'>
                    <IoLogoFacebook className='text-xl text-blue-500'></IoLogoFacebook> 
                    {/* <span className='text-gray-500'>Login With Facebook</span> */}
                </li>
                <li onClick={() => handleSocialLogin(twitterLogin)} className='flex w-[50px] h-[50px]  cursor-pointer  items-center gap-3 py-3 border border-blue-500   rounded-md justify-center'>
                    <IoLogoTwitter className='text-xl text-blue-500'></IoLogoTwitter> 
                    {/* <span className='text-gray-500'>Login With Twitter</span> */}
                </li>
            </ul>   
        </>
    );
};

export default SocialLogin;