import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Row} from 'reactstrap';

import Icon from '../Icon/Icon';
const EmptyContent =  props => {
    const BackGround = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:#ddd;
        min-height:300px;
        flex-flow: row wrap;
        flex-direction: column;
        padding:10px;
    `
    const Title = styled.h3`
        color: #888;
        margin-bottom:30px;
        text-align:center;
    `
    const Text = styled.p`
        color: #888;
        text-align:center;
       
    `
  
    return(
        <BackGround>
            <Title>
                Nenhuma tarefa cadastrada
            </Title>
            <Row>
            <Icon
            name='flag'
            color='#bbb'
            fontSize='100px'
           />
           </Row>
           
           <Text>
                Use o formulário para cadastrar novas tarefas.
           </Text>
           <Text>
           ShortCut : Enter = Adiciona nova ToDo, Shift + Enter = Pesquisa ToDo, Esc = Limpa os Campos
           </Text>
           
        </BackGround>
)
}

EmptyContent.propTypes = {
    icon: PropTypes.string,
}

export default EmptyContent;