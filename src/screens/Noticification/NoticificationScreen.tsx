import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { Colors } from '../../Components/Colors';
import CommonStyles from '../../Components/CommonStyles';
import AdjustedBudgetInNoticification from './AdjustedBudgetInNoticification';


const NoticificationScreen = () => {
  //roundBox 동적 연동 구현
  const [roundBoxHeight, setRoundBoxHeight] = useState<number>(0);

  useEffect(() => {
    console.log("roundBoxHeight: ", roundBoxHeight);
  }, [roundBoxHeight]); // roundBoxHeight가 변경될 때마다 실행됨
    
  return (
    <View style={CommonStyles.baseContainer}>
      <SafeAreaView style={CommonStyles.safearea}>
      {/* 정산 알림 */}
      <View style={[CommonStyles.section, {marginTop: 20}]}>
        <Text style={[styles.title, { color: 'white'}]}>정산 알림</Text>
        <AdjustedBudgetInNoticification />
      </View>

      {/* 일반 알림 */}
      <View 
        style={[CommonStyles.section, {minHeight: 540}]}
        onLayout={(event) => {
          const { y } = event.nativeEvent.layout;
          console.log('y:', y);
          const calculatedHeight = y * 4/5;
          setRoundBoxHeight(calculatedHeight);
        }}
      >
          <Text style={[styles.title, { color: 'black' }]}>일반 알림</Text>
          <ScrollView>
                <View style ={CommonStyles.generalBox}>
                <View style={styles.alertBox}>
                  <Text style={[styles.text, { marginVertical: 15 }]}>알림이 없습니다.
                </Text>
                </View></View>
          </ScrollView>
      </View>
      
      {/* roundBox */}
      <View style={[styles.roundBox, {height: roundBoxHeight}]}></View> 

      </SafeAreaView>
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

  paymentBox: {
    //나중에 추가 디테일 필요할때.
  },

  alertBox: {
    //나중에 추가 디테일 필요할때.
  },

  text: {
    fontSize: 18,
    alignItems: 'flex-start',
  },

});

export default NoticificationScreen;
