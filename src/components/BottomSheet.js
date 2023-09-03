import React, { useEffect, useRef } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Modal,
    Animated,
    TouchableWithoutFeedback,
    Dimensions,
    PanResponder,
    ScrollView
} from 'react-native';

import Heart from '../../assets/icons/reaction/reaction_heart';
import Laugh from '../../assets/icons/reaction/reaction_laugh';
import Cry from '../../assets/icons/reaction/reaction_cry';
import Shock from '../../assets/icons/reaction/reaction_shock';


const BottomSheet = (props) => {
    const { modalVisible, setModalVisible } = props;
    const screenHeight = Dimensions.get("screen").height;
    const panY = useRef(new Animated.Value(screenHeight)).current;
    const translateY = panY.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0, 0, 1],
    });

    const resetBottomSheet = Animated.timing(panY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
    });

    const closeBottomSheet = Animated.timing(panY, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: true,
    });

    const BOTTOM_SHEET_HEIGHT = 260; // Bottom Sheet의 높이
    const BOTTOM_SHEET_START_Y = screenHeight - BOTTOM_SHEET_HEIGHT; // Bottom Sheet의 시작 위치

    const panResponders = useRef(PanResponder.create({
        // onStartShouldSetPanResponder: () => true,
        onStartShouldSetPanResponder: (event, gestureState) => {
            // ScrollView가 스크롤 중이거나 스크롤 가능한 상태인 경우 PanResponder를 인식하지 않도록 설정
            return !(
              panY.__getValue() !== 0 || // 현재 ScrollView가 스크롤 중인지 확인
              gestureState.numberActiveTouches >= 1 // 손가락이 1개 이상인 경우 (스크롤을 막지 않음)
            );
          },
        onMoveShouldSetPanResponder: () => false,

        onPanResponderMove: (event, gestureState) => {
            panY.setValue(gestureState.dy);
        },
        // onPanResponderRelease: (event, gestureState) => {
        //     if(gestureState.dy > 0 && gestureState.vy > 1.5) {        
        //         closeModal();
        //     }
        //     else {
        //         resetBottomSheet.start();
        //     }
        // }
    })).current;

    useEffect(()=>{
        if(props.modalVisible) {
            resetBottomSheet.start();
        }
    }, [props.modalVisible]);

    const closeModal = () => {
        closeBottomSheet.start(()=>{
            setModalVisible(false);
        })
    }

    return (
        <Modal
            visible={modalVisible}
            animationType={"fade"}
            transparent
            statusBarTranslucent
        >
            <View style={styles.overlay}>
                <TouchableWithoutFeedback
                    onPress={closeModal}
                >
                    <View style={styles.background}/>
                </TouchableWithoutFeedback>
                <Animated.View
                    style={{...styles.bottomSheetContainer, transform: [{ translateY: translateY }]}}
                    {...panResponders.panHandlers}
                >

                <ScrollView>
                    <View style={styles.reactionInfo}>
                        <View style={styles.reactionInfoLine}>
                            <View style={styles.icon}>
                                <Heart/>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>-</Text>
                            </View>
                        </View>

                        <View style={styles.reactionInfoLine}>
                            <View style={styles.icon}>
                                <Laugh/>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>김지훈, 장영진, 김동욱, 박정이, 남치니🌸, 이윤지, 김은진, 낫또, 정희정, 김인, 이강, 이우주, 박은지, 염창희, 강민정, 남로아, 박문희, 장연주, 유이진, 김이현지, 아빠덜🌹, 엄마덜🌹</Text>
                            </View>
                        </View>

                        <View style={styles.reactionInfoLine}>
                            <View style={styles.icon}>
                                <Cry/>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>박인수, 유민희</Text>
                            </View>
                        </View>

                        <View style={styles.reactionInfoLine}>
                            <View style={styles.icon}>
                                <Shock/>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                </Animated.View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    background: {
        flex: 1,
    },
    bottomSheetContainer: {
        height: 260,
        justifyContent: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#F7F7F7",
    },
    reactionInfo:{
        flex: 1,
        paddingVertical: 16,
        paddingLeft: 16,
        paddingRight: 13,
    },
    reactionInfoLine:{
        flexDirection: 'row',
    },
    icon:{
        paddingRight: 8,
    },
    textContainer:{
        flex: 1,
    },
    text:{
        lineHeight: 21,
    },
})

export default BottomSheet;