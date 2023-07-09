import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context as PostContext} from '../context/PostContext';

import PostForm from '../components/PostForm';
import CommentInputBar from '../components/CommentInputBar';
import DeletePostMenu from '../components/DeletePostMenu';

const PostDetailScreen = ({navigation}) => {
    const {state}  = useContext(PostContext);

    const userPost = state.find(userPost => userPost.id === navigation.getParam('id'));

    if(!userPost){
        return null;
    }
    return(
        <View style={styles.container}>            
            <View style={styles.contentContainer}>
                <PostForm name={userPost.name} content={userPost.content}/>                
            </View>
            <CommentInputBar/>
        </View>

    )
};

PostDetailScreen.navigationOptions = ({navigation}) => {    
    const backToFeed = () => {
        navigation.navigate('Feed');
    }

    return {
        headerRight: () => (
            <DeletePostMenu id={navigation.getParam('id')} action={backToFeed}/>
        )
    };
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    contentContainer:{
        flex: 1
    },
});

export default PostDetailScreen;