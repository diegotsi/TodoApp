import React from 'react';
import styled from 'styled-components';


export default props =>  {
    const Icon = styled.i`
        color: ${props.color ? props.color : '#000'};
        margin-right: 5px;
        font-size:16px;
    `
    return(
        <Icon className={`fa fa-${props.name}`}></Icon>
    )
}
