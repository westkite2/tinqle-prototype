import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {Context as CurrentUserContext} from '../context/CurrentUserContext';


const SignInScreen = ({navigation}) => {

    const {setUserData} = useContext(CurrentUserContext);
                
    return(
        <View style={styles.container}>
            <Text>친구는 지금 뭐할까?</Text>
            <Text></Text>
            <TouchableOpacity onPress={() => {
                setUserData(Math.floor(Math.random() * 99999), "롯디", "chicken");
                navigation.navigate('Feed');
                }}>
                    <Text>로그인</Text>
            </TouchableOpacity>
        </View>
    )
};

SignInScreen.navigationOptions = ({navigation}) => {
    return {
        headerShown: false
    };
};


const styles = StyleSheet.create({
   container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
   }
});

export default SignInScreen;