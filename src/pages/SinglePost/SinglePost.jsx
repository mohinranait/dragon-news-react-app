import RightSidebar from '../../components/RightSidebar';
import { useLoaderData, useParams } from 'react-router-dom';

const SinglePost = () => {
    const {id} = useParams();
    const news = useLoaderData();
    const existsNews = news?.find(newsItem => newsItem._id == id  );
    const {title,image_url,author,details,total_view,rating,_id } = existsNews || {};

    return (
        <section>
            <div className="container px-5 lg:px-0">
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-7'>
                    <div className='col-span-3'>
                        <div className='mb-8'>
                            <h3 className='text-xl text-[#403F3F] mb-3 font-semibold'>Dragon News</h3>
                            <div className='p-4 border border-gray-100 rounded'>
                                <div className='mb-4'>
                                    <img src={image_url} alt={title} />
                                </div>
                                <h1 className='text-[#403F3F] font-bold text-[25px]'>{title}</h1>
                                <p className='text-[#706F6F] text-base font-normal'>{details}</p>
                                <div className='mt-4'>
                                    <a href="" className='px-5 inline-block py-2 bg-[#D72050] text-white'>All news in this category</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl text-[#403F3F] mb-3 font-semibold'>Editors Insight</h3>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4' >
                                <div>
                                    <div className='h-[200px] bg-gray-200'></div>
                                </div>
                                <div>
                                    <div className='h-[200px] bg-gray-200'></div>
                                </div>
                                <div>
                                    <div className='h-[200px] bg-gray-200'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <RightSidebar></RightSidebar>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SinglePost;