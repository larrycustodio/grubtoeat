const store = {
    search: ''
}

export default function searchBarReducer(state = store, { type, payload }){
    switch (type) {
        case 'SEARCH_INPUT_CHANGE':
            return {
                ...state,
                ...payload
            }
        case 'SEARCH_INPUT_SUBMIT':
            return {
                ...state
            }
        default:
            return state
    }
}