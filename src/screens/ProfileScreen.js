import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image, StyleSheet} from 'react-native';
import {Context as PostContext} from '../context/PostContext';


import SettingsIcon from '../../assets/icons/settings'
import PostForm from '../components/PostForm';

const ProfileScreen = () => {
    const {state, getUserPosts} = useContext(PostContext);

    return(
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    style={styles.profileImage}
                    source={require('../../assets/images/empty-profile-image.png')}
                />
                <Text>사용자</Text>
                <Text>상태 메시지~</Text>
            </View>

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
            
        </View>

    )
};



ProfileScreen.navigationOptions = ({navigation}) => {
    return {
        headerTitle: "프로필",
        headerTitleAlign: 'center',
       
        headerRight: () => (
                <TouchableOpacity style={styles.settingsIcon}>
                    <SettingsIcon />
                </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    profileContainer:{
        height: 300,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    settingsIcon:{
        marginRight: 14
    },
    profileImage:{
        width: 90,
        height: 90,
        borderRadius: 50,
    },
    listTopComponent:{
        marginTop: 10,
    }
});

export default ProfileScreen;