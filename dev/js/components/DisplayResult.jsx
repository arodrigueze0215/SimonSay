import React from 'react';

function DisplayResult(props) {
    const styleOk = {
        color:'#21a900'
    }
    const styleFail = {
        color:'#bc4646'
    }
    return(
        <div className="display__result">
            <h2 style={props.displayOk?styleOk:styleFail}>{props.displayresult}</h2>
        </div>
    );
}

export default DisplayResult;