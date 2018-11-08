import React from 'react';

function DisplayResult(props) {
    const styleOk = {
        color:'#21a900'
    }
    const styleFail = {
        color:'#bc4646'
    }
    return(
        <div>
            <div className="display__result">
                <h2 style={props.displayOk?styleOk:styleFail}>{props.displayresult}</h2>            
                { props.tryAgain &&
                    <button className="btn__tryAgain" onClick={props.onClick}>Try again</button>
                }
            </div>
        </div>

    );
}

export default DisplayResult;