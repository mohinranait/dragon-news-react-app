
import PropTypes from "prop-types"
import SmallArticle from './SmallArticle';
import { useEffect, useState } from "react";

const RandomPost = ({news,categoris}) => {
    const [minLimit, setMinLimit] = useState(1)

    useEffect(() => {
        const maxNumber = (news.length - 5) || 6;
        const minNumber = parseInt(Math.random() * 1 * maxNumber );
        setMinLimit(minNumber)
    },[news.length])

    return (
        <>
            <div>
                {
                    news.slice(minLimit, (minLimit+5)).map(item => <SmallArticle key={item._id} news={item} categoris={categoris}></SmallArticle> )
                }
            </div>   
        </>
    );
};

RandomPost.propTypes = {
    news : PropTypes.array.isRequired,
    categoris : PropTypes.array.isRequired,
}

export default RandomPost;