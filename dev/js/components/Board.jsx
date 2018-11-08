import React, {Component} from 'react';
import Keyboard from './KeyBoard.jsx';
import RowOne from './RowOne.jsx';
import RowTwo from './RowTwo.jsx';
import RowThree from './RowThree.jsx';
import DisplayLevel from './DisplayLevels.jsx';
import DisplayResult from './DisplayResult.jsx';

class Board extends Component {
    constructor(props) {
        super(props);
        this.levels = 2;
        this.state = {
            classkey:'key',
            classkeyfail:'key active fail',
            classkeyactive:'key active',
            success: false,
            fail: false,
            tryAgain: false,
            keyid: 0,
            displaylevel: '0',
            displayresult: '',
            displayOk: false
        };
        this.arrTotal = new Array();
        this.arrOne = new Array();
        this.arrTwo = new Array();
        this.arrThree = new Array();
        this.initRowOne();
        this.initRowTwo();
        this.initRowThree();
        this.tryAgainEvent = this.tryAgainEvent.bind(this)

    }
    componentDidMount(){
        //nextLevel(0);
        this.kboard = generateKeyboard(this.levels);
        this.nextlevel(0);
        //this.activate(65, {fail:true})
       
    }

    render() {
        return(
            <div className="board">
                <DisplayLevel {...this.state}/>
                <Keyboard>
                    <RowOne  {...this.state} keys={this.arrOne}/>
                    <RowTwo {...this.state} keys={this.arrTwo}/>
                    <RowThree {...this.state} keys={this.arrThree}/>
                </Keyboard>
                <DisplayResult {...this.state} onClick={this.tryAgainEvent}/>

            </div>
        );
    }

    tryAgainEvent = () =>{
        console.log('again')
        this.kboard = generateKeyboard(this.levels);
        this.nextlevel(0);

    }

    initRowOne() {
        this.arrOne.push(this.nobj('81', 'q'));
        this.arrOne.push(this.nobj('87', 'w'));
        this.arrOne.push(this.nobj('69', 'e'));
        this.arrOne.push(this.nobj('82', 'r'));
        this.arrOne.push(this.nobj('84', 't'));
        this.arrOne.push(this.nobj('89', 'y'));
        this.arrOne.push(this.nobj('85', 'u'));
        this.arrOne.push(this.nobj('73', 'i'));
        this.arrOne.push(this.nobj('79', 'o'));
        this.arrOne.push(this.nobj('80', 'p'));
     }
     initRowTwo() {     
        this.arrTwo.push(this.nobj('65', 'a'));
        this.arrTwo.push(this.nobj('83', 's'));
        this.arrTwo.push(this.nobj('68', 'd'));
        this.arrTwo.push(this.nobj('70', 'f'));
        this.arrTwo.push(this.nobj('71', 'g'));
        this.arrTwo.push(this.nobj('72', 'h'));
        this.arrTwo.push(this.nobj('74', 'j'));
        this.arrTwo.push(this.nobj('75', 'k'));
        this.arrTwo.push(this.nobj('76', 'l'));
     }
     initRowThree() {
        this.arrThree.push(this.nobj('90', 'z'));
        this.arrThree.push(this.nobj('88', 'x'));
        this.arrThree.push(this.nobj('67', 'c'));
        this.arrThree.push(this.nobj('86', 'v'));
        this.arrThree.push(this.nobj('66', 'b'));
        this.arrThree.push(this.nobj('78', 'n'));
        this.arrThree.push(this.nobj('77', 'm'));
     }
     nobj(key, value) {
         let obj = {
             key,
             value
         }
         return  obj;
 
     }
     activate(keyCode, opts = {}) {
         //console.log("keyCode: ", keyCode);
         //console.log("opts: ", opts);
         this.setState({
             keyid: keyCode,
             success: true
         });    
         if (opts.success) { 
             this.setState({
                 keyid: keyCode,
                 success: true
             });            
         } else if(opts.fail){
             this.setState({
                 keyid: keyCode,
                 fail: true
             });
         }
         setTimeout(() => {
             this.deactivate();
         }, 500);
 
     }
     deactivate() {
         this.setState({
             keyid: 0,
             fail: false,
             success: false,
         });
     }
     nextlevel(currentLevel) {
         if (currentLevel==this.levels) {
                this.setState({
                    displayOk: true,
                    displayresult: 'Muy bien..!! Eres un excelente ganador.',
                    tryAgain: true
                });
                console.log('you win')
                return;
             //show the message if you win
         }
         this.setState({
             displaylevel: currentLevel.toString()
         });
         for (let i = 0; i <= currentLevel; i++) {
             
             setTimeout(() => {this.activate(this.kboard[i])}, 1000*(i+1)+1000);
         }
         let i=0;
         let currentKey = this.kboard[i];
          let _this = this;
         window.addEventListener('keydown', onkeydown);
         
         function onkeydown(ev) {
             if (ev.keyCode==currentKey) {
                 _this.activate(currentKey, {succes:true});
                 i++;
                 if (i>currentLevel) {
                     window.removeEventListener('keydown', onkeydown);
                     setTimeout(()=>_this.nextlevel(i),1500);
                 }
                 currentKey = _this.kboard[i];
             } else {
                 _this.activate(ev.keyCode, {fail:true});
                 window.removeEventListener('keydown', onkeydown);
                 _this.setState({
                    displayOk: false,
                    displayresult: 'Ohhh.. que pena!! Perdiste.',
                    tryAgain: true
                });
             }
         }
     }
 }
 let randomKeys = () =>{
     const min = 65
     const max = 90
     return Math.round(Math.random() * (max - min) + min)
 }
 let generateKeyboard = (levels) => new Array(levels).fill(0).map(randomKeys);


export default Board;