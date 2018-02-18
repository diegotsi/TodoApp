import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DateTime from 'react-datetime';
import {ptBr} from 'moment/locale/pt-br';

import Grid from '../../components/Grid/Grid';
import IconButton from '../../components/IconButton/IconButton';


import { changeTitle, changeDescription, changeEndDate, changeStartDate, search, addTodo, clear } from '../../actions/todo';

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
        console.log(props);
        const { addTodo, search, description, title, dateEnd, dateStart } = this.props;
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
                        onClick={() => addTodo(description,title,dateStart,dateEnd)}
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
                <div className='row'>
                    <Grid cols='12 12 5 5'>
                        <DateTime
                            open={false}
                            inputProps={{placeholder:'Data de Ínicio'}}
                            onChange={this.props.changeStartDate} locale={ptBr}
                        />
                        
                    </Grid>
                    <Grid cols='12 12 5 5'>
                    <DateTime
                            open={false}
                            inputProps={{placeholder:'Data de Termino'}}
                            onChange={this.props.changeEndDate} locale={ptBr}
                        />
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description,
    title: state.todo.title,
    dateStart: state.todo.dateStart,
    dateEnd: state.todo.dateEnd,
})
const mapDispatchToProps = dispatch =>
    bindActionCreators ({ changeTitle, changeDescription, changeStartDate, changeEndDate, search, addTodo, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);