import React, {useContext, useState} from 'react';
import {View,TouchableOpacity, StyleSheet} from 'react-native';
import {Context as PostContext} from '../context/PostContext';

import { Menu, MenuItem } from 'react-native-material-menu';

import OptionsIcon from '../../assets/icons/options'


const DeletePostMenu = ({id, action}) => {
    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);

    const {deleteUserPost} = useContext(PostContext);
    
    return(
        <View>
            <Menu
                visible={visible}
                anchor={
                    <TouchableOpacity
                        style={styles.optionsIcon}
                        onPress={showMenu}
                    >
                        <OptionsIcon/>
                    </TouchableOpacity>
                }>
                <MenuItem onPress={() => {
                    hideMenu();
                    deleteUserPost({id}, () => {
                        action();
                    });
                }}>삭제</MenuItem>
            </Menu>
        </View>
    );
};

const styles = StyleSheet.create({
    optionsIcon:{
        marginRight: 14
    }
});

export default DeletePostMenu;