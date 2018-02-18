import React from 'react'
import PropTypes from 'prop-types';

import If from './if';

const IconButton =  props =>  (
    <If test={!props.hide}>
        <button
            className={`btn btn-${props.style}`}
            onClick={props.onClick}>

            <i className={`fa fa-${props.icon}`}></i>
        </button>
    </If>

)

IconButton.propTypes = {
    hide: PropTypes.bool,
    onClick: PropTypes.func
}

IconButton.defaultProps = {
    hide: false,
}

export default IconButton;