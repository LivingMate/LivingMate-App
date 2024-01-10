import React from 'react';
import { View } from 'react-native';
import Post from './Post'; // Post 컴포넌트의 경로에 맞게 조정하세요.

interface PostItem {
  id: number;
  content: string;
  isPinned: boolean;
  userId: string;
  date: string;
}

interface FeedProps {
  postlist: PostItem[];
}

const Feed: React.FC<FeedProps> = ({ postlist }) => {
  // isPinned가 false인 항목들을 내림차순으로 정렬
  const unpinnedPosts = postlist.filter(item => !item.isPinned).sort((a, b) => b.id - a.id);

  // isPinned가 true인 항목들을 내림차순으로 정렬
  const pinnedPosts = postlist.filter(item => item.isPinned).sort((a, b) => b.id - a.id);

  // 두 배열을 결합
  const sortedPosts = [...unpinnedPosts, ...pinnedPosts];

  return (
    <View>
      {sortedPosts.map((post) => (
        <Post 
          key={post.id}
          content={post.content}
          isPinned={post.isPinned}
          userId={post.userId}
          date={post.date}
        />
      ))}
    </View>
  );
};

export default Feed;
