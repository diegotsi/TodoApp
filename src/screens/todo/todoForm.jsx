import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DateTime from 'react-datetime';
import moment from 'moment';
import {ptBr} from 'moment/locale/pt-br';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import Grid from '../../components/Grid/Grid';
import IconButton from '../../components/IconButton/IconButton';


import { changeTitle, changeDescription, changeEndDate, changeStartDate, search, addTodo, clear, changeAlert } from '../../actions/todo';

const isEmpty = (value) => (!value || value == undefined || value == "" || value.length == 0);

class TodoForm extends Component {
    constructor(props){
        super(props);

        this.keyHandler = this.keyHandler.bind(this);
        this.checkFields = this.checkFields.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e){
        const { addTodo, search, title, description, dateStart, dateEnd, clear } = this.props;
        if(e.key === 'Enter'){
            e.shiftKey ? search(title) : addTodo(description, title, dateStart, dateEnd)
        } else if (e.key === 'Escape'){
            clear();
        }
    }

    checkFields(){
        isEmpty(this.props.title) || isEmpty(this.props.description) ? this.props.changeAlert(true, 'Ops...', 'Houve um erro ao cadastrar a tarefa, verifique os campos', 'error') 
        : this.props.addTodo(this.props.description, this.props.title, this.props.dateStart, this.props.dateEnd); 
    }

    render(){
        const props = this.props;
        console.log(props);
        const { addTodo, search, description, title, dateEnd, dateStart, changeAlert, showAlert, titleAlert, descriptionAlert, typeAlert  } = this.props;
        return(
            <div>
                <SweetAlert
                    show={props.showAlert}
                    title={props.titleAlert}
                    text={props.descriptionAlert}
                    type={props.typeAlert ? props.typeAlert : 'warning'}
                    onConfirm={() => props.changeAlert(false)}
                />
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
                        onClick={() => this.checkFields()}
                    />
                    <IconButton
                        style='info'
                        icon='search'
                        onClick={() => search(title)}
                    />
                    <IconButton
                        style='warning'
                        icon='eraser'
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
                            onKeyUp={this.keyHandler}
                            value={props.dateStart ? moment(props.dateStart).format('DD/MM/YYYY') : ''}
                        />
                        
                    </Grid>
                    <Grid cols='12 12 5 5'>
                    <DateTime
                            open={false}
                            inputProps={{placeholder:'Data de Termino'}}
                            onChange={this.props.changeEndDate} locale={ptBr}
                            onKeyUp={this.keyHandler}
                            value={props.dateEnd ? moment(props.dateEnd).format('DD/MM/YYYY') : ''}
                        />
                    </Grid>
                </div>
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
    showAlert: state.todo.showAlert,
    titleAlert: state.todo.titleAlert,
    typeAlert: state.todo.typeAlert,
    descriptionAlert: state.todo.descriptionAlert
})
const mapDispatchToProps = dispatch =>
    bindActionCreators ({ changeTitle, changeDescription, changeStartDate, changeEndDate, search, addTodo, clear, changeAlert }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);