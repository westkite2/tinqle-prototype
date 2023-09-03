import createDataContext from './createDataContext';

const userReducer = (state, action) => {
    switch(action.type){
        case 'create':
            return [...state,
                {id: Math.floor(Math.random() * 99999),
                name: action.payload.name,
                userState: action.payload.userState}];
        case 'get':
            return state;
        case 'delete':
            return state.filter((user) => user.id !== action.payload.id);
        default:
            return state;
    }
};
const createUser = dispatch =>{
    return (id, name, userState) => {
        dispatch({type: 'create', payload: {id, name, userState}});
    }
}
const getUser = dispatch => {
    return () => {
        dispatch({type:'get', payload: {}});
    };
};

const deleteUser = dispatch =>{
    return (id) => {
        dispatch({type: 'delete', payload: id});
    }
}

export const {Context, Provider} = createDataContext(
    userReducer,
    {getUser, createUser, deleteUser},
    []
);