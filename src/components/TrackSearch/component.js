 import React, { Component } from 'react';
 import PropTypes from 'prop-types';
 export default class TrackSearch extends Component {
     constructor(props) {
         super(props);
         this.state = {
             searchTerm: ''
         }
         this.handleTextChange = this.handleTextChange.bind(this);
         this.handleSearch = this.handleSearch.bind(this);
     }

     handleTextChange(e) {
         this.setState({
            searchTerm: e.target.value
         });
     }

     handleSearch() {
         this.props.searchSongs(this.state.searchTerm);
     }

     render() {
         return (
             <div className = 'track-search-container'>
                 <form onSubmit = {this.searchSongs}>
                     <input type='text' placeholder = 'Searching' onChange={this.handleTextChange} />
                     <button onClick={ this.searchSongs }>
                        <i className="fa fa-search search" aria-hidden='true'/>
                     </button>
                 </form>
             </div>
         );
     }
 }