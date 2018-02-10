import React, { Component} from 'react';
import axios from 'axios';

import PageHeader from '../templates/pageHeader';
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'
export default class Todo extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            list: []
        }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

    }

    componentDidMount() {
        this.refresh();
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description:'', list: resp.data}));

    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value});
    }

    handleAdd(){
       const description = this.state.description;
       const title = 'Teste';
       axios.post(URL, { description, title })
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete( `${URL}/${todo._id}`)
            .then(resp => this.refresh());
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`,{ ...todo, done:true})
            .then(resp => this.refresh())
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`,{ ...todo, done:false})
            .then(resp => this.refresh())
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm
                    title={this.state.title}
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                />
                <TodoList
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }
}