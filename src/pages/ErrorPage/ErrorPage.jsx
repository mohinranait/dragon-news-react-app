
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex h-[90vh] items-center justify-center'>
            <div className=''>
                <div>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/022/310/933/small/404-error-page-not-found-3d-illustration-png.png"  alt="404 page" />
                </div>
                <div>
                    <p className='text-center font-bold text-3xl text-gray-600'>Not found page</p>
                   
                </div>
                <div className='mt-8 text-center'>
                    <Link to={'/'} className='px-5 py-2 bg-blue-300 text-black font-semibold rounded-md'>Go Home</Link>
                </div>
            </div>
            
        </div>
    );
};

export default ErrorPage;