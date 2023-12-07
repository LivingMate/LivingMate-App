// PostView.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Post } from '../../../testData/HomeTest';
import { Colors } from '../../Components/Colors';

interface PostViewProps {
  post: Post;
  onEdit: () => void;
  onPin: () => void;
}

const PostView: React.FC<PostViewProps> = ({ post, onEdit, onPin }) => (
    <View style={[styles.postContainer]}>
      <Text>{post.content}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onEdit}>
          <Text style={styles.buttonText}>수정</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPin}>
          <Text style={styles.buttonText}>핀</Text>
        </TouchableOpacity>
        <Text>{/* 여기에 작성자 이름 표시 */}</Text>
      </View>
    </View>
);

const styles = StyleSheet.create({
  postContainer: {
    borderRadius: 15,
    borderWidth: 0,
    padding: 10,
    marginBottom: 10,
    backgroundColor: Colors.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: Colors.theme,
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.white,
  },
});

export default PostView;
