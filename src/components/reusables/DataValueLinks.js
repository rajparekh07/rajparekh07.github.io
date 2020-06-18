import React from 'react';

import {
    Feed,
    Icon
} from 'semantic-ui-react';

import GlobalStyles from '../../styles/global';

class DataValueLinks extends React.Component {
    
    render() {
        return (
            <Feed.Event>
                <Feed.Label>
                    <Icon name={this.props.icon} style={GlobalStyles.whiteText}></Icon>
                </Feed.Label>
                <Feed.Content style={GlobalStyles.whiteText} > 
                    <Feed.Summary style={GlobalStyles.whiteText} as="a" target="_blank" href={this.props.link}>
                        {this.props.value}
                    </Feed.Summary> 
                </Feed.Content>
                
            </Feed.Event>
        )
    }
}


export default DataValueLinks;