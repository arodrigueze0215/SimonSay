import React, {Component} from 'react';

class RowOne extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="row">
                <div className="key" data-key="81">q</div>
                <div className="key" data-key="87">w</div>
                <div className="key" data-key="69">e</div>
                <div className="key" data-key="82">r</div>
                <div className="key" data-key="84">t</div>
                <div className="key" data-key="89">y</div>
                <div className="key" data-key="85">u</div>
                <div className="key" data-key="73">i</div>
                <div className="key" data-key="79">o</div>
                <div className="key" data-key="80">p</div>
            </div>
        );
    }
}
export default RowOne;

