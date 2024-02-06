import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import PlaceholderMessage from '../../common/PlaceholderMessage';
import PostView from './PostView';
import { Post } from '../../api/Interfaces';

const PostsView: React.FC<{posts: Post[]}> = ({posts}) => {
  return (
    <ScrollView>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <PostView
              key={post.id.toString()}
              id={post.id}
              content={post.content}
              isPinned={post.isPinned}
              userId={post.userId}
              date={post.date} 
              groupId={post.groupId}           
            />
          ))
        ) : (
          <PlaceholderMessage msg='등록된 게시물이 없습니다.' fontSize={18} />
        )}
      </ScrollView>
  );
};

export default PostsView;
