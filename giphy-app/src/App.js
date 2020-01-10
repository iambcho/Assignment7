import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './App.css';

import SearchBar from './components/SearchBar';
import GifCard from './components/GifCard';

function App() {
    return ( 
	    <div class="App-header">
	    <SearchBar />	    
	    </div>
	     );
}

export default App;

 