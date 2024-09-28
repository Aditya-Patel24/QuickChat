import React from 'react';
import Loader from "../assets/loader2.gif"
const Loading = () => {
    return (
     <div className='flex1 flex justify-center items-center w-full h-full mt-20'>
        <img src={Loader} alt="Loading..." className="w-64"/>
     </div>
    );
};

export default Loading;
