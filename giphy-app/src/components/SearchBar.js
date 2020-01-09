import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class SearchBar extends Component {
    constructor(props) {
	    super(props);

      this.state = {
        searchInput: this.props.searchInput,
        gifs: this.props.gifs
      }   
    }
    setSearchInput = (e) => {
      this.setState({searchInput: e.target.value});
    }
    search = (e) => {
      axios.get("http://api.giphy.com/v1/gifs/search?q="+(document.getElementById("inputSearch").value)+"&api_key=tgqggOWqq0zq6uSC0AwgK5fsUMjchVwr")
        .then((response) => {
          console.log("URL of first result in array:", response.data["data"][0]["url"]);
          for(let i = 0; i < response.data.length; i++){
            this.state.gifs.push(response.data["data"][i]["url"]);
          }
          console.log(this.state.gifs);
        })
        .then((error) => {
          console.log(error);
        })
      }

    render() {
        return (
            <div>
                <h1>Search GIPHY</h1>
                <input id="inputSearch" onChange={this.setSearchInput}></input>
                <button onClick={this.search}>Search</button>
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
}
