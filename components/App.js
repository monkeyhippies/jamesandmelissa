import React from 'react';
import {PropTypes} from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

import InvitationResponseContainer from '../containers/InvitationResponseContainer';
import InviteesContainer from '../containers/InviteesContainer';

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
        <Tabs
            name="app"
            className="tabs tabs-1"
            handleSelect={this.props.changeSelectedTab}
            selectedTab={this.props.tabs1}
        >
            <div className="tab-links">
                <TabLink to="registry">Registry</TabLink>
                <TabLink to="invitees">Invitees</TabLink>
                <TabLink to="logistics">Wedding Logistics</TabLink>
            </div>

            <div className="content">
                <TabContent for="registry">
                    <InvitationResponseContainer />
                </TabContent>
                <TabContent for="invitees">
                    <InviteesContainer />
                </TabContent>
                <TabContent for="logistics">
                    <h2>TBD</h2>
                </TabContent>
            </div>
        </Tabs>

    </div>
      )
}
}

App.propTypes = {
}
