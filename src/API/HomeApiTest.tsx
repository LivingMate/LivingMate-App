// api.ts
import { Todo, Post } from '../../testData/HomeTest';

interface InitialData {
  initialTodos: Todo[];
  initialPosts: Post[];
}

// 초기 데이터를 가져오는 가상의 API 함수
export const getInitialData = async (): Promise<InitialData> => {
  // 가상의 초기 데이터
  const initialTodos: Todo[] = [
    { id: 1, content: '할 일 1' },
    { id: 2, content: '할 일 2' },
  ];

  const initialPosts: Post[] = [
    { id: 1, content: '1: 공지 포스트', onPin: true },
    { id: 2, content: '2: 포스트', onPin: false },
    { id: 3, content: '3: 포스트', onPin: false },
    { id: 4, content: '4: 공지 포스트', onPin: true },
  ];

  return {
    initialTodos,
    initialPosts,
  };
};

// 특정 ID의 할 일을 삭제하는 가상의 API 함수
export const deleteTodo = (currentTodos: Todo[], idToDelete: number): Todo[] => {
  // 가상의 삭제된 할 일 목록을 반환합니다.
  return currentTodos.filter(todo => todo.id !== idToDelete);
};
