import React , {Component} from 'react';
import RowOne from './RowOne.jsx';
import RowTwo from './RowTwo.jsx';
import RowThree from './RowThree.jsx';
import nextLevel from '../simon.js';

class Keyboard extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        nextLevel(0);
    }
    render() {
        return(
            <div className="keyboard">
                <RowOne/>
                <RowTwo/>
                <RowThree/>
            </div>
        );
    }
}
export default Keyboard;