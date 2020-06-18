import React from 'react';

import {
    Divider,
    Icon,
    Header
} from 'semantic-ui-react'

import GlobalStyles from '../../styles/global'

class SectionDividers extends React.Component {
    render() {
        return (
            <Divider horizontal>
                <Header as='h4' style={GlobalStyles.whiteText}>
                    <Icon name={this.props.icon}  />
                    {this.props.title}
                </Header>
            </Divider>
        )
    }
}

export default SectionDividers;