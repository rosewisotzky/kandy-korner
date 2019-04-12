import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KandyKorner from "./components/KandyKorner"
import { BrowserRouter as Router } from "react-router-dom"

// Over here is our ONE line of code that is attaching our big Object KandyKorner to the DOM! 
ReactDOM.render(<Router><KandyKorner /></Router>, document.getElementById('root'));
