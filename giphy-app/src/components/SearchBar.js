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
	    state: "trending",
	    hideY: false,
	    hideG: false,
	    hidePG: false,
	    hidePG13: false,
	    hideR: false
	}   
    }

    hideYChangeHandler = (e) => {
	this.setState({hideY: !this.state.hideY});
    };
    hideGChangeHandler = (e) => {
	this.setState({hideG: !this.state.hideG});
    };
    hidePGChangeHandler = (e) => {
	this.setState({hidePG: !this.state.hidePG});
    };
    hidePG13ChangeHandler = (e) => {
	this.setState({hidePG13: !this.state.hidePG13});
    };
    hideRChangeHandler = (e) => {
	this.setState({hideR: !this.state.hideR});
    };

    setSearchInput = (e) => {
	this.setState({searchInput: e.target.value});
    };
    //pg, pg-13, g, r
    search = (e) => {
	axios.get("http://api.giphy.com/v1/gifs/search?q="+(this.state.searchInput)+"&api_key=tgqggOWqq0zq6uSC0AwgK5fsUMjchVwr")
	.then((response) => {
		this.setState({gifs: response.data["data"], state:"searching"});
		this.state.gifs.forEach((element) => {
			console.log(element.rating)
		    }
		    );
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
	 
	}	

	var parsed = this.state.gifs.map((element) => {
		if(element.rating === "y" && this.state.hideY == true) {
		}
		else if(element.rating === "g" && this.state.hideG === true) {
		}
		else if(element.rating === "pg" && this.state.hidePG === true) {
		}
		else if(element.rating === "pg-13" && this.state.hidePG13 === true) {
		}
		else if(element.rating === "r" && this.state.hideR === true) {
		}
		else{
		    return <GifCard url={element.images.fixed_width.url} key={element.id}/>;
		}
	    });
    
	return (
		<div>
		<h1>Search GIPHY</h1>
		<h2>Hide the following:</h2>
		Y<input type="checkbox" onClick={this.hideYChangeHandler}/>
		G<input type="checkbox" onClick={this.hideGChangeHandler}/>
		PG<input type="checkbox" onClick={this.hidePGChangeHandler}/>
		PG13<input type="checkbox" onClick={this.hidePG13ChangeHandler}/>
		R<input type="checkbox" onClick={this.hideRChangeHandler}/> <br/>
		<input id="inputSearch" onChange={this.setSearchInput}></input>
		<button onClick={this.search}>Search</button>
		<div> {parsed} </div>
		</div>
		);
    }
}

SearchBar.propTypes = {
    searchInput: PropTypes.string,
    gifs: PropTypes.array
};

SearchBar.defaultProps = {
    gifs: []
};
    