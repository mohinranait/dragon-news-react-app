
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const {createUser,updateUser} = useAuth()
    const navigate = useNavigate();



    const handleRegister = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await createUser(email, password);
            await updateUser(name, photoUrl);
            toast.success("Register Successfull");
            e.target.reset();
            navigate("/")
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
                            <p className='text-[#403F3F] text-center text-4xl font-semibold'>Register your account</p>
                        </div>
                        <div className='mt-7'>
                            <form onSubmit={handleRegister}>
                                <div className='mb-6'>
                                    <label htmlFor="name" className='text-[#403F3F] text-xl font-semibold mb-2 inline-block'>Full Name</label>
                                    <input type="text" name='name' className='py-3 px-3 w-full border bg-[#F3F3F3] rounded ' id='name' />
                                </div>
                                <div className='mb-6'>
                                    <label htmlFor="photoUrl" className='text-[#403F3F] text-xl font-semibold mb-2 inline-block'>Photo URL</label>
                                    <input type="text" name='photoUrl' className='py-3 px-3 w-full border bg-[#F3F3F3] rounded ' id='photoUrl' />
                                </div>
                                <div className='mb-6'>
                                    <label htmlFor="email" className='text-[#403F3F] text-xl font-semibold mb-2 inline-block'>Email</label>
                                    <input type="email" name='email' className='py-3 px-3 w-full border bg-[#F3F3F3] rounded ' id='email' />
                                </div>
                                <div className='mb-6'>
                                    <label htmlFor="password" className='text-[#403F3F] text-xl font-semibold mb-2 inline-block'>Password</label>
                                    <input type="password" name='password' className='py-3 px-3 w-full border bg-[#F3F3F3] rounded' id='password' />
                                </div>
                                <div className='mb-6'>
                                   <button className='bg-[#403F3F] py-3 rounded text-center w-full font-semibold text-lg text-white ' type='submit'>Register</button>
                                </div>
                            </form>
                            <div>
                                <p className='text-center text-[#706F6F] text-base font-semibold py-2 '>I Have An Account ! <Link to={'/user/login'} className='text-[#D72050]'>Login</Link> </p>
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

export default Register;