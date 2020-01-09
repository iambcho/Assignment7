import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class SearchBar extends Component {
    constructor(props) {
	    super(props);

      this.state = {
        searchInput: this.props.data
      }
	
	   
    }
    setSearchInput = (e) => {
      this.setState({searchInput: e.target.value});
    }
    search() {
      axios.get("http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=tgqggOWqq0zq6uSC0AwgK5fsUMjchVwr" + document.getElementById("inputSearch").value)
        .then((response) => {
          console.log(response);
        })
        .then((error) => {
          console.log(error);
        })
      }

    render() {
        return (
            <div>
                <h1>Search GIPHY</h1>
                <input id="inputSearch" value={this.state.searchInput} onChange={this.setSearchInput}></input>
                <button onClick={this.handleSearchClick}>Search</button>
           </div>
          );
    }
}

SearchBar.propTypes = {
    searchInput: PropTypes.string
};
