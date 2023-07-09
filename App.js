import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Provider as PostProvider } from './src/context/PostContext';

import FeedScreen from './src/screens/FeedScreen';
import PostDetailScreen from './src/screens/PostDetailScreen';
import AddFriendScreen from './src/screens/AddFriendScreen';
import NoticeScreen from './src/screens/NoticeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const navigator = createStackNavigator({
  Feed: FeedScreen,
  PostDetail: PostDetailScreen,
  AddFriend: AddFriendScreen,
  Notice: NoticeScreen,
  Profile: ProfileScreen
},{
  initialRouteName: 'Feed',
  defaultNavigationOptions:{
    title: '',
    headerBackTitleVisible: false,
    // headerShown: false
  },
});
const App = createAppContainer(navigator);

export default () => {
  return <PostProvider>
    <App />
  </PostProvider>
};