import React, {Component} from 'react';

class RowTwo extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="row">
                <div className="key" data-key="65">a</div>
                <div className="key" data-key="83">s</div>
                <div className="key" data-key="68">d</div>
                <div className="key" data-key="70">f</div>
                <div className="key" data-key="71">g</div>
                <div className="key" data-key="72">h</div>
                <div className="key" data-key="74">j</div>
                <div className="key" data-key="75">k</div>
                <div className="key" data-key="76">l</div>
            </div>
        );
    }
}
export default RowTwo;

