import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import Post from './Post';
import PlaceholderMessage from '../../Components/PlaceholderMessage';

import {postsData} from './TestData';

interface PostData {
  id: number;
  content: string;
  isPinned: boolean;
  userId?: string;
  date: string;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    if (postsData.length > 0)  {
      // 가장 최근 게시글이 피드 상단에 오게 정렬
      postsData.reverse();
      // isPinned가 true인 포스트를 상단으로 정렬
      const sortedPosts = postsData.sort((a: PostData, b: PostData) => {
        const aValue = a.isPinned ? 1 : 0;
        const bValue = b.isPinned ? 1 : 0;
        return bValue - aValue;
      });
      // 정렬된 posts를 setting
      setPosts(sortedPosts);
    } else {
      // data가 빈 배열일 경우, 빈 배열 setting
      setPosts([]);
    }
  }, [postsData]); // postsData의 변경을 감지하기 위해 dependency 배열에 추가  

  /*const handlePin = (id: number) => {
    setPosts((currentPosts) =>
      currentPosts?.map(post =>
        post.id === id ? { ...post, isPinned: !post.isPinned } : post
      )
    );
  }; */

  return (
      <View style={{ marginBottom: 500 }}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post.id}
              content={post.content}
              isPinned={post.isPinned}
              userId={post.userId}
              date={post.date}
             // handlePin={() => handlePin(post.id)}
            />
          ))
        ) : (
          <PlaceholderMessage msg='등록된 게시물이 없습니다.' fontSize={18} />
        )}
      </View>
  );
};

export default Feed;
