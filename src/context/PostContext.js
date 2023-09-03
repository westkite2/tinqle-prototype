import createDataContext from './createDataContext';

const postReducer = (state, action) => {
    switch(action.type){
        case 'get':
            return state;
        case 'add':
            return [...state,
                {id: Math.floor(Math.random() * 99999), //`${state.length + 1}`,
                name: action.payload.name,
                content: action.payload.content,
                image: action.payload.selectedImage}];
        case 'delete':
            return state.filter((userPost) => userPost.id !== action.payload.id);
        default:
            return state;
    }
};
const getUserPosts = dispatch => {
    return () => {
        dispatch({type:'get', payload: {}});
    };
};
const addUserPost = dispatch =>{
    return (name, content, selectedImage) => {
        dispatch({type: 'add', payload: {name, content, selectedImage}});
    }
}
const deleteUserPost = dispatch =>{
    return (id, callback) => {
        dispatch({type: 'delete', payload: id});
        if(callback){
            callback();
        }
    }
}
export const {Context, Provider} = createDataContext(
    postReducer,
    {getUserPosts, addUserPost, deleteUserPost},
    []
);