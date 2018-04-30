import React, {Component} from 'react';
import {render} from 'react-dom';
import KeyBoard from './KeyBoard.jsx'

const target = document.getElementById('reactContainer');

if (target!==null) {
    render(
       <KeyBoard/>,
        target
    );    
}
