import React from 'react';

function DisplayLevel(props) {
    return(
        <div className="display__level">
            <p>Nivel {props.displaylevel}</p>
        </div>
    )
}

export default DisplayLevel;