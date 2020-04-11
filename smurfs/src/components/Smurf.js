import React from 'react';
import styled from 'styled-components';

const Smurf = ({list}) => {
 console.log('list', list)
    return(
        <div>
            <h2>{list.name}</h2>
            <p>{list.age}</p>
            <p>{list.height}</p>
        </div>
    )
}

export default Smurf