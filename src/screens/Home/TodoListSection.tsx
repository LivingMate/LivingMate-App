import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TodoListSection: React.FC = () => {
  const [todoData, setTodoData] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodoData([...todoData, newTodo]);
    setNewTodo('');
  };

  return (
    <View style={styles.todoContainer}>
      {todoData.map((item, index) => (
        <Text key={index} style={styles.todoItem}>{item}</Text>
      ))}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newTodo}
          onChangeText={setNewTodo}
          placeholder="Add a new to-do"
        />
        <Button title="Add" onPress={addTodo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginBottom: 16,
  },
  todoItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default TodoListSection;
