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
  groupId: string;
  date: string;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date).replace(/\//g, '-');
};

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
          date: formatDate(item.createdAt),
        }));

        if (data.length > 0) {
          // 가장 최근 게시글이 피드 상단에 오게 정렬
          data.reverse();

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

  /* 프론트 임시 데이터 
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
*/

  return (
    <ScrollView>
      <View style={{ marginBottom: 1090 }}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post.id}
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
      </View>
      </ScrollView>
  );
};

export default Feed;
