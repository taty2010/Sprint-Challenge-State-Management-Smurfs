import React from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

const SmurfList = ({list}) => {

    const SmurfCard = styled.div `
        width: 30vw;
        border: 1px solid blue;
    `;

    return(
        <SmurfCard>
            <Smurf list={list}/>
        </SmurfCard>
    )
}

export default SmurfList