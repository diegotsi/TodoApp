import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Row, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import PageHeader from '../../components/PageHeader/PageHeader';
import IconButton from '../../components/IconButton/IconButton';
import Grid from '../../components/Grid/Grid'

import { markAsDone, markAsPending, deleteToDo } from '../../actions/todo';

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => 
            <Grid cols ='12 12 4 4' key={todo._id}>
            <ListGroupItem>
                <ListGroupItemHeading className={todo.done ?  'markAsDone' : ''}>{todo.title}</ListGroupItemHeading>
                <ListGroupItemText className={todo.done ?  'markAsDone' : ''}>
                    {todo.description}
                </ListGroupItemText>
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
            </ListGroupItem>
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