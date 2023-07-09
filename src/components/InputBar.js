import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Context as PostContext} from '../context/PostContext';

import CheckIcon from '../../assets/icons/check';
import AddPhotoIcon from '../../assets/icons/add-photo';

const InputBar = () => {
    const [content, setContent] = useState('');
    const {addUserPost} = useContext(PostContext);

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.addPhoto}>
                    <AddPhotoIcon/>
                </TouchableOpacity>
                
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    multiline={true}
                    maxLength={200}
                    placeholder='지금 기분이 어때요? (200자 이내)'
                    value={content}
                    onChangeText={newContent => setContent(newContent)}
                />
            </View>

            <TouchableOpacity
                style={content == '' ? styles.inactiveButton : styles.activeButton}
                disabled={content == '' ? true : false}
                onPress={() => {
                    if (content != ''){
                        addUserPost(content);
                        setContent('');
                    }
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