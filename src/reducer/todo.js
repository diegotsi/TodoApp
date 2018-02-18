const INITIAL_STATE = {
    description: '',
    title:'',
    dateStart:'',
    dateEnd: '',
    showAlert: null,
    titleAlert: '',
    textAlert: '',
    typeAlert: '',
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
            return{
                ...state,
                showAlert: true,
                titleAlert: 'Yeahh!',
                descriptionAlert: 'Tarefa Cadastrada com sucesso',
                typeAlert: 'success',
                description: '',
                title: ''
            }
        case 'TODO_CLEAR': 
            return {
                ...state,
                description: '',
                title: ''
            }
        case 'CHANGED_ALERT':
            return {
                ...state,
                showAlert: action.show,
                titleAlert: action.show ? action.title : '',
                descriptionAlert: action.show ? action.description : '',
                typeAlert: action.show ? action.typeAlert : ''
        }

        default:
            return state
    }
}