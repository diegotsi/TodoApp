const INITIAL_STATE = {
    description: '',
    title:'',
    list: []
}

export default ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return {
                ...state,
                description: action.payload
            }
        case 'TITLE_CHANGED':
            console.log(action);
            return {
                ...state,
                title: action.payload
            }
        case 'TODO_SEARCHED':
            return {
                ...state,
                list: action.payload.data
            }
        case 'TODO_ADDED':
        case 'TODO_CLEAR': 
            return {
                ...state,
                description: '',
                title: ''
            }
        default:
            return state
    }
}