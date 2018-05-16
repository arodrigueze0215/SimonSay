import React, {Component} from 'react';
import Keys from './Keys.jsx';

class RowOne extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const listKey = this.props.keys.map((key) =>
            <Keys 
                {...this.props}
                key={key.key}
                kvalue={key.key}
                value={key.value}
            />
        );
        return(
            <div className="row">
                {listKey}
            </div>
        );
    }
}
export default RowOne;

