import React from 'react';
import LoaderImg from '../../../img/1487.gif'
export type LoaderType = {

}

export const Loader = (props:LoaderType) => {
    return (
        <div>
            <img style={{width:'100px'}} src={LoaderImg} alt="Lodding"/>
        </div>
    );
};

export default Loader;