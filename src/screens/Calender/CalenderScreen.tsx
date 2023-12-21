import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { Colors } from '../../Components/Colors';
import CommonStyles from '../../Components/CommonStyles'
import { Image } from 'react-native';
import image from './image.png'; //임시로 뷰만 보려고 넣어둔 것
import PlusIcon from '../../../assets/Icons/PlusIcon';


const CalenderScreen = () => {

  // 버튼 press 함수
  const buttonPress = (title: string) => {
    console.log(`${title} 버튼이 클릭되었습니다.`);
  };

  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={CommonStyles.safearea}>
      
      <View style={[CommonStyles.section, {minHeight: 710}]}>

          {/* 캘린더 달력 표시 */}
          <View style={[CommonStyles.generalBox, {height: 342, width: 347, marginTop: 25, justifyContent:'center', alignItems: 'center'}]}>
            <Image source={image} style={{ width: '90%', height: '90%'}} />
          </View>

          {/* 캘린더 선택된 일정 표출 */}
          <ScrollView>
                <View style ={styles.planContainer}>
                  <Text style={[styles.text, { marginVertical: 15 }]}> 
                </Text>
                </View>
          </ScrollView>
      </View>
      {/* roundBox */}
      <View style={[styles.roundBox, {height: 250}]}></View> 

      </SafeAreaView>
      
      {/* plus button */}
      <View style={styles.plusButtonCotainer}>
        <TouchableOpacity 
          onPress={() =>buttonPress("post plus button")}
        >
            <View style={styles.plusButton}>
              <PlusIcon />
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  roundBox: {
    zIndex: 1, // 낮은 zIndex로 뒤에 위치
    backgroundColor: Colors.theme,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'absolute',
    width: '100%', // 너비 
  },
  
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginVertical: 15,
    marginHorizontal: '5%',
  },

  planBookContainer: {

  },

  planContainer: {
    marginHorizontal: '5%',
    marginBottom: 10,
    padding: 10,
  },

  text: {
    fontSize: 18,
    alignItems: 'flex-start',
  },

  plusButtonCotainer:{
    zIndex: 3, // 가장 앞에 위치
    position: 'absolute',
    bottom: 15,
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

export default CalenderScreen;
