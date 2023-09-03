import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ReactionButton from '../components/ReactionButton';

import Comment from '../../assets/icons/comment';
import ReactedPerson from '../../assets/icons/reaction/reacted-person';

import BottomSheet from './BottomSheet';

const PostForm = ({name, content, image}) => {
    const [ modalVisible, setModalVisible ] = useState(false);
    const pressReactedPerson = () => {
        setModalVisible(true);
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    style={styles.profileImage}
                    source={require('../../assets/images/empty-profile-image.png')}
                />
            </TouchableOpacity>

            <View style={styles.containerRight}>

                <View style={styles.topInfo}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.time}>시간</Text>                    
                </View>

                <View style={styles.contentsContainer}>
                    <Text>{content}</Text>
                    {image==null ? null : <Image source={{uri: image}} style={styles.image}/>}
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
                    <View style={styles.commentContainer}>
                        <Comment/>
                        <Text style={styles.commentText}>0</Text>
                    </View>
                </View>

            </View>
                <BottomSheet
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 16,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 16,
        paddingLeft: 8,
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
    contentsContainer:{
        marginRight: 10
    },
    image:{
        height: 250
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
    commentContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        right: 10
    },
    commentText:{
        color: '#848484'
    }

});

export default PostForm;