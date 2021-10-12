import React from 'react';
import LoaderImg from '../../../img/1487.gif'
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
export type LoaderType = {

}

export const Loader = (props:LoaderType) => {
    return  <div style={{position: 'relative', left: '50%'}} ><CircularProgress/></div>
};

export default Loader;