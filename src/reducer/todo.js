const INITIAL_STATE = {
    description: '',
    title:'',
    dateStart:'',
    dateEnd: '',
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
            return {
                ...state,
                title: action.payload
            }
        case 'DATE_END_CHANGED':
            return {
                ...state,
                dateEnd: action.payload
            }
        case 'DATE_START_CHANGED':
            return {
                ...state,
                dateStart: action.payload
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