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
            { props.tryAgain &&
                <div className="display__result">
                    <h2 style={props.displayOk?styleOk:styleFail}>{props.displayresult}</h2>            
                        <button className="btn__tryAgain" onClick={props.onClick}>Volver a jugar</button>
                </div>
            }
        </div>

    );
}

export default DisplayResult;