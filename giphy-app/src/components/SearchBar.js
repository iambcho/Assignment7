import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import GifCard from './GifCard';

export default class SearchBar extends Component {
    constructor(props) {
	super(props);
	
	this.state = {
	    searchInput: this.props.searchInput,
	    gifs: this.props.gifs,
	    state: "trending"
	}   
    }

    setSearchInput = (e) => {

	this.setState({searchInput: e.target.value});
    };

    search = (e) => {
	axios.get("http://api.giphy.com/v1/gifs/search?q="+(this.state.searchInput)+"&api_key=tgqggOWqq0zq6uSC0AwgK5fsUMjchVwr")
	.then((response) => {
		this.setState({gifs: response.data["data"], state:"searching"});
	    })
        .then((error) => {
		console.log(error);
	    });
    };
	
    render() {	
	if (this.state.state === "trending") {
	    axios.get("http://api.giphy.com/v1/gifs/trending?api_key=tgqggOWqq0zq6uSC0AwgK5fsUMjchVwr")
		.then((response) => {
			this.setState({gifs: response.data["data"], state:"searching"});
		    })
		.then((error) => {
			console.log(error);
		    });
	    var parsed = this.state.gifs.map((element) => <GifCard url={element.images.fixed_width.url} key={element.id}/>);
	}
	else {
	    var parsed = this.state.gifs.map((element) => <GifCard url={element.images.fixed_width.url} key={element.id}/>);
	}
		    
	return (
		<div>
		<h1>Search GIPHY</h1>
		<input id="inputSearch" onChange={this.setSearchInput}></input>
		<button onClick={this.search}>Search</button>
		<div> {parsed} </div>
		</div>
		);

    }
}

/*
<img src="https:https://media2.giphy.com/media/WXB88TeARFVvi/200w.gif?cid=b7066cddb033abba4cbb12ed28fe012a9fc8ee921a9cf79d&rid=200w.gif" alt="test"/>
*/

SearchBar.propTypes = {
    searchInput: PropTypes.string,
    gifs: PropTypes.array
};

SearchBar.defaultProps = {
    gifs: []
};
    