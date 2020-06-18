import React from 'react';

import {
    Container,
    Grid,
    Header,
    Image
} from 'semantic-ui-react'

import GlobalStyles from '../../styles/global'

import Data from '../../data/profile'
import DataValueLinksContainer from './DataValueLinksContainer';
import SectionDividers from '../reusables/SectionDividers';

class InfoGrid extends React.Component {


    render() {
        return (
            <Grid.Column width={this.props.width} style={GlobalStyles.grey} {...this.props}>
                <Container textAlign='center' >
                    <Grid centered columns={1}>
                        <Grid.Row>
                            <Image src={Data.image} circular size="small" />
                        </Grid.Row>
                    </Grid>

                    <Header size="large" style={GlobalStyles.whiteText}>
                        {Data.firstName} 
                        <span style={GlobalStyles.blueText}> {Data.lastName}</span>
                    </Header>
                
                    <p size="tiny" style={GlobalStyles.whiteText}> {Data.title} </p>

                    <SectionDividers icon='info circle' title='Info' />

                    <Grid.Row style={GlobalStyles.whiteText}>
                        <DataValueLinksContainer data={Data.info} />
                    </Grid.Row>

                    <SectionDividers icon='user circle' title='Contact' />

                    <Grid.Row style={GlobalStyles.whiteText}>
                        <DataValueLinksContainer data={Data.socials} />
                    </Grid.Row>
                </Container>

            </Grid.Column>

        )
    }
}

export default InfoGrid;