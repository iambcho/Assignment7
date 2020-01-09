import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class SearchBar extends Component {
    constructor(props) {
	    super(props);

      this.state = {
        data: this.props.data
      }
	
	   
    }
    
    render() {
        return (
            <div>
                <h1>Test</h1>
           </div>
          );
    }
}

SearchBar.propTypes = {
    data: PropTypes.array
};

SearchBar.defaultProps = {
    data: []
}