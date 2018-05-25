import React from 'react';

function DisplayResult(props) {
    return(
        <div className="display__result">
            <h2>{props.displayresult}</h2>
        </div>
    );
}

export default DisplayResult;