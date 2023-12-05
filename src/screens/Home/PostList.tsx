// PostList.tsx
import React from 'react';
import { View, Text } from 'react-native';

interface Post {
  id: number;
  content: string;
}

interface PostListProps {
  posts: Post[] | undefined; // undefined에 대한 타입 추가
  title: string;
}

const PostList: React.FC<PostListProps> = ({ posts, title }) => (
  <View>
    <Text>{title}</Text>
    {posts && posts.length > 0 ? (
      posts.map(post => (
        <View key={post.id}>
          <Text>{post.content}</Text>
        </View>
      ))
    ) : (
      <Text>No posts available</Text>
    )}
  </View>
);

export default PostList;
