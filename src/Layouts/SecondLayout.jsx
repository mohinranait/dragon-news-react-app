import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const SecondLayout = () => {
    return (
        <>
            <Navbar></Navbar> 
            <Outlet></Outlet>  
            <Toaster />
        </>
    );
};

export default SecondLayout;