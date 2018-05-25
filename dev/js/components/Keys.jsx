import React, {Component} from 'react';
function Keys(props){
    
    return(
        <div 
            id={props.kvalue}
            className={props.classkey}
            data-key={props.kvalue}>
            {props.value}
        </div> 
    );
   
   
}
export default Keys;