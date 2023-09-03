import React from 'react';
import {Pressable} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import AddPhotoIcon from '../../assets/icons/add-photo';

function CameraButton({callback}) {

    const handleImageSelection = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            // allowsEditing: true,
            // aspect: [1, 1],
            quality: 0.8,
        });

        if (!result.canceled) {
            callback(result.assets[0].uri);
        }
    };

  return (
    <Pressable onPress={handleImageSelection}>
        <AddPhotoIcon/>
    </Pressable>
  );
}

export default CameraButton;