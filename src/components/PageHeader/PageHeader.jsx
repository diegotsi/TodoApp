import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TitlePage from './TitlePage';
import SmallTitle from './SmallTitle';

const PageHeader =  props => {
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

PageHeader.propTypes = {
    name: PropTypes.string.isRequired,
    small: PropTypes.string.isRequired
}

export default PageHeader;