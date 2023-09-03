import createDataContext from './createDataContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const currentUserReducer = (state, action) => {
    switch(action.type){
        case 'getUserData':
            return state;
        case 'setUserData':
            return {id: action.payload.id,
                name: action.payload.name,
                userState: action.payload.userState};
        default:
            return state;
    }
};

const getUserData = async () => {
    return () => {
        dispatch({type:'getUserData', payload: {}});
    }
}

const setUserData = dispatch => {
    return (id, name, state) => {
        dispatch({type:'setUserData', payload: {id, name, state}});
    }
}

export const {Context, Provider} = createDataContext(
    currentUserReducer,
    {getUserData, setUserData},
    {}
);