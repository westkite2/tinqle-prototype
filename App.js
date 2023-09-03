import React, {useEffect} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import { Provider as PostProvider } from './src/context/PostContext';
import { Provider as CurrentUserProvider} from './src/context/CurrentUserContext';

import SignInScreen from './src/screens/SignInScreen';
import FeedScreen from './src/screens/FeedScreen';
import PostDetailScreen from './src/screens/PostDetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AddFriendScreen from './src/screens/AddFriendScreen';
import NoticeScreen from './src/screens/NoticeScreen';


import firebase from 'firebase/app';
import 'firebase/firestore';
import { FirebaseConfig } from '../firebaseConfig'; // Replace with the actual path to your firebaseConfig file

firebase.initializeApp(FirebaseConfig);


// 구글 연동 로그인
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'

// const googleSigninConfigure = () => { 
//   GoogleSignin.configure({ webClientId: '669614018798-o3j851j0ljhqum8krisirerlptbc1qek.apps.googleusercontent.com'}) 
// }
// useEffect(()=>{
//   googleSigninConfigure();
// },[])


const navigator = createStackNavigator({
  SignIn: SignInScreen,
  Feed: FeedScreen,
  PostDetail: PostDetailScreen,
  Profile: ProfileScreen,
  AddFriend: AddFriendScreen,
  Notice: NoticeScreen,
},{
  initialRouteName: 'SignIn', //'Feed',
  defaultNavigationOptions:{
    title: '',
    headerBackTitleVisible: false,
    // headerShown: false
  },
});
const App = createAppContainer(navigator);

export default () => {
  return <CurrentUserProvider>
    <PostProvider>
    <App />
  </PostProvider>
  </CurrentUserProvider>
};