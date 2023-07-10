import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const CommentForm = ({name, content}) => {

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

                <Text>{content}</Text>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        paddingVertical: 16,
        paddingLeft: 16,
        paddingRight: 10,
        flexDirection: 'row',
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

});

export default CommentForm;