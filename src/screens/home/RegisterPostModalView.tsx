import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, Alert } from 'react-native';
import { Colors } from '../../common/Colors';

interface RegisterPostModalViewProps {
  initialContent?: string;
  isVisible: boolean;
  handleCancel: () => void;
  setContent: (content: string) => void;
  regesterPost: () => void;
}

const RegisterPostModalView: React.FC<RegisterPostModalViewProps> = ({ isVisible, initialContent,handleCancel, setContent, regesterPost}) => {

  const content = initialContent || '';

  return (
    <Modal visible={isVisible} transparent animationType='fade'>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.textInput}
            placeholder="게시글 내용을 입력하세요"
            value={content}
            onChangeText={setContent}
            placeholderTextColor={Colors.text}
            keyboardType="numeric"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleCancel} style={[styles.button]}>
              <Text style={styles.buttonText}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={regesterPost} style={[styles.button, {backgroundColor: Colors.theme}]}>
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

export default RegisterPostModalView;
