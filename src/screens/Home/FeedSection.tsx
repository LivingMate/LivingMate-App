import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FeedSection: React.FC = () => {
  const [feedData, setFeedData] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');

  const addFeedItem = () => {
    setFeedData([...feedData, newItem]);
    setNewItem('');
  };

  return (
    <View style={styles.feedContainer}>
      {feedData.map((item, index) => (
        <Text key={index} style={styles.feedItem}>{item}</Text>
      ))}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newItem}
          onChangeText={setNewItem}
          placeholder="Add a new item"
        />
        <Button title="Add" onPress={addFeedItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedContainer: {
    marginBottom: 16,
  },
  feedItem: {
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

export default FeedSection;
