import React from 'react';
import {PropTypes} from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

import InvitationResponseContainer from '../containers/InvitationResponseContainer';
import InviteesContainer from '../containers/InviteesContainer';
import { Link } from 'react-router';

import './../public/css/react-tabs-redux.css';

const styles = {
    tabs: {
        width: '400px',
        display: 'inline-block',
        marginRight: '30px',
        verticalAlign: 'top'
    },
    links: {
        margin: 0,
        padding: 0
    },
    tabLink: {
         height: '30px',
         lineHeight: '30px',
         padding: '0 15px',
         cursor: 'pointer',
         borderBottom: '2px solid transparent',
         display: 'inline-block'
     },
    activeLinkStyle: {
        borderBottom: '2px solid #333'
    },
    visibleTabStyle: {
        display: 'inline-block'
    },
    content: {
        padding: '0 15px'
    }
};

export default class App extends React.Component {

    render() {


      return(
    <div>
<header id="masthead" role="banner">
        <h1 id="site-title"><a href="https://everafterdemo.wordpress.com/" title="James and Melissa" rel="home">James and Melissa</a></h1>
        <div id="description">
            <div id="description-left"></div>
            <div id="description-middle"><h2 id="site-description">We're getting married!</h2></div>
            <div id="description-right"></div>
        </div>

        <nav role="navigation" className="site-navigation main-navigation">
            <h1 className="assistive-text section-heading">Menu</h1>
            <div className="skip-link assistive-text"><a href="#content" title="Skip to content">Skip to content</a></div>

            <div className="menu-primary-navigation-container">
                <ul id="menu-primary-navigation" className="menu">
                    <li id="menu-item-257" className="menu-item menu-item-type-post_type menu-item-object-page">
                        <Link to="/registry">Registry</Link>
                    </li>
                    <li id="menu-item-287" className="menu-item menu-item-type-post_type menu-item-object-page">
                        <Link to="/invitees">Invitees</Link>
                    </li>
                    <li id="menu-item-288" className="menu-item menu-item-type-post_type menu-item-object-page">
                        <Link to="/logistics">Logistics</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <main>
        {this.props.children}
        </main>
    </header>
    </div>
      )
}
}

App.propTypes = {
}
