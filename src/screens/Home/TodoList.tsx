// TodoList.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView } from 'react-native';

interface Todo {
  id: number;
  content: string;
}

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo }) => (
  <ScrollView>
  <View>
    {todos && todos.length > 0 ? (
      todos.map(todo => (
        <View key={todo.id}>
          <Text>{todo.content}</Text>
          <TouchableOpacity onPress={() => onDeleteTodo(todo.id)}>
            <Button title="삭제"></Button>
          </TouchableOpacity>
        </View>
      ))
    ) : (
      <Text>No todos available</Text>
    )}
  </View>
  </ScrollView>
);

export default TodoList;
