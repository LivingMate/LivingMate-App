import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const exModal: React.FC = () => {
  const [text, setText] = useState<string>(''); // 입력한 텍스트를 상태로 관리
  
  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const handleButtonPress = () => {
    // 입력된 텍스트를 사용할 수 있습니다. 예를 들어, 이곳에서 텍스트를 처리하거나 서버로 전송할 수 있습니다.
    alert(`입력된 텍스트: ${text}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="텍스트를 입력하세요"
        value={text}
        onChangeText={handleTextChange}
        keyboardType="numeric"
        autoComplete="off"
      />
      <Button title="확인" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default exModal;
