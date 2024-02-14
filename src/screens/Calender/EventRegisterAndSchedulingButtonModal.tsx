import { Colors } from '../../common/Colors';
import CommonStyles from '../../common/CommonStyles';
import React from 'react';
import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback, StyleSheet } from 'react-native';


interface EditAndDeleteButtonsModalProps {
  isVisible: boolean;
  onClose: () => void;
  openRegisterModal: () => void;
  openSchedulingModal: () => void;
}

const EventRegisterAndSchedulingButtonModal: React.FC<EditAndDeleteButtonsModalProps> = ({ isVisible, onClose, openRegisterModal, openSchedulingModal }) => { 
  const handleCancel = () => {
    onClose();
  };

  const handleRegisterModal = () => {
    onClose();
    openRegisterModal();
    console.log('handleRegisterModal');
  };

  const handleSchedulingModal = () => {
    onClose();
    openSchedulingModal();
    console.log('handleSchedulingModal');
  };
  
  return (  
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={handleCancel}
    >
      <TouchableWithoutFeedback 
        onPress={handleCancel}
      >
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <View style={styles.postRegisterAndSchedulingButtoncontainer}>
        <TouchableOpacity 
          style={styles.eventRegisterButton} 
          onPress={handleRegisterModal}
        > 
          <Text style={styles.text}>바로등록</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.eventSchedulingButton} 
          onPress={handleSchedulingModal}
        >
          <Text style={styles.text}>일정조율</Text>
        </TouchableOpacity>
      </View> 
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  postRegisterAndSchedulingButtoncontainer:{
    zIndex: 3, // 가장 앞에 위치
    position: 'absolute',
    bottom: '13%',
    right: '10%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    ...CommonStyles.shadow,
  },

  eventRegisterButton:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: Colors.text,
    borderBottomWidth: 1,
    padding: 10,
    flex: 1,
  },

  eventSchedulingButton:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    flex: 1,
  },

  text: {
    fontSize: 14,
    color: '#000000',
  },
});

export default EventRegisterAndSchedulingButtonModal;
