import React from 'react';
import styled from 'styled-components';

import TitlePage from './TitlePage';
import SmallTitle from './SmallTitle';

export default props => {
    const Header = styled.header`
        margin-bottom:10px;
    `
  
    return(
        <Header className='page-header'>
            <TitlePage>{props.name}
                <SmallTitle> {props.small}</SmallTitle>
            </TitlePage>
        </Header>
)
}