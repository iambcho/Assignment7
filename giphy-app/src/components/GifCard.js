import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class GifCard extends Component {
    constructor(props) {
	super(props);
    }
    
    render() {
        return (
		<div>
		<img src={this.props.url} />
		</div>
		);
    }
}

GifCard.propTypes = {
    url: PropTypes.string,
}


