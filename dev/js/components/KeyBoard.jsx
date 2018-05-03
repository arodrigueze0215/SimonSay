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
        this.initRowOne();
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

    initRowOne() {
        let arr = new Array();
        arr.push(this.nobj('81', 'q'));
        arr.push(this.nobj('87', 'w'));
        arr.push(this.nobj('69', 'e'));
        arr.push(this.nobj('82', 'r'));
        arr.push(this.nobj('84', 't'));
        arr.push(this.nobj('89', 'y'));
        arr.push(this.nobj('85', 'u'));
        arr.push(this.nobj('73', 'i'));
        arr.push(this.nobj('79', 'o'));
        arr.push(this.nobj('80', 'p'));
        console.log(arr);
    }
    nobj(key, value) {
        let obj = {
            key,
            value
        }
        return  obj;

    }
}
export default Keyboard;