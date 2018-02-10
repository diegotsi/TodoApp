import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButton from '../templates/iconButton';

import { markAsDone, markAsPending, deleteToDo } from './todoActions';

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => 
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                <td>
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
                </td>
            </tr>
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
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