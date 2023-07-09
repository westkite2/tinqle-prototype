import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Heart from '../../assets/icons/reaction/reaction_heart';
import Laugh from '../../assets/icons/reaction/reaction_laugh';
import Cry from '../../assets/icons/reaction/reaction_cry';
import Shock from '../../assets/icons/reaction/reaction_shock';

const ReactionButton = ({type, count}) => {
    const [pressed, setPressed] = useState(false);
    
    let reaction;

    switch (type){
        case 'heart':
            reaction = <Heart/>
            break;
        case 'laugh':
            reaction = <Laugh/>
            break;
        case 'cry':
            reaction = <Cry/>
            break;
        case 'shock':
            reaction = <Shock/>
            break;
        default:
            reaction = ''
            break;
    }

    return(
        <TouchableOpacity
            activeOpacity={0.8}
            style={pressed ? styles.activeButton : styles.inactiveButton}
            onPress={() => {
                if (pressed){
                    setPressed(false);
                }else{
                    setPressed(true);
                }
            }}>
            {reaction}
            <Text style={pressed ? styles.activeText : styles.inactiveText}>{count}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    inactiveButton:{
        flexDirection: 'row',
        backgroundColor: '#F7F7F7',
        borderRadius: 20,
        paddingLeft: 3,
        paddingRight: 6,
        paddingVertical: 3,
        marginHorizontal: 2,     
    },
    activeButton:{
        flexDirection: 'row',
        backgroundColor: '#8222DD',
        borderRadius: 20,
        paddingLeft: 3,
        paddingRight: 6,
        paddingVertical: 3,
        marginHorizontal: 2,     
    },
    inactiveText:{
        marginLeft: 3,
        color: '#848484',
    },
    activeText:{
        marginLeft: 3,
        color: '#FFFFFF'
    }
});

export default ReactionButton;