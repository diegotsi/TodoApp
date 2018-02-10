import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../templates/grid'
import IconButton from '../templates/iconButton'

import { changeDescription, search, addTodo } from './todoActions'

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e){
        const { addTodo, search, description } = this.props;
        if(e.key === 'Enter'){
            e.shiftKey ? search() : addTodo(description)
        } else if (e.key === 'Escape'){
            props.handleClear();
        }
    }

    render(){
        const props = this.props;
        const { addTodo, search, description } = this.props;
        return(
            <div role='form' className='todoForm'>
                <Grid cols ='12 9 10'>
                    <input
                        id='description'
                        className='form-control'
                        onChange={this.props.changeDescription}
                        value={props.description}
                        onKeyUp={this.keyHandler}
                        placeholder='Adicionar uma tarefa'
                    />
                </Grid>
                <Grid cols ='12 3 2'>
                    <IconButton
                        style='primary'
                        icon='plus'
                        onClick={() => addTodo(description)}
                    />
                    <IconButton
                        style='info'
                        icon='search'
                        onClick={() => search()}
                    />
                    <IconButton
                        style='default'
                        icon='close'
                        onClick={props.handleClear}
                    />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})
const mapDispatchToProps = dispatch =>
    bindActionCreators ({ changeDescription, search, addTodo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);