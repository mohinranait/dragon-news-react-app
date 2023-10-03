
import {  useLoaderData, useParams } from 'react-router-dom';
import MainArticle from '../../components/MainArticle';
import CategoryList from '../../components/CategoryList';
import useFetch from '../../Hooks/useFetch';
import RandomPost from '../../components/RandomPost';
import Navbar from '../../components/Navbar/Navbar';

const CategoryWish = () => {
    const {id} = useParams();
    const {data} = useFetch("/categories.json");
    const news = useLoaderData();
    const category = data?.find(category => category.id == id);

    const filterNews = news?.filter( item => item.category_id == id );


    return (
        <>
            <Navbar></Navbar>
             <section>
                <div className="container px-5 lg:px-0">
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                        <div>
                            <div>
                                <CategoryList></CategoryList>
                                <RandomPost news={news} categoris={data}></RandomPost>
                            </div>
                        </div>
                        <div className='lg:col-span-3'>
                            <div>
                                <h3 className='text-xl text-[#403F3F] mb-3 font-semibold'>{category?.name} <span className='text-sm text-gray-600'>({filterNews.length} items)</span></h3>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6'>
                                {
                                    filterNews?.map(newsObj => <MainArticle key={newsObj._id} news={newsObj}></MainArticle> )
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>     
        </>
    );
};

export default CategoryWish;