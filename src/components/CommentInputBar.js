import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
// import {Context as PostContext} from '../context/PostContext';

import CheckIcon from '../../assets/icons/check';

const CommentInputBar = () => {
    const [content, setContent] = useState('');
    // const {addUserPost} = useContext(PostContext);

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    multiline={true}
                    maxLength={200}
                    placeholder='댓글을 적어주세요'
                    value={content}
                    onChangeText={newContent => setContent(newContent)}
                />
            </View>

            <TouchableOpacity
                style={content == '' ? styles.inactiveButton : styles.activeButton}
                disabled={content == '' ? true : false}
                onPress={() => {
                    if (content != ''){
                        // addUserPost(content);
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
        paddingLeft: 10,
        marginVertical: 4,
        marginRight: 4,
        marginLeft: 16
    },
    inactiveButton:{
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
        backgroundColor: '#B7B7B7',
    },
    activeButton:{
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
        backgroundColor: '#8222DD'
    }
});

export default CommentInputBar;