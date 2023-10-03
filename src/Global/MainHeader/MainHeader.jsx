import logo from "../../assets/logo.png"
import moment from 'moment/moment';
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <header className='pt-10 pb-7'>
            <div className="container flex items-center justify-center">
                <div className=''>
                    <div className='text-center mb-3'>
                        <Link to={'/'}>
                            <img src={logo}  alt="Logo" />
                        </Link>
                    </div>
                    <p className='text-[#706F6F] text-lg font-normal text-center mb-1'>Journalism Without Fear or Favour</p>
                    <p className='text-[#706F6F] text-xl font-medium text-center'>{moment().format('dddd, MMMM DD, YYYY')}</p>
                </div>
            </div>
        </header>
    );
};

export default MainHeader;