import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Context as PostContext} from '../context/PostContext';

import PostForm from '../components/PostForm';
import InputBar from '../components/InputBar';
import Logo from '../components/Logo';

import AddFriendIcon from '../../assets/icons/add-friend';
import NoticeIcon from '../../assets/icons/notice';
import ProfileIcon from '../../assets/icons/profile'

const FeedScreen = ({navigation}) => {
    const {state, getUserPosts} = useContext(PostContext);

    useEffect(()=>{
        getUserPosts();
        const listener = navigation.addListener('didFocus', () =>{
            getUserPosts();
        });
        return () => {
            listener.remove();
        }
    }, []);
    
    
    return(
        <View style={styles.container}>
            <FlatList
                data={state}
                keyExtractor={userPost => userPost.id}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('PostDetail', {id: item.id})}>
                            <PostForm name={item.name} content={item.content}/>
                        </TouchableOpacity>
                    )
                }}
                ItemSeparatorComponent={() => <View style={{height: 10}} />}
                ListHeaderComponent={<View style={styles.listTopComponent}></View>}
            />
            <InputBar/>
        </View>

    )
};

FeedScreen.navigationOptions = ({navigation}) => {
    return {
        headerTitle: Logo,
        headerTitleAlign: 'center',
        headerLeft: () => (
            <TouchableOpacity style={styles.addFriendIcon} onPress={() => navigation.navigate('AddFriend')}>
                <AddFriendIcon />
            </TouchableOpacity>
        ),
        headerRight: () => (
            <View style={styles.headerRightIconContainer}>
                <TouchableOpacity style={styles.noticeIcon} onPress={() => navigation.navigate('Notice')}>
                    <NoticeIcon />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate('Profile')}>
                    <ProfileIcon />
                </TouchableOpacity>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerRightIconContainer:{
        flexDirection: 'row',
        marginRight: 16
    },
    addFriendIcon:{
        marginLeft: 16
    },
    noticeIcon:{
        marginRight: 12
    },
    profileIcon:{
        // marginRight: 16
    },
    listTopComponent:{
        marginTop: 10,
    }
});

export default FeedScreen;