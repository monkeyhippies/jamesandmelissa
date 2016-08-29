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
</header>
        <div id="main">
            <div id="featured-content">
                <div className="featured-post" id="featured-post-1" style={{opacity: 1, visibility: "visible"}}>
                    <a href="https://everafterdemo.wordpress.com/2012/01/11/honeymoon-in-venice/" title="Permalink to Honeymoon in Venice" rel="bookmark">
                        <img width="850" height="400" src={"https://everafterdemo.files.wordpress.com/2012/01/wedding-venice.jpg?w=850&amp;h=400&amp;crop=1"} className="attachment-large-feature size-large-feature wp-post-image" alt="wedding-venice" scale="0"/>
                    </a>
                    <div className="feature-content">
                        <h1 className="feature-title">
                            <a href="https://everafterdemo.wordpress.com/2012/01/11/honeymoon-in-venice/" rel="bookmark">Honeymoon in Venice</a>
                        </h1>
                    </div>
                </div>
                <div className="featured-post" id="featured-post-2" style={{opacity: 0, visibility: "hidden"}}>
                    <a href="https://everafterdemo.wordpress.com/2012/01/11/a-single-white-rose/" title="Permalink to A Single White Rose" rel="bookmark">
                        <img width="850" height="400" src={"https://everafterdemo.files.wordpress.com/2012/01/wedding-single-white-rose.jpg?w=850&amp;h=400&amp;crop=1"} className="attachment-large-feature size-large-feature wp-post-image" alt="wedding-single-white-rose" scale="0"/>
                    </a>
                    <div className="feature-content">
                        <h1 className="feature-title">
                            <a href="https://everafterdemo.wordpress.com/2012/01/11/a-single-white-rose/" rel="bookmark">A Single White Rose</a>
                        </h1>
                    </div>
                </div>
                <div className="featured-post" id="featured-post-3" style={{opacity: 0, visibility: "hidden"}}>
                    <a href="https://everafterdemo.wordpress.com/2012/01/10/dress-shopping/" title="Permalink to Dress Shopping" rel="bookmark">
                        <img width="850" height="400" src={"https://everafterdemo.files.wordpress.com/2012/01/wedding-dress-shopping.jpg?w=850&amp;h=400&amp;crop=1"} className="attachment-large-feature size-large-feature wp-post-image" alt="Dress Shopping" scale="0"/>
                    </a>
                    <div className="feature-content">
                        <h1 className="feature-title">
                            <a href="https://everafterdemo.wordpress.com/2012/01/10/dress-shopping/" rel="bookmark">Dress Shopping</a>
                        </h1>
                    </div>
                </div>
            </div>
            <nav id="feature-slider">
                <ul>
                    <li>
                        <a href="#featured-post-1" className="">Honeymoon in Venice</a>
                    </li>
                    <li>
                        <a href="#featured-post-2" className="">A Single White Rose</a>
                    </li>
                    <li>
                        <a href="#featured-post-3" className="active">Dress Shopping</a>
                    </li>
                </ul>
            </nav>

            <div role="main" className="post-104 post type-post status-publish format-standard sticky hentry category-books category-writing tag-announcement tag-panache">
                    <main>
                    {this.props.children}
                    </main>
           </div>
                <div id="latest-message" className="format-quote">
                    <div className="avatar">
                        <img alt="" src="https://1.gravatar.com/avatar/4fdb3b572ac7dd8d7a58ba70317efa14?s=54&amp;d=identicon&amp;r=G" className="avatar avatar-54" height="54" width="54" originals="54" scale="2"/>
                    </div>
                    <div className="message-content">
                        <blockquote>
                            <p>A successful marriage requires falling in love many times, always with the same person.<br/>
                                <cite>— Mignon McLaughlin</cite>
                            </p>
                        </blockquote>
                    </div>
                </div>
        </div>
    </div>
      )
}
}

App.propTypes = {
}
