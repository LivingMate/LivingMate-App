/* PostDetailScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

type RootStackParamList = {
  Home: undefined;
  PostDetail: { postId: number };
};

type PostDetailScreenRouteProp = RouteProp<RootStackParamList, 'PostDetail'>;
type PostDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PostDetail'>;

type Props = {
  route: PostDetailScreenRouteProp;
  navigation: PostDetailScreenNavigationProp;
};

type Post = {
    title: string;
    body: string;
    // 여기에 API 응답의 형식을 정의합니다.
    // 예를 들어, API가 { title: string, body: string } 형식의 응답을 보낸다면,
    // 다음과 같이 정의할 수 있습니다.
    // response.data: { title: string, body: string };
};

const PostDetailScreen: React.FC<Props> = ({ route }) => {
    const { postId } = route.params;
    const [post, setPost] = useState<Post | null>(null);
  
    useEffect(() => {
      // 특정 게시글을 가져오는 API 호출
      axios.get<Post>(`https://api.example.com/posts/${postId}`)
        .then(response => {
          setPost(response.data);
        })
        .catch(error => {
          console.error('Error fetching post:', error);
        });
    }, [postId]);
  
    if (!post) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
  
    return (
      <View>
        <Text>{post.title}</Text>
        <Text>{post.body}</Text>
      </View>
    );
  };
  
  export default PostDetailScreen;
  */