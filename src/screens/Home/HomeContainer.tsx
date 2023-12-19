// containers/HomeScreenContainer.tsx
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';
import { getInitialData, deleteTodo } from '../../API/HomeApiTest'; // 가상의 API 호출 및 데이터 로직을 수행하는 모듈
import HomeScreen from './HomeScreen';

interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [Posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // 데이터 초기화 로직을 외부 모듈로 이동
      getInitialData().then(({ initialTodos, initialPosts }) => {
      setTodos(initialTodos);
      
      //최신순으로 정렬
      initialPosts.reverse();

      //onPin 기준으로 post setting.
      setPosts(initialPosts.sort((a, b) => (b.onPin ? 1 : a.onPin ? -1 : 0)));
    });
  }, []);

  const handleDeleteTodo = (id: number) => {
    // 할 일 삭제 로직을 외부 모듈로 이동
    const updatedTodos = deleteTodo(todos, id);
    setTodos(updatedTodos);
  };

  return (
    <View>
      <HomeScreen
        todos={todos}
        Posts={Posts}
        onDeleteTodo={handleDeleteTodo}
      />
    </View>
  );
};

export default HomeContainer;