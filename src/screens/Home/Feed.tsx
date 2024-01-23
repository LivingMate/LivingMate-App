import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import Post from './Post';
import PlaceholderMessage from '../../Components/PlaceholderMessage';
import myId from '../../../testdata';

interface PostData {
  id: number;
  content: string;
  isPinned: boolean;
  userId?: string;
  groupId: string;
  date: string;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    // API에서 데이터를 가져오는 함수
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://54.180.100.242:3000/feed/aaaaaa');
        let data: PostData[] = await response.json();

        // 서버 데이터를 클라이언트의 데이터 구조로 변환
        data = data.map((item: any) => ({
          id: item.id,
          content: item.content,
          isPinned: item.pin,
          userId: item.userId, // 서버의 'user_id'를 클라이언트의 'userId'로 변환
          groupId: item.groupId,
          date: item.createdAt.substring(0,10),
        }));

        if (data.length > 0) {
          // 가장 최근 게시글이 피드 상단에 오게 정렬(자동으로 그렇게 옴)
          // isPinned가 true인 포스트를 상단으로 정렬
          const sortedPosts = data.sort((a, b) => {
            const aValue = a.isPinned ? 1 : 0;
            const bValue = b.isPinned ? 1 : 0;
            return bValue - aValue;
          });
          //정렬된 posts를 setting
          setPosts(sortedPosts);
        }
      } catch (error) {
        // data가 빈 배열일 경우, 빈 배열 setting
        console.error('Failed to fetch posts:', error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <ScrollView>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              loggedInUserId={myId}
              content={post.content}
              isPinned={post.isPinned}
              userId={post.userId}
              date={post.date}
            //  onTogglePin={() => togglePin(post.id)}
            />
          ))
        ) : (
          <PlaceholderMessage msg='등록된 게시물이 없습니다.' fontSize={18} />
        )}
      </ScrollView>
  );
};

export default Feed;
