import React,{Fragment} from 'react';
import spinner from './Spinner-1s-200px.gif';

function Spinner() {
    return (
        <Fragment>
            <img 
                src={spinner}
                style={{width:'200px',margin:'auto',display:'block'}}
                alt="Loading..."
            />
        </Fragment>
    )
}

export default Spinner;
