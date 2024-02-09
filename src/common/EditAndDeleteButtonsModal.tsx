import React from 'react';
import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Colors } from './Colors';
import CommonStyles from './CommonStyles';

interface EditAndDeleteButtonsModalProps {
  isVisible: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const EditAndDeleteButtonsModal: React.FC<EditAndDeleteButtonsModalProps> = ({ isVisible, onClose, onEdit, onDelete }) => {
  return (
    
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={onEdit}
            style={[styles.button, {borderRightWidth: 1, borderRightColor: Colors.text}]}
          >
            <Text>수정</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onDelete}
            style={styles.button}
          >
            <Text>삭제</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명한 검은색 배경
   /* zIndex: 1, 
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0, */
    flex: 1,
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2, 
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    ...CommonStyles.shadow,
  },
  button: {
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
});

export default EditAndDeleteButtonsModal;
