import React, {Component} from 'react';
class Keys extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return(
            <div 
            id={this.props.kvalue}
            className={this.props.classkey} 
            data-key={this.props.kvalue}>
            {this.props.value}
        </div> 
        );
    }
}
export default Keys;