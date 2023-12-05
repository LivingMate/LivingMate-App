import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomSafeAreaView from '../../Components/CustomSafeAreaView';
import { Post, Todo } from '../../../testData/HomeTest';
import TodoList from './TodoList';
import PostList from './PostList';

// 뷰 컴포넌트
interface HomeScreenProps {
  todos: Todo[];
  noticePosts: Post[];
 // otherPosts: Post[];
  onDeleteTodo: (id: number) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ todos, noticePosts, onDeleteTodo }) => (
  <CustomSafeAreaView>
  <View>
    <Text>이번주할일</Text>
    <TodoList todos={todos} onDeleteTodo={onDeleteTodo} />
    <Text>피드</Text>
    <PostList posts={noticePosts} title=""/>
   {/* <PostList posts={otherPosts} title=""/> */}
    {/* 무한 스크롤을 통해 추가적인 포스트를 불러올 수 있는 컴포넌트 */}
  </View>
  </CustomSafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

export default HomeScreen;

