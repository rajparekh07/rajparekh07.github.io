import React from 'react';

import {
    Container,
    Grid,
} from 'semantic-ui-react'

import GlobalStyles from '../styles/global'

import InfoGrid from './sub_components/InfoGrid';

class MainContainer extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Container style={this.style.container}>
                <Grid columns='equal' stackable divided>
                        <InfoGrid width={5} />
                        <Grid.Column width={11} style={GlobalStyles.white}>
                            RAJ APREKH
                        </Grid.Column>
                </Grid>
            </Container>
        )
    }

    style = {
        container: {
            margin: 25,
            padding: 15,
        },
        
    }
}

export default MainContainer;