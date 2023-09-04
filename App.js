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