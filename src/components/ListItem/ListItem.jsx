import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';


const CustomListItem = props =>  {
    const ListItem = styled(ListGroupItem)`
       border-left:5px solid ${props.borderColor ? props.borderColor : '#ddd'};
       margin-bottom:20px !important;
    `
    return(
        <ListItem>
            {props.children}
        </ListItem>
    )
}

CustomListItem.propTypes = {
    borderColor: PropTypes.string,
}
  
export default CustomListItem;