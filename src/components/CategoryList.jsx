
import { NavLink } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';

const CategoryList = () => {
    const {data:categoris} = useFetch("/categories.json")

    return (
        <>
            <h3 className='text-xl text-[#403F3F] mb-3 font-semibold'>Categoris</h3>
            <div className='mb-7'>
                <div className=' py-4 mb-4 rounded-md bg-[#E7E7E7]'>
                    <span className='text-xl pl-6 font-semibold text-[#403F3F] '> National News</span>
                </div> 
                <ul className='space-y-3'>
                    {
                        categoris?.map(category => (
                            <li key={category.id} className='ml-6'><NavLink to={`/category/${category.id}`} className='text-[#9F9F9F] font-medium text-xl' >{category.name}</NavLink></li>
                        ) )
                    }
                    
                </ul>   
            </div>
        </>
    );
};

export default CategoryList;