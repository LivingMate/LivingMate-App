import React, { useEffect, useState } from 'react';
import { deleteData, getData, patchData } from '../../api/APIs';
import { ServerPost } from '../../api/ServerInterfaces';
import { PostProps } from './PostView';
import HomeView from './HomeView';
import { useAuth } from '../../auth/AuthContext';

const HomeContainer = () => {
  const { userToken } = useAuth();
  const [posts, setPosts] = useState<PostProps[]>([]);
  
  const fetchPosts = async () => {
    try {
      const path = '/feed';
      const serverData = await getData<ServerPost[]>(path, userToken);
      // 서버 데이터를 클라이언트의 데이터 구조로 변환
      console.log('serverData:', serverData);
      const data = serverData.map((item) => ({
        id: item.feedId,
        content: item.content,
        isPinned: item.pinned,
        userId: item.userId, 
        groupId: item.groupId,
        date: item.createdAt.substring(0,10),
      }));

      if (data.length > 0) {
        // 가장 최근 게시글이 피드 상단에 오게 정렬(자동으로 그렇게 옴)
        // isPinned가 true인 포스트를 상단으로 정렬
        const sortedData = data.sort((a, b) => {
          const aValue = a.isPinned ? 1 : 0;
          const bValue = b.isPinned ? 1 : 0;
          return bValue - aValue;
        });
        //정렬된 posts를 setting
        setPosts(sortedData);
      }
    } catch (error) {
        if (error instanceof TypeError) {
          // TypeError 타입의 에러 처리
          console.error('posts TypeError:', error);
        } else if (error instanceof ReferenceError) {
          // ReferenceError 타입의 에러 처리
          console.error('posts ReferenceError:', error);
        } else {
          // 다른 모든 에러 처리
          console.error('posts Unknown Error:', error);
        }
    }
  };

  const editPin = async (postId: number, isPinned: boolean) => {
    try {
      // 서버에 업데이트 요청을 보냅니다.
      const updatePin = {
        pinned: !isPinned,
      }
      const path = `/feed/pin/${postId}`;
      const response = await patchData(path, updatePin, userToken); // 업데이트할 데이터를 전달합니다.
      console.log('editPin 서버 응답:', response);
      fetchPosts(); // 게시글 목록 새로고침          
      } catch (error) {
        console.error('editPin 서버 요청 실패:', error);
      }
  }; 

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <HomeView posts={posts} fetchPosts={fetchPosts} editPin={editPin}/>
  );
}

export default HomeContainer;
