import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, Pressable, Modal} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Context as PostContext} from '../context/PostContext';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

import CommentInputBar from '../components/CommentInputBar';
import DeletePostMenu from '../components/DeletePostMenu';
import ReactionButton from '../components/ReactionButton';
import BottomSheet from '../components/BottomSheet';
import CommentForm from '../components/CommentForm';

import Comment from '../../assets/icons/comment';
import ReactedPerson from '../../assets/icons/reaction/reacted-person';
import Close from '../../assets/icons/close';

const PostDetailScreen = ({navigation}) => {
    const {state}  = useContext(PostContext);
    const userPost = state.find(userPost => userPost.id === navigation.getParam('id'));

    if(!userPost){
        return null;
    }

    const [ ReactedPersonModalVisible, setReactedPersonModalVisible ] = useState(false);
    const pressReactedPerson = () => {
        setReactedPersonModalVisible(true);
    }

    const [ ImageViewerVisible, setImageViewerVisible ] = useState(false);
    const pressImage = () => {
        setImageViewerVisible(true);
    }
    const closeImageViewer = () => {
        setImageViewerVisible(false);
    }

    const [imageSize, setImageSize] = useState({width: 0, height: 0, ratio: 1});


    useEffect(()=>{
        if(userPost.image){
            Image.getSize(userPost.image, (width, height) => {
            const imageRatio = width / height
            const screenWidth = Dimensions.get('screen').width
            const scaleFactor = width / screenWidth
            const imageHeight = height / scaleFactor
            setImageSize({width: screenWidth, height: imageHeight, ratio: imageRatio})
            })
        }
    }, []);

    

    return(
        <>
        <ScrollView style={styles.container}>                     
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

                    <View style={styles.contentsContainer}>
                        <Text>{userPost.content}</Text>
                            {userPost.image==null ? null :
                                <Pressable
                                onPress={pressImage}>
                                    <Image
                                        source={{uri: userPost.image}}
                                        style={{aspectRatio: imageSize.ratio }}
                                        resizeMode="contain"/>
                                </Pressable>

                            }
                        </View>

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
        </ScrollView>
        <CommentInputBar/>
        
        
        <Modal
            visible={ImageViewerVisible}
            animationType={"fade"}>
            <Pressable
                style={styles.closeButton}
                onPress={closeImageViewer}>
                <Close/>
            </Pressable>
            <ReactNativeZoomableView
                maxZoom={5.0}
                minZoom={1.0}
                zoomStep={1.0}
                initialZoom={1}
                bindToBorders={true}
                onZoomAfter={this.logOutZoomState}
                visualTouchFeedbackEnabled={false}
                style={{
                    backgroundColor: 'white',
                }}
                >
                <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                    source={{ uri: userPost.image }}
                />        
            </ReactNativeZoomableView>
        </Modal>
        
        <BottomSheet
            modalVisible={ReactedPersonModalVisible}
            setModalVisible={setReactedPersonModalVisible}
        />
        </>
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
        flex: 1,
        // backgroundColor: 'white'
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
        marginRight: 10
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
        textAlign: 'right',
        fontSize: 11,
        fontWeight: 500
    },
    contentsContainer:{
        flex: 1,
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
    },
    closeButton:{
        alignItems: 'flex-end',
        marginRight: 20,
        marginTop: 10
    }
});

export default PostDetailScreen;