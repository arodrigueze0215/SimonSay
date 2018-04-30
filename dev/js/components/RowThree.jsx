import React, {Component} from 'react';

class RowThree extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="row last">
                <div className="key" data-key="90">z</div>
                <div className="key" data-key="88">x</div>
                <div className="key" data-key="67">c</div>
                <div className="key" data-key="86">v</div>
                <div className="key" data-key="66">b</div>
                <div className="key" data-key="78">n</div>
                <div className="key" data-key="77">m</div>
            </div>
        );
    }
}
export default RowThree;

