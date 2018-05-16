import React, {Component} from 'react';
import Keys from './Keys.jsx';
class RowThree extends Component{
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
            <div className="row last">
                {listKey}
            </div>
        );
    }
}
export default RowThree;

