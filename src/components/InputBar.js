import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Context as PostContext} from '../context/PostContext';
import {Context as CurrentUserContext} from '../context/CurrentUserContext';

import CheckIcon from '../../assets/icons/check';
import CameraButton from './CameraButton';
import { Pressable } from 'react-native';

import { saveUserPost } from "../../lib/posts";


const InputBar = () => {
    const [content, setContent] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const {state} = useContext(CurrentUserContext);
    const {addUserPost} = useContext(PostContext);

    const showSelectedImage = (seletedImageURI) =>{
        setSelectedImage(seletedImageURI);
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.addPhoto}>
                    <CameraButton callback={showSelectedImage}/>
                </TouchableOpacity>
            
                {selectedImage==null ? null :
                    <Pressable onPress={() => setSelectedImage(null)}>
                        <Image source={{uri: selectedImage}} style={{ width: 50, height: 50, marginRight: 4}}/>
                    </Pressable>}
                

                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    multiline={true}
                    maxLength={500}
                    placeholder='지금 기분이 어때요? (500자 이내)'
                    value={content}                      
                    onChangeText={newContent => setContent(newContent)}
                />

            </View>

            {/* send button */}
            <TouchableOpacity
                style={content == '' && selectedImage == null ? styles.inactiveButton : styles.activeButton}
                disabled={content == '' && selectedImage == null ? true : false}
                onPress={() => {
                    // saveUserPost(1, content);
                    // createPost(state.name, content, selectedImage);
                    // addUserPost(state.name, content, selectedImage);
                    setContent('');
                    setSelectedImage(null);
                }}>
                <CheckIcon/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#ECECEC',
        height: 50,
    },
    inputContainer:{
        flexDirection: 'row',
        flex: 1,
    },
    input:{
        backgroundColor:'white',
        flex: 1,
        borderRadius: 10,
        paddingLeft:10,
        marginVertical: 4,
        marginRight: 4,
    },
    addPhoto:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    inactiveButton:{
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        backgroundColor: '#B7B7B7',
    },
    activeButton:{
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        backgroundColor: '#8222DD'
    }
});

export default InputBar;