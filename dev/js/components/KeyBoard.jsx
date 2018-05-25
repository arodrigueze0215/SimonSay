import React , {Component} from 'react';

class Keyboard extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="keyboard">
                {this.props.children}
            </div>
        );
    }

}
export default Keyboard;