// HomeTest.ts
export interface Todo {
    id: number;
    content: string;
  }
  
  export interface Post {
    id: number;
    content: string;
    onPin: boolean;
  }
  
  export const initialTodos: Todo[] = [
    { id: 1, content: '할 일 1' },
    { id: 2, content: '할 일 2' },
  ];
  
  export const initialPosts: Post[] = [
    { id: 1, content: '나머지 포스트 1', onPin: false},
    { id: 2, content: '나머지 포스트 2', onPin: true },
    { id: 3, content: '나머지 포스트 3', onPin: false},
    { id: 4, content: '나머지 포스트 4', onPin: true},
    { id: 5, content: '나머지 포스트 5', onPin: false},
    { id: 6, content: '나머지 포스트 6' , onPin: false},
  ];
  