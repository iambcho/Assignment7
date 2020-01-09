import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './App.css';

import SearchBar from './components/SearchBar';
import GifCard from './components/GifCard';


// class SearchBar extends Component {
//     constructor(props) {
// 	    super(props);

//       this.state = {
//           data: this.props.data
//       }
	
// 	    this.search = this.search.bind(this);
//     }

//     search() {
//       axios.get("http://ctp-zip-api.herokuapp.com/city/" + (document.getElementById("inputCity").value).toUpperCase())
//           .then((response) => {
//             console.log(response);
//             console.log(typeof response);
//             console.log(response.data);
//             console.log(response.data[0]);
            
//             this.setState({ data: response.data });
            

//         })
//           .then((error) => {
//             console.log(error);
//         })
//     }

//     render() {

// 	return (
    
// 		<div>
// 		City Searcher <br/>
// 		<input type="text" id="inputCity"/> <br/>
// 		<button onMouseDown={this.search}> Search </button>
// 		{/* <div> {this.state.data} </div> */}
//     {this.state.data.map(zip => <div key={zip}><h3>{zip}</h3></div>)}
// 		</div>
// 		);
		
//     }
// }


function App() {
    return ( 
	    <div class="App-header">
	      <SearchBar />

        <GifCard />
	     </div>
	     );
}

export default App;

 