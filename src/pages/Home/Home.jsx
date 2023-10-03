import Markue from '../../components/markue/Markue';
import Navbar from '../../components/Navbar/Navbar';
import HomeSection from '../../components/Home/HomeSection';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const news = useLoaderData();

    return (
        <>
            <Markue></Markue>
            <Navbar></Navbar>
            <HomeSection news={news}></HomeSection>
        </>
    );
};

export default Home;