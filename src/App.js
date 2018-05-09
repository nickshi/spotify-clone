import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { fetchUser } from './actions/userActions';
import { setToken } from './actions/tokenActions';

import SideMenu from './components/SideMenu';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    if(!hashParams.access_token) {
      window.location.href = 'https://accounts.spotify.com/authorize?client_id=1bd7ad9e53b14adcbe1eae7844e70613&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3002/callback';
    } else {
      this.props.setToken(hashParams.access_token);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
        this.props.fetchUser(nextProps.token);
    }
  }

  render() {
    return (
      <div className='app-container'>
        <div className='main-section'>
          <Header/>
          <div style={{border:'1px solid green', height: 900}}></div>
        </div>
        <div className='left-side-section'>
          <SideMenu/>
        </div>
        
      </div>
    );
  }
}

App.propTypes = {
  token: PropTypes.string,
  fetchUser: PropTypes.func,
  setToken: PropTypes.func,
}

const mapStateToProps = (state) => {
  
  return {
    token: state.tokenReducer.token,
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchUser,
    setToken,
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
