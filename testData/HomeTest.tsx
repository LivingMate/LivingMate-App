// HomeTest.ts
export interface Todo {
    id: number;
    content: string;
  }
  
  export interface Post {
    id: number;
    content: string;
  }
  
  export const initialTodos: Todo[] = [
    { id: 1, content: '할 일 1' },
    { id: 2, content: '할 일 2' },
  ];
  
  export const initialNoticePosts: Post[] = [
    { id: 1, content: '공지 포스트 1' },
    { id: 2, content: '공지 포스트 2' },
  ];
  
  export const initialOtherPosts: Post[] = [
    { id: 1, content: '나머지 포스트 1' },
    { id: 2, content: '나머지 포스트 2' },
    { id: 3, content: '나머지 포스트 3' },
    { id: 4, content: '나머지 포스트 4' },
    { id: 5, content: '나머지 포스트 5' },
    { id: 6, content: '나머지 포스트 6' },
  ];
  