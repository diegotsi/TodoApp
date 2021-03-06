import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CustomIcon = props =>  {
    const Icon = styled.i`
        color: ${props.color};
        margin-right: 5px;
        font-size:${props.fontSize || '16px'};
    `
    return(
        <Icon className={`fa fa-${props.name}`}></Icon>
    )
}

CustomIcon.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}


export default CustomIcon;