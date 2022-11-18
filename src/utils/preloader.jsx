import React from 'react';
import { CircleLoader } from "react-spinners";
import './style.scss'
import usePreloader from './../hook/usePreloader';
const Preloader = () => {
    const { isLoading } = usePreloader()
    return isLoading && (
        <div className='P-isLoading G-flex G-flex-column G-justify-center G-align-center'>
            <CircleLoader size={75} color={'rgb(75, 148, 41)'} loading={isLoading} />
            
        </div>
    );
};

export default Preloader;