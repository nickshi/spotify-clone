import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserPlaylists.css';

export default class UserPlaylists extends Component {
    constructor(props) {
        super(props);

        //this.getPlaylist = this.getPlaylist.bind(this);
        this.renderPlaylists = this.renderPlaylists.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.userId !== '' && nextProps.token !== '' && this.props.playlists.length == 0) {
            this.props.fetchPlaylists(nextProps.userId, nextProps.token);
        }
    }

    getPlaylist(playlist) {
        const { fetchPlaylistSongs, updateHeaderTitle, token } = this.props;
        fetchPlaylistSongs(playlist.owner.id, playlist.id, token);
        updateHeaderTitle(playlist.name);
    }

    renderPlaylists() {
        
        return this.props.playlists.map(playlist => (
            <li  onClick = { this.getPlaylist.bind(this, playlist)}
                 className = {this.props.title == playlist.name ? 'active side-menu-item' : 'side-menu-item'}
                 key={ playlist.id }
                 >
                {playlist.name}
            </li>)
        );
    }

    render() {
        return (
            <div className='user-playlist-container'>
                <h3 className='user-playlist-header'>Playlists</h3>
                {
                    this.renderPlaylists()
                }
            </div>
        );
    }
}

UserPlaylists.propTypes = {
    userId: PropTypes.string,
    token: PropTypes.string,
    title: PropTypes.string,
    playlists: PropTypes.PropTypes.array,
    fetchPlaylists: PropTypes.func,
    fetchPlaylistSongs: PropTypes.func,
    updateHeaderTitle: PropTypes.func,
}