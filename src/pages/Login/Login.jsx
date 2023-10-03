
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {loginUser} = useAuth();


    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const user = await loginUser(email, password);
            toast.success("Login Success");
            e.target.reset();
            console.log(user.user);
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <section className='bg-[#F3F3F3]'>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-4' >
                    <div></div>
                    <div className='col-span-2 py-10'>
                        <div className='bg-white p-10 lg:p-16'>
                            <div className='border-b border-gray-200 pb-8'>
                                <p className='text-[#403F3F] text-center text-4xl font-semibold'>Login your account</p>
                            </div>
                            <div className='mt-7'>
                                <form onSubmit={handleLogin}>
                                    <div className='mb-6'>
                                        <label htmlFor="email" className='text-[#403F3F] text-xl font-semibold mb-2 inline-block'>Email</label>
                                        <input type="email" name='email' className='py-3 px-3 w-full border bg-[#F3F3F3] rounded ' id='email' />
                                    </div>
                                    <div className='mb-6'>
                                        <label htmlFor="password" className='text-[#403F3F] text-xl font-semibold mb-2 inline-block'>Password</label>
                                        <input type="password" name='password' className='py-3 px-3 w-full border bg-[#F3F3F3] rounded' id='password' />
                                    </div>
                                    <div className='mb-6'>
                                       <button type='submit' className='bg-[#403F3F] py-3 rounded text-center w-full font-semibold text-lg text-white '>Login</button>
                                    </div>
                                </form>
                                <div>
                                    <p className='text-center text-[#706F6F] text-base font-semibold py-2 '>Dont’t Have An Account ? <Link to={'/user/register'} className='text-[#D72050]'>Register</Link> </p>
                                </div>
                                <div className='flex items-center gap-4 justify-center'>
                                    <span className='w-full h-[1px] bg-gray-200'></span>
                                    <span className='text-gray-500'>OR</span>
                                    <span className='w-full h-[1px] bg-gray-200'></span>
                                </div>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>  
        </section>
    );
};

export default Login;