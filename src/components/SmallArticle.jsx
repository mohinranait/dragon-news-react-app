
import PropTypes from "prop-types"
import { IoCalendarClearOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import setCharecter from "../utils/limitCharecter";

const SmallArticle = ({news,categoris}) => {
    const {title,image_url,category_id,author,_id} = news || {};
    const {published_date} = author;
    const dataForamte  = published_date?.split(' ')[0]

    const findCategory = categoris?.find(category => category.id == category_id )



    return (
        <>
            <article  className='mb-5'>
                <div className='mb-3'>
                    <img src={image_url} className='w-full' alt={title} />
                </div>
                <Link to={`/news/${_id}`}>
                    <p className='text-[#403F3F] mb-1 text-xl font-semibold'>{ setCharecter(title, 50)}</p>
                </Link>
                <div className='flex items-center gap-6'>
                    <Link to={`/category/${findCategory?.id}`} className='text-gray-700 font-medium text-base'>{findCategory?.name}</Link>
                    <div className='flex items-center gap-2'>  
                        <IoCalendarClearOutline className='text-gray-600'></IoCalendarClearOutline>
                        <span className='text-base text-[#9F9F9F] font-medium'>{dataForamte}</span>
                    </div>
                </div>
            </article>
        </>
    );
};

SmallArticle.propTypes = {
    news: PropTypes.object.isRequired,
    categoris : PropTypes.array
}

export default SmallArticle;