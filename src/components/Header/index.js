import React, { Component } from 'react';
import UserDetails from '../UserDetails';
import './Header.css';
export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div className='header'>
             <UserDetails/>
           </div>
        );
    }
}