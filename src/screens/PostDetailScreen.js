import React, {useContext, useState} from 'react';
import {View, Text,Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Context as PostContext} from '../context/PostContext';

// import PostForm from '../components/PostForm';
import CommentInputBar from '../components/CommentInputBar';
import DeletePostMenu from '../components/DeletePostMenu';


import ReactionButton from '../components/ReactionButton';

import Comment from '../../assets/icons/comment';
import ReactedPerson from '../../assets/icons/reaction/reacted-person';

import BottomSheet from '../components/BottomSheet';
import CommentForm from '../components/CommentForm';


const PostDetailScreen = ({navigation}) => {
    const {state}  = useContext(PostContext);
    const userPost = state.find(userPost => userPost.id === navigation.getParam('id'));

    const [ modalVisible, setModalVisible ] = useState(false);
    const pressReactedPerson = () => {
        setModalVisible(true);
    }

    if(!userPost){
        return null;
    }
    return(
        <View style={styles.container}>            
            
            <View style={styles.contentContainer}>
                <View style={styles.postContainer}>
                    <TouchableOpacity>
                        <Image
                            style={styles.profileImage}
                            source={require('../../assets/images/empty-profile-image.png')}
                        />
                    </TouchableOpacity>
                    <View style={styles.containerRight}>
                        <View style={styles.topInfo}>
                            <Text style={styles.name}>{userPost.name}</Text>
                            <Text style={styles.time}>시간</Text>                        
                        </View>

                        <Text>{userPost.content}</Text>

                        <View style={styles.bottomInfo}>
                            <View style={styles.bottomButtons}>
                                <TouchableOpacity
                                    style={styles.reactedPersonContainer}
                                    onPress={pressReactedPerson}>
                                    <ReactedPerson/>
                                </TouchableOpacity>

                                <ReactionButton type={'heart'} count={0}/>
                                <ReactionButton type={'laugh'} count={0}/>
                                <ReactionButton type={'cry'} count={0}/>
                                <ReactionButton type={'shock'} count={0}/>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={styles.commentInfoContainer}>
                    <Comment/>
                    <Text style={styles.commentInfoText}>댓글 2 개</Text>
                </View>


                <CommentForm name="친구1" content="안녕~~"/>
                <CommentForm name="친구2" content="ㅋㅋㅋㅋ"/>
            </View>

            <CommentInputBar/>
            <BottomSheet
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                />
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
        flex: 1,
    },
    postContainer:{
        backgroundColor: 'white',
        paddingVertical: 16,
        paddingLeft: 16,
        paddingRight: 10,
        flexDirection: 'row'
    },
    profileImage:{
        width: 35,
        borderRadius: 20,
        marginRight: 7
    },
    containerRight:{
        flex: 1,
    },
    topInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4
    },
    name:{
        fontWeight: 600,
        fontSize: 15
    },
    time:{
        color: '#848484',
        marginRight: 10,
        textAlign: 'right',
        fontSize: 11,
        fontWeight: 500
    },
    bottomInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12
    },
    bottomButtons:{
        flexDirection: 'row'
    },
    reactedPersonContainer:{
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        borderRadius: 20,
        padding: 3,
        marginRight: 2,
    },
    commentInfoContainer:{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: '#ECECEC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingLeft: 20
    },
    commentInfoText:{
        color: '#848484',
        fontSize: 12,
        marginLeft: 2
    }

});

export default PostDetailScreen;