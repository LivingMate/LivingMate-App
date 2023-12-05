// TodoList.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Todo {
  id: number;
  content: string;
}

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo }) => (
  <View>
    {todos && todos.length > 0 ? (
      todos.map(todo => (
        <View key={todo.id}>
          <Text>{todo.content}</Text>
          <TouchableOpacity onPress={() => onDeleteTodo(todo.id)}>
            <Text>삭제</Text>
          </TouchableOpacity>
        </View>
      ))
    ) : (
      <Text>No todos available</Text>
    )}
  </View>
);

export default TodoList;
