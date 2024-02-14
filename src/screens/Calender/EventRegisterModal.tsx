import { SafeAreaView } from 'react-native';
import { Colors } from '../../common/Colors';
import CommonStyles from '../../common/CommonStyles';
import React from 'react';
import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback, StyleSheet } from 'react-native';

interface EventRegisterModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const EventRegisterModal: React.FC<EventRegisterModalProps> = ({ isVisible, onClose }) => {
  
  const handleCancel = () => {
    onClose();
  };
  
  return (  
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
    >
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <Text>EventRegisterModal</Text>
        <TouchableOpacity 
            onPress={handleCancel}
        > 
          <Text>뒤로</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({

});

export default EventRegisterModal;
