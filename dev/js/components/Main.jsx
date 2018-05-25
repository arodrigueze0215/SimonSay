import React, {Component} from 'react';
import {render} from 'react-dom';
import Board from './Board.jsx'

const target = document.getElementById('reactContainer');

if (target!==null) {
    render(
       <Board/>,
        target
    );    
}
