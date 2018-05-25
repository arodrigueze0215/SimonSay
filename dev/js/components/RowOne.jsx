import React, {Component} from 'react';
import Keys from './Keys.jsx';

class RowOne extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const listKey = this.props.keys.map((key) =>{
            if (this.props.keyid == key.key && this.props.fail) {
               return <Keys 
                            key={key.key}
                            kvalue={key.key}
                            value={key.value}
                            classkey = {this.props.classkeyfail}
                        />
                
            } else if(this.props.keyid == key.key && this.props.success) {
                return <Keys 
                key={key.key}
                kvalue={key.key}
                value={key.value}
                classkey = {this.props.classkeyactive}
            />
            } else {
                return <Keys 
                            classkey = {this.props.classkey}
                            key={key.key}
                            kvalue={key.key}
                            value={key.value}
                        />
            }

        }
        );
        return(
            <div className="row">
                {listKey}
            </div>
        );
    }
}
export default RowOne;

