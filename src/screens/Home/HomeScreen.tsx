import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoListSection from './TodoListSection';
import FeedSection from './FeedSection';
//import CustomSafeAreaView from '../components/CustomSafeAreaView';

const HomeScreen: React.FC = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.header}>이번주 할 일</Text>
        <TodoListSection />
        <Text style={styles.header}>피드</Text>
        <FeedSection />
      </View>
  );
};

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
