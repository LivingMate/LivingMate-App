import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Colors } from './Colors';
import PlusIcon from '../Assets/Icons/PlusIcon';

interface RoundPlusButtonProps {
  openModal: () => void;
}

const RoundPlusButton: React.FC<RoundPlusButtonProps> = ({ openModal }) => {
  
  //버튼 함수
  const buttonPress = (title: string) => {
    console.log(`${title} 버튼이 클릭되었습니다.`);
    openModal();
  };

  return (
    <View style={styles.plusButtonCotainer}>
      <TouchableOpacity 
          onPress={() =>buttonPress("post plus button")}
      >
        <View style={styles.plusButton}>
          <PlusIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    plusButtonCotainer:{
        zIndex: 3, // 가장 앞에 위치
        position: 'absolute',
        bottom: '1%',
        width: '95%',
        alignItems: 'flex-end',
      },
    
      plusButton:{
        backgroundColor: Colors.theme,
        borderRadius: 100,
        width: 56,  
        height: 56,
        alignItems: 'center',
        justifyContent: 'center'
      },
});

export default RoundPlusButton;
