import React , {Component} from 'react';
import RowOne from './RowOne.jsx';
import RowTwo from './RowTwo.jsx';
import RowThree from './RowThree.jsx';
import nextLevel from '../simon.js';

class Keyboard extends Component{
    constructor(props) {
        super(props);
        this.arrTotal = new Array();
    }
    componentDidMount(){
        nextLevel(0);
        console.log(this.initRowOne());
        console.log(this.initRowTwo());
        console.log(this.initRowThree());
        console.log(this.arrTotal)
    }
    render() {
        return(
            <div className="keyboard">
                <RowOne keys={this.initRowOne()}/>
                <RowTwo/>
                <RowThree/>
            </div>
        );
    }

    initRowOne() {
       let arrOne = new Array();
       this.arrTotal.push(this.nobj('81', 'q'));
       this.arrTotal.push(this.nobj('87', 'w'));
       this.arrTotal.push(this.nobj('69', 'e'));
       this.arrTotal.push(this.nobj('82', 'r'));
       this.arrTotal.push(this.nobj('84', 't'));
       this.arrTotal.push(this.nobj('89', 'y'));
       this.arrTotal.push(this.nobj('85', 'u'));
       this.arrTotal.push(this.nobj('73', 'i'));
       this.arrTotal.push(this.nobj('79', 'o'));
       this.arrTotal.push(this.nobj('80', 'p'));
       arrOne.push(this.nobj('81', 'q'));
       arrOne.push(this.nobj('87', 'w'));
       arrOne.push(this.nobj('69', 'e'));
       arrOne.push(this.nobj('82', 'r'));
       arrOne.push(this.nobj('84', 't'));
       arrOne.push(this.nobj('89', 'y'));
       arrOne.push(this.nobj('85', 'u'));
       arrOne.push(this.nobj('73', 'i'));
       arrOne.push(this.nobj('79', 'o'));
       arrOne.push(this.nobj('80', 'p'));
       return arrOne;
    }
    initRowTwo() {
        
        let arrTwo = new Array();
       this.arrTotal.push(this.nobj('65', 'a'));
       this.arrTotal.push(this.nobj('83', 's'));
       this.arrTotal.push(this.nobj('68', 'd'));
       this.arrTotal.push(this.nobj('70', 'f'));
       this.arrTotal.push(this.nobj('71', 'g'));
       this.arrTotal.push(this.nobj('72', 'h'));
       this.arrTotal.push(this.nobj('74', 'j'));
       this.arrTotal.push(this.nobj('75', 'k'));
       this.arrTotal.push(this.nobj('76', 'l'));
       
       arrTwo.push(this.nobj('65', 'a'));
       arrTwo.push(this.nobj('83', 's'));
       arrTwo.push(this.nobj('68', 'd'));
       arrTwo.push(this.nobj('70', 'f'));
       arrTwo.push(this.nobj('71', 'g'));
       arrTwo.push(this.nobj('72', 'h'));
       arrTwo.push(this.nobj('74', 'j'));
       arrTwo.push(this.nobj('75', 'k'));
       arrTwo.push(this.nobj('76', 'l'));
       return arrTwo;
    }
    initRowThree() {
        let arrThree = new Array();
       this.arrTotal.push(this.nobj('90', 'z'));
       this.arrTotal.push(this.nobj('88', 'x'));
       this.arrTotal.push(this.nobj('67', 'c'));
       this.arrTotal.push(this.nobj('86', 'v'));
       this.arrTotal.push(this.nobj('66', 'b'));
       this.arrTotal.push(this.nobj('78', 'n'));
       this.arrTotal.push(this.nobj('77', 'm'));

       arrThree.push(this.nobj('90', 'z'));
       arrThree.push(this.nobj('88', 'x'));
       arrThree.push(this.nobj('67', 'c'));
       arrThree.push(this.nobj('86', 'v'));
       arrThree.push(this.nobj('66', 'b'));
       arrThree.push(this.nobj('78', 'n'));
       arrThree.push(this.nobj('77', 'm'));
       return arrThree;
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