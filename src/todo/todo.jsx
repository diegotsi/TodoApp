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
        this.handleSearch = this.handleSearch.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleClear = this.handleClear.bind(this);

    }

    componentDidMount() {
        this.refresh();
    }

    refresh(description = '') {
        const search = description ? `&description_regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}));
    }

    handleSearch() {
        this.refresh(this.state.description);
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
            .then(resp => this.refresh(this.state.description));
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`,{ ...todo, done:true})
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`,{ ...todo, done:false})
            .then(resp => this.refresh(this.state.description))
    }

    handleClear(){
        this.refresh();
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
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
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