import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Post, Todo } from '../../../testData/HomeTest';
import TodoList from './TodoList';
import PostList from './PostList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mystyles } from '../../Components/MyStyles';
import { Colors } from '../../Components/Colors';

// 뷰 컴포넌트
interface HomeScreenProps {
  todos: Todo[];
  Posts: Post[];
  onDeleteTodo: (id: number) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ todos, Posts, onDeleteTodo }) => (
 // <View style={[Mystyles.container, { backgroundColor: Colors.background }]}>
  <SafeAreaView>
  <View>
    <Text>이번주할일</Text>
    <TodoList todos={todos} onDeleteTodo={onDeleteTodo} />
    <Text>피드</Text>
    <PostList posts={Posts} title=""/>
    {/* 무한 스크롤을 통해 추가적인 포스트를 불러올 수 있는 컴포넌트 */}
  </View>
  </SafeAreaView>
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

