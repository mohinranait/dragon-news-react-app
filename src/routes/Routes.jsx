import { Link, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home/Home';
import SinglePost from '../pages/SinglePost/SinglePost';
import Login from '../pages/Login/Login';

import Register from '../pages/Register/Register';
import CategoryWish from '../pages/CategoryWish/CategoryWish';
import SecondLayout from '../Layouts/SecondLayout';
import PrivateRoutes from './PrivateRoutes';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const myRoutes = createBrowserRouter([
    {
        path: "/",
        element : <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                loader : async () => await fetch("/news.json"),
                element : <Home></Home>
            },
            {
                path : "/news/:id",
                loader : async () => await fetch("/news.json"),
                element : <SinglePost></SinglePost>
            },
            {
                path: "/category/:id",
                element : <CategoryWish></CategoryWish>,
                loader : async () => await fetch("/news.json"),
            },
        ]
    },
    {
        path : '/user',
        element : <SecondLayout></SecondLayout>,
        children : [
            {
                path : "/user",
                element : <PrivateRoutes>
                     <div>
                        <h1 className='text-3xl text-center py-16'>Dashboard <Link className='text-base text-gray-500' to="/">Home</Link> </h1>
                    </div>
                </PrivateRoutes>
                
            },
            {
                path : "/user/login",
                element :  <Login></Login>
            },
            {
                path : "/user/register",
                element : <Register></Register>
            }
        ]
    }
]);

export default myRoutes;