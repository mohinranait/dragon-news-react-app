import React from 'react';
import Marquee from "react-fast-marquee";


const Markue = () => {
    return (
        <>
           <div>
                <div className="container">
                    <div className='px-3 py-3 bg-gray-100 flex gap-4 '>
                        <div className='bg-[#D72050] px-4 py-2 text-white'>Latest</div>
                        <Marquee>
                            I can be a React component, multiple React components, or just some text.
                        </Marquee>
                    </div>
                </div>
           </div>
        </>
    );
};

export default Markue;