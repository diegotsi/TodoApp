import React, { Component} from 'react';
import axios from 'axios';

import PageHeader from '../../components/PageHeader/PageHeader';
import TodoForm from './todoForm'
import TodoList from './todoList'
import NavBar from '../../components/NavBar/NavBar';

const URL = 'http://localhost:3003/api/todos'
export default class Todo extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            list: []
        }

    }

    render(){
        return(
            <div>
            <NavBar/>
                <div className='container'>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm
                    title={this.state.title}
                    description={this.state.description}
                />
                <TodoList
                    list={this.state.list}
                />
                </div>
            </div>
        )
    }
}