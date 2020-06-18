import React from 'react';

import {
    Feed,
} from 'semantic-ui-react';


import DataValueLinks from '../reusables/DataValueLinks';

class DataValueLinksContainer extends React.Component {
    
    render() {
        const { data } = this.props;
        return (
            <Feed>
                {data.map(dataElement => ( <DataValueLinks icon = {dataElement.icon} value = {dataElement.value} link = {dataElement.link} /> ))}
            </Feed>
        )
    }
}


export default DataValueLinksContainer;