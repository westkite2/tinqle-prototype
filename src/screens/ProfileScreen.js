import React, {useContext} from 'react';
import {View, Text, Pressable, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {Context as PostContext} from '../context/PostContext';

import Chicken from '../../assets/status/chicken';
import Edit from '../../assets/icons/edit';

import SettingsIcon from '../../assets/icons/settings'
import PostForm from '../components/PostForm';

const ProfileScreen = ({navigation}) => {
    const {state, getUserPosts} = useContext(PostContext);

    return(
        <View style={styles.container}>
            <FlatList
                data={state}
                keyExtractor={userPost => userPost.id}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('PostDetail', {id: item.id})}>
                            <PostForm name={item.name} content={item.content} image={item.image}/>
                        </TouchableOpacity>
                    )
                }}
                ItemSeparatorComponent={() => <View style={{height: 10}} />}
                ListHeaderComponent={
                <View style={styles.profileContainer}>
                    <View style={styles.statusBox}>
                        <Chicken/>
                    </View>

                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>사용자</Text>
                        <Pressable style={styles.editName}>
                            <Edit style={styles.editIcon}/>
                        </Pressable>
                    </View>
                    
                    <Text style={styles.idText}>ID: idgoeshere</Text>
                </View>
                }
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
        flex: 1
    },
    profileContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 16,
        paddingVertical: 40,
        borderRadius: 10
    },
    settingsIcon:{
        marginRight: 14,        
    },
    statusBox:{
        width: 120,
        height: 120,
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    nameContainer:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 12,
        marginBottom: 9,
    },
    nameText:{
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 600,
        marginLeft: 16,
    },
    editName:{
        marginLeft: 2,
        marginBottom: 3
    },
    idText:{
        fontSize: 11,
        color: '#848484',
    }
});

export default ProfileScreen;