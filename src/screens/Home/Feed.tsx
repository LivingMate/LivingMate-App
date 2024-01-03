import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import Post from './Post';
import postsData from './TestData';

interface PostData {
  id: number;
  content: string;
  isPinned: boolean;
  authorName: string;
  authorColor: string;
  date: string;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    // isPinned가 true인 포스트를 상단으로 정렬합니다.
    const sortedPosts = postsData.sort((a, b) => {
      const aValue = a.isPinned ? 1 : 0;
      const bValue = b.isPinned ? 1 : 0;
      return bValue - aValue;
    });

    setPosts(sortedPosts);
  }, []);

  return (
    <ScrollView>
      <View>
        {posts.map((post) => (
          <Post
            key={post.id}
            content={post.content}
            isPinned={post.isPinned}
            authorName={post.authorName}
            authorColor={post.authorColor}
            date={post.date}
          />
        ))}
      </View>
      <View style={{height:500}}></View>
    </ScrollView>
  );
};

export default Feed;
