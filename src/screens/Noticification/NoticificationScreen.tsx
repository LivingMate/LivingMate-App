import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../../components/Colors';
import CommonStyles from '../../components/CommonStyles';
import AdjustedBudgetInNoticification from './AdjustedBudgetInNoticification';
import AppNoticifications from './AppNoticification';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NoticificationScreen = () => {
  //roundBox 동적 연동 구현
  const [roundBoxHeight, setRoundBoxHeight] = useState<number>(0);

  useEffect(() => {
    console.log("roundBoxHeight: ", roundBoxHeight);
  }, [roundBoxHeight]); // roundBoxHeight가 변경될 때마다 실행됨
    
  return (
    <View style={CommonStyles.baseContainer}>
      <SafeAreaView style={[CommonStyles.safearea]}>
      {/* 정산 알림 */}
      <View style={[CommonStyles.section, {marginTop: 20}]}>
        <View style={styles.textAndButtonContainer}>
          <Text style={[styles.title, { color: 'white'}]}>정산 알림</Text>
        </View>
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
          <View style={styles.textAndButtonContainer}>
            <View style={{flex: 2}}>
              <Text style={[styles.title, {color: 'black'}]}>일반 알림</Text>
            </View>
            <TouchableOpacity style={{flex: 1, backgroundColor: 'red', justifyContent: 'center'}}>
              <Text style={[styles.text]}>삭제</Text>
            </TouchableOpacity>
          </View>
          <AppNoticifications /> 
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
  
  textAndButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
    paddingVertical: 15,
  },

  title:{
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },

  text: {
    fontSize: 18,
    color: Colors.text,
    alignItems: 'flex-end',
    marginRight: 5,
  },

});

export default NoticificationScreen;
