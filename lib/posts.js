// import firestore from '@react-native-firebase/firestore';

// const postsCollection = firestore().collection('posts');

// export function createPost({user, content, image}) {
//   return postsCollection.add({
//     user,
//     content,
//     image,
//     createdAt: firestore.FieldValue.serverTimestamp(),
//   });
// }

// import firebase from 'firebase/app';
// import 'firebase/firestore';

// // Function to save a post to Firestore
// const saveUserPost = async (userId, post) => {
//   try {
//     const db = firebase.firestore();
//     const userPostsRef = db.collection('posts').doc(userId).collection('userPosts');
//     await userPostsRef.add(post);
//     console.log('Post saved successfully!');
//   } catch (error) {
//     console.error('Error saving post:', error);
//   }
// };
