import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, Alert } from 'react-native';
import { Colors } from '../../common/Colors';

interface AddBudgetModalContainerProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddBudgetModalContainer: React.FC<AddBudgetModalContainerProps> = ({ isVisible, onClose}) => {
  const [text, setText] = useState<string>('');

  const handleCancel = () => {
    onClose();
    setText(''); // 모달이 닫힐 때 텍스트 필드 초기화
  };

  const handleRegister = () => {
    if (text !== '') {
    // JSON 데이터 생성
    const postData = {
        content: text,
        //userId: 'asdf124', // 사용자 ID 값을 여기에 대체
        //groupId: 'aaaaaa' // 그룹 ID 값을 여기에 대체
    };
    console.log('postData will be sended: ', postData);

    fetch('http://54.180.100.242:3000/feed/aaaaaa/asdf124', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData), // JSON 데이터를 서버로 보냅니다.
    })
      .then((response) => {
        console.log('HTTP 응답:', response);
        response.json()
      }
      )
      .then((data) => {
        // 서버로부터의 응답을 처리하거나 필요한 작업을 수행합니다.
        console.log('서버 응답:', data);
        // 등록 버튼 클릭 후 모달 닫기
        onClose();
        setText(''); // 텍스트 필드 초기화
        
      })
      .catch((error) => {
        console.error('AddPostModal 서버 요청 실패:', error);
        console.log('서버 응답:', error);
      });
    } else { 
        Alert.alert(
        '',
        '게시글 내용을 입력하세요',
        [
          {
            text: '확인',
          },
        ],
        { cancelable: false }
      );
    }
  };  

  return (
    <Modal visible={isVisible} transparent animationType='fade'>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.textInput}
            placeholder="게시글 내용을 입력하세요"
            value={text}
            onChangeText={setText}
            placeholderTextColor={Colors.text}
            keyboardType="numeric"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleCancel} style={[styles.button]}>
              <Text style={styles.buttonText}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegister} style={[styles.button, {backgroundColor: Colors.theme}]}>
              <Text style={[styles.buttonText, {color: '#ffffff'}]}>등록</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    paddingBottom: 10,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    minHeight: 200,
    backgroundColor: Colors.textInputField,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.text,
    fontSize: 16,
  },
});

export default AddBudgetModalContainer;
