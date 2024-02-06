import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import { Colors } from './Colors';
import CommonStyles from './CommonStyles';

interface EditAndDeleteButtonProps {
    openModal?: () => void;
    setEditButtonVisible?: () => void;
}

const EditAndDeleteButton: React.FC<EditAndDeleteButtonProps> = (openModal, setEditButtonVisible) => {

  const handleEditPress = () => {
    // 수정 버튼을 눌렀을 때 할 작업을 여기에 작성합니다.
    // 예: 수정 화면을 표시하는 네비게이션 이동 등
    // navigation.navigate('EditScreen');
  };

  const handleDeletePress = () => {
    // 삭제 버튼을 눌렀을 때 삭제 경고창을 표시합니다.
    Alert.alert(
      '',
      '정말로 삭제하시겠습니까?',
      [
        {
          text: '확인',
          onPress: () => {
            // 삭제 작업을 여기에 작성합니다.
            // 예: 데이터베이스에서 항목 삭제 등
            setEditButtonVisible(); 
          },
        },
        {
          text: '취소',
          onPress: () => console.log('취소 버튼을 눌렀습니다.'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  return (
     <View style={styles.container}>
        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <Text style={styles.editText}>수정</Text>
         </TouchableOpacity>
     <TouchableOpacity style={styles.deleteButton} onPress={handleDeletePress}>
         <Text style={styles.deleteText}>삭제</Text>
     </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
      zIndex: 3, // 가장 앞에 위치
      position: 'absolute',
      bottom: '5%',
      right: '14%',
      flexDirection: 'row',
      borderRadius: 10,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      width: 110,
      ...CommonStyles.shadow,
    },
  
   editButton:{
      alignItems: 'center',
      justifyContent: 'center',
      borderRightColor: Colors.button,
      borderRightWidth: 1,
      height: 30,
      flex: 1,
    },

    deleteButton:{
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      flex: 1,
    },

    editText: {
      fontSize: 14,
      color: '#000000',
    },

    deleteText:{
      fontSize: 14,
      color: '#CC2C2C',
    }
});

export default EditAndDeleteButton;
