import React from 'react';
import Loader from "../assets/qloader.gif"
const Loading = () => {
    return (
     <div className='flex1 flex justify-center items-center w-full h-full mt-40'>
        <img src={Loader} alt="Loading..." className="w-64 opacity-70 duration-8000"/>
     </div>
    );
};

export default Loading;
