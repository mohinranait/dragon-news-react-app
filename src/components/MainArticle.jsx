import PropTypes from "prop-types"
import { IoBookmarkOutline,IoEyeOutline,IoShareSocial, IoStar, IoStarOutline } from "react-icons/io5";
import setCharecter from '../utils/limitCharecter';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const MainArticle = ({news}) => {
    const {title,image_url,author,details,total_view,rating,_id } = news;
    const {name, published_date, img} = author;
    
    return (
        <>
            <article className='rounded-sm border border-gray-200 mb-8'>
                <div className='p-3 bg-[#F3F3F3] flex items-center justify-between' >
                    <div className='flex items-center gap-3'>
                        <img src={img} className='w-12 h-12 rounded-full' alt={name} />
                        <div>
                            <p className='text-[#403F3F] text-base font-semibold'>{name}</p>
                            <p className='text-[#706F6F] text-[14px] font-normal'>{published_date}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 text-xl'>
                        <span className='w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50 cursor-pointer text-gray-600'><IoShareSocial></IoShareSocial></span>
                        <span className='w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50 cursor-pointer text-gray-600'><IoBookmarkOutline></IoBookmarkOutline></span>
                    </div>
                </div>
                <div className='pt-5 px-3 space-y-4'>
                    <p className='text-xl font-bold text-[#403F3F]'>{title}</p>
                    <div className='pb-3'>
                        <img src={image_url} className='w-full rounded' alt="" />
                    </div>
                    <p className='text-[#706F6F] text-base font-normal'>{ setCharecter(details, 250) }<Link to={`/news/${_id}`} className='text-[#FF8C47]'>Read More</Link> </p>
                    <div className='border-t border-gray-200 flex items-center justify-between text-gray-600'>
                        <div>
                            <ul className='flex items-center gap-1 '>
                            <Rating
                                initialRating={rating.number}
                                emptySymbol={<IoStarOutline className='text-[#FF8C47] text-lg'></IoStarOutline>}
                                fullSymbol={<IoStar className='text-[#FF8C47] text-lg'></IoStar>}
                                readonly
                            />
                                <li className='ml-2 text-base font-medium'>{rating.number}</li>
                            </ul>
                        </div>
                        <div className='flex items-center justify-end gap-2 py-4 '>
                            <span className='text-xl text-gray-600'><IoEyeOutline></IoEyeOutline></span>
                            {total_view}
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

MainArticle.propTypes = {
    news: PropTypes.object.isRequired
}

export default MainArticle;