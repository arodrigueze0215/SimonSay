import React, {Component} from 'react';

class RowOne extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="row">
            {this.props.keys.map((key)=>{
                console.log(key.value);
                <div 
                    id={key}
                    className="key" 
                    data-key={key}>
                    {key.value}
                </div>

            })}
            </div>
        );
    }
}
export default RowOne;

