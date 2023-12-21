import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import Post from './Post';

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
    fetch('http://192.168.0.4:8081/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          console.log('data type check'); 
          console.log(data); 
          throw new Error('Data is not an array!');
        }
  
        // isPinned가 true인 포스트를 상단으로 정렬
        const sortedPosts = data.sort((a, b) => {
          const aValue = a.isPinned ? 1 : 0;
          const bValue = b.isPinned ? 1 : 0;
          return bValue - aValue;
        });
  
        setPosts(sortedPosts);
      })
      .catch((error) => console.error('Error:', error));
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
    </ScrollView>
  );
};

export default Feed;
