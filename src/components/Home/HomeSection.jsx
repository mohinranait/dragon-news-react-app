import PropTypes from "prop-types"
import RightSidebar from '../RightSidebar';
import MainArticle from '../MainArticle';
import CategoryList from '../CategoryList';
import useFetch from '../../Hooks/useFetch';
import RandomPost from "../RandomPost";

const HomeSection = ({news}) => {
    const {data:categoris} = useFetch("/categories.json")
    return (
        <>
            <section>
                <div className="container px-5 lg:px-0">
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                        <div>
                            <div>
                               
                                <CategoryList></CategoryList>
                                <RandomPost news={news} categoris={categoris}></RandomPost>
                                
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div>
                                <h3 className='text-xl text-[#403F3F] mb-3 font-semibold'>Dragon News Home</h3>
                                {
                                    news?.map(newsObj => <MainArticle key={newsObj._id} news={newsObj}></MainArticle> )
                                }
                            </div>
                           
                        </div>
                        <div>
                            <RightSidebar></RightSidebar>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

HomeSection.propTypes = {
    news : PropTypes.array.isRequired
}

export default HomeSection;