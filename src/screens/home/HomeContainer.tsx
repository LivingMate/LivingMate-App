import React, { useEffect, useState } from 'react';
import { deleteData, fetchData } from '../../api/APIs';
import { adaptPost } from '../../api/Adaptors';
import { ServerPost } from '../../api/ServerInterfaces';
import { PostProps } from './PostView';
import HomeView from './HomeView';

const HomeContainer = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  
  const fetchPosts = async () => {
    try {
      const path = '/feed/aaaaaa';
      const serverData = await fetchData<ServerPost[]>(path);
      const adaptedData = serverData.map(adaptPost);
      if (adaptedData.length > 0) {
        // 가장 최근 게시글이 피드 상단에 오게 정렬(자동으로 그렇게 옴)
        // isPinned가 true인 포스트를 상단으로 정렬
        const sortedData = adaptedData.sort((a, b) => {
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

  // DELETE 요청을 보내는 함수
  const deletePost = async (postId: string): Promise<void> =>{
    // deletePost 로직 구현
    const path = `/feed/aaaaaa/${postId}`;
    try {
      //deleteData api를 호출하여 특정 포스트 삭제 요청
      await deleteData<void>(path);
      console.log(`Deleting post with ID: ${postId}`);
      // 실제 삭제 로직이 여기에 들어갑니다
    } catch (error) {
      console.error(`Error deleting post with ID ${postId}:`, error);
      throw error;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <HomeView posts={posts} fetchPosts={fetchPosts}/>
  );
}

export default HomeContainer;

/*
fetchData는 데이터를 가져오는(GET) 함수로, 
호출 시 지정한 타입의 데이터를 서버로부터 받아와야 하므로 
반환 타입이 Promise<T>입니다.
deletePost는 데이터를 삭제하는(DELETE) 함수로, 
특정 작업을 수행한 후 반환할 데이터가 없으므로 
반환 타입이 Promise<void>입니다.
*/

