import React from 'react';
import styled from 'styled-components';
import { ListGroupItem } from 'reactstrap';


export default props =>  {
    const ListItem = styled(ListGroupItem)`
       border-left:5px solid ${props.borderColor ? props.borderColor : '#ddd'};
       margin-bottom:20px;
    `
    return(
        <ListItem>
            {props.children}
        </ListItem>
    )
}
