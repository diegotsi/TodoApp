import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../../components/Grid/Grid'
import IconButton from '../../components/IconButton/IconButton'

import { changeTitle, changeDescription, search, addTodo, clear } from '../../actions/todo'

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e){
        const { addTodo, search, title, clear } = this.props;
        if(e.key === 'Enter'){
            e.shiftKey ? search(title) : addTodo(title)
        } else if (e.key === 'Escape'){
            clear();
        }
    }

    render(){
        const props = this.props;
        const { addTodo, search, description, title } = this.props;
        return(
            <div role='form' className='todoForm'>
                <div className='row'>
                <Grid cols ='12 9 10'>
                    <input
                        id='title'
                        className='form-control'
                        onChange={this.props.changeTitle}
                        value={props.title}
                        onKeyUp={this.keyHandler}
                        placeholder='Título da Tarefa'
                    />
                    <input
                        id='description'
                        className='form-control'
                        onChange={this.props.changeDescription}
                        value={props.description}
                        onKeyUp={this.keyHandler}
                        placeholder='Descrição da tarefa'
                    />
                    
                </Grid>
                <Grid cols ='12 3 2'>
                    <IconButton
                        style='primary'
                        icon='plus'
                        onClick={() => addTodo(description,title)}
                    />
                    <IconButton
                        style='info'
                        icon='search'
                        onClick={() => search(title)}
                    />
                    <IconButton
                        style='default'
                        icon='close'
                        onClick={props.clear}
                    />
                </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description,
    title: state.todo.title
})
const mapDispatchToProps = dispatch =>
    bindActionCreators ({ changeTitle, changeDescription, search, addTodo, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);