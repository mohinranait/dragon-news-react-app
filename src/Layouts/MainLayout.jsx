
import { Outlet } from 'react-router-dom';
import MainHeader from '../Global/MainHeader/MainHeader';

const MainLayout = () => {
    return (
        <>
            <MainHeader></MainHeader>
            <Outlet></Outlet>
        </>
    );
};

export default MainLayout;