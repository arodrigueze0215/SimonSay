import React, {Component} from 'react';
import {render} from 'react-dom';
import Row from './Row.jsx'

const target = document.getElementById('reactContainer');

if (target!==null) {
    render(
       <Row/>,
        target
    );    
}
