import React from 'react';

function DisplayLevel(props) {
    return(
        <div className="display__level">
            <h2>Nivel {props.displaylevel}</h2>
        </div>
    )
}

export default DisplayLevel;