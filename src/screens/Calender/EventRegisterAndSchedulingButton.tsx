import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Modal} from 'react-native';
import { Colors } from '../../Components/Colors';
import CommonStyles from '../../Components/CommonStyles';

interface EventRegisterAndSchedulingButtonProps {
    setVisible: (isVisible: boolean) => void;
}

const EventRegisterAndSchedulingButton: React.FC<EventRegisterAndSchedulingButtonProps> = ({setVisible}) => {

  const handleCancel = () => {
    setVisible(false);
  };

  return (             
    <View style={styles.postRegisterAndSchedulingButtoncontainer}>
      <TouchableOpacity style={styles.eventRegisterButton} onPress={handleCancel}> 
        <Text style={styles.text}>바로등록</Text>
            </TouchableOpacity>
        <TouchableOpacity style={styles.eventSchedulingButton} onPress={handleCancel}>
            <Text style={styles.text}>일정조율</Text>
      </TouchableOpacity>
    </View>        
  );
};

const styles = StyleSheet.create({
  postRegisterAndSchedulingButtoncontainer:{
      zIndex: 3, // 가장 앞에 위치
      position: 'absolute',
      bottom: '4%',
      right: '14%',
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

export default EventRegisterAndSchedulingButton;
