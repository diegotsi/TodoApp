import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import {ptBr} from 'moment/locale/pt-br';


import { Row, ListGroup , ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import PageHeader from '../../components/PageHeader/PageHeader';
import IconButton from '../../components/IconButton/IconButton';
import ListItem from '../../components/ListItem/ListItem';
import Icon from '../../components/Icon/Icon';
import Grid from '../../components/Grid/Grid'

import { markAsDone, markAsPending, deleteToDo } from '../../actions/todo';

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => 
            <Grid cols ='12 12 4 4' key={todo._id}>
            <ListItem borderColor={!todo.done && moment(todo.endDate).format() < moment(new Date()).format() ? '#F03434' : todo.done ? '#2ECC71' : null}>

                <ListGroupItemHeading className={todo.done ?  'markAsDone' : ''}>{todo.title}</ListGroupItemHeading>
                <ListGroupItemText className={todo.done ?  'markAsDone' : ''}>
                    {todo.description}
                </ListGroupItemText>
                <p className='date'>
                    <Icon
                        name='calendar-o'
                        color='#bbb'
                    />
                    Começar em  {moment(todo.startDate).format('DD/MM/YYYY')}
                </p>
                <p className='date'>
                    <Icon
                        name='calendar-o'
                        color='#bbb'
                    />
                    Terminar em  {moment(todo.endDate).format('DD/MM/YYYY')}
                </p>
                <IconButton
                    style='success'
                    icon='check'
                    hide={todo.done}
                    onClick={ () => props.markAsDone(todo)}
                />
                <IconButton
                    style='warning'
                    icon='undo'
                    hide={!todo.done}
                    onClick={ () => props.markAsPending(todo)}
                />
                <IconButton
                    style='danger'
                    icon='trash-o'
                    hide={!todo.done}
                    onClick={() => props.deleteToDo(todo)}
                />
            </ListItem>
            </Grid>
        )
    }

    return (
        <div>
            <h4> Lista de Tarefas </h4>
            <ListGroup>
            <Row>
            {renderRows()}
            </Row>
            </ListGroup>
           
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
    markAsDone,
    markAsPending,
    deleteToDo
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);