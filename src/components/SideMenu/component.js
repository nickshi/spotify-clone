import React from 'react';
import PropTypes from 'prop-types';
import './SideMenu.css';


export default class SideMenu extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleBrowseClick = this.handleBrowseClick.bind(this);
        this.renderSideMenu = this.renderSideMenu.bind(this);
    }

    handleClick(name) {
        const {updateHeaderTitle, updateViewType} = this.props;
        updateHeaderTitle(name);
        updateViewType(name);
    }

    handleBrowseClick() {
        const {updateHeaderTitle, updateViewType, fetchFeatured} = this.props;
        updateHeaderTitle('Browse');
		updateViewType('Featured');
		fetchFeatured(this.props.token);
    }

    renderSideMenu() {
        const {items, artistIds, token, fetchRecentlyPlayed, fetchSongs, fetchAlbums, fetchArtists} = this.props;
        let title = 'Songs';
        const menu = [
            {
                name: 'Recently Played',
                action: fetchRecentlyPlayed,
            },
            {
                name: 'Songs',
                action: fetchSongs,
            },
            {
                name: 'Albums',
                action: fetchAlbums,
            },
            {
                name: 'Artists',
                action: fetchArtists,
            },
            
        ];

        return menu.map((item) => {
            return (
                <li key = { item.name }
                    className = {title === item.name ? 'active side-menu-item' : 'side-menu-item'}
                    onClick = {() => {
                        items.getArtists ? item.action(token, artistIds) : item.action(token);
                        this.handleClick(item.name);
                    }}
                >
                    {item.name}
                </li>
                );
        })
    }

    render() {
        const {title} = this.props;
        return (
            <ul className = 'side-menu-container'>
                <li onClick={ this.handleBrowseClick } className = {title === 'Browse' ? 'active side-menu-item': 'side-menu-item'}>
                    Browse
                </li>
                <li className='side-menu-item radio'>Radio</li>
                <h3 className='user-library-header'>Your Library</h3>
                {
                    this.renderSideMenu()
                }
            </ul>
        );

    }
}

SideMenu.propTypes = {

}