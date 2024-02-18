import { Colors } from '../../../common/Colors';
import CommonStyles from '../../../common/CommonStyles';
import React from 'react';
import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback, StyleSheet, SafeAreaView } from 'react-native';


interface SchedulingModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const TimeslotModalContainer: React.FC<SchedulingModalProps> = ({ isVisible, onClose }) => {
  
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
     <Text>SchedulingModal</Text>
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

export default TimeslotModalContainer;
