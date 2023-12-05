// PostList.tsx
import React from 'react';
import { View, Text } from 'react-native';
import PostView from './PostView'; // PostView 컴포넌트를 가져옵니다.

interface Post {
  id: number;
  content: string;
}

interface PostListProps {
  posts: Post[] | undefined;
  title: string;
}

const PostList: React.FC<PostListProps> = ({ posts, title }) => (
  <View>
    <Text>{title}</Text>
    {posts && posts.length > 0 ? (
      posts.map(post => (
        <PostView
          key={post.id}
          post={post}
          onEdit={() => {
            // 수정 액션 처리 api
          }}
          onPin={() => {
            // 핀 액션 처리 api
          }}
        />
      ))
    ) : (
      <Text>게시물이 없습니다</Text>
    )}
  </View>
);

export default PostList;
