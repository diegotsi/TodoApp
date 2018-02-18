import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
});

export const changeTitle = event => ({
    type: 'TITLE_CHANGED',
    payload: event.target.value
})

export const changeStartDate = date => {
    return({
    type: 'DATE_START_CHANGED',
    payload: date.format()
})}


export const changeEndDate = date => ({
    type: 'DATE_END_CHANGED',
    payload: date.format()
})
export const search = (title) => {
    const search = title ? `&title__regex=/${title}/` : ''
    const request = axios.get(`${URL}?sort=-createdAt${search}`)

    console.log(request);
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}


export const addTodo = (description, title = '', startDate, endDate) => {
    return dispatch => {
        axios.post(URL, {title, description, startDate, endDate})
            .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data}))
            .then(resp => dispatch(search()))
        
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done:true})
            .then(resp => dispatch({type: 'TODO_MARKED_AS_DONE', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done:false})
            .then(resp => dispatch({type: 'TODO_MARKED_AS_PENDING', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}

export const deleteToDo = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => dispatch({type: 'TODO_DELETED', successDelete: true}))
        .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return {
        type: 'TODO_CLEAR'
    }
}
