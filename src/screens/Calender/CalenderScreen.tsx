import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { Colors } from '../../Components/Colors';
import CommonStyles from '../../Components/CommonStyles'
import PlusIcon from '../../../assets/Icons/PlusIcon';
import { Calendar, DateData } from 'react-native-calendars'; //캘린더 달력 모양
import { Agenda } from 'react-native-calendars'; //캘린더 아래에 일정 내용 펼쳐지는 거
import { daysInWeek, weeksToDays } from 'date-fns';
import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['en'] = {
  today: 'Today',
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  dayNames: [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ], 
  dayNamesShort: [
    'S', 'M', 'T', 'W', 'T', 'F', 'S'
  ],
};

LocaleConfig.defaultLocale = 'en';

const CalenderScreen = () => {

  // 버튼 press 함수
  const buttonPress = (title: string) => {
    console.log(`${title} 버튼이 클릭되었습니다.`);
  };

  return (
    <View>
      <SafeAreaView style={CommonStyles.safearea}>
      <View style={[CommonStyles.section]}>

          {/* 캘린더 달력 표시 */}
          <View style={{ 
            borderWidth: 3, 
            borderColor: 'white', 
            marginHorizontal: '5%',
            borderRadius: 15,
            padding: 10,
            backgroundColor: '#ffffff',
            marginTop: 10,
            }}>
            
          <Calendar
              dayFormet={{daysInWeek}}  
              
              
              hideExtraDays={true}
              // 날짜에 마커 추가
              markedDates={{
              '2024-01-16': {marked: true},
              '2024-01-17': {marked: true},
              '2024-01-02': {selected: true}
              }}
              // 테마 변경
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                arrowColor: '#000000', // 월 이동 화살표 색깔
                textSectionTitleColor: '#b6c1cd',
                textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: Colors.theme,
                selectedDayTextColor: '#ffffff',
                todayTextColor: Colors.theme,
                dayTextColor: '#000000',
                textDisabledColor: '#d9e1e8',
                dotColor: Colors.text,
                selectedDotColor: Colors.theme,
                disabledArrowColor: '#d9e1e8',
                monthTextColor: '#000000',
                indicatorColor: '#000000',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '500',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16,
              }}
          />
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
      <View style={CommonStyles.plusButtonCotainer}>
        <TouchableOpacity 
          onPress={() =>buttonPress("post plus button")}
        >
            <View style={CommonStyles.plusButton}>
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
});

export default CalenderScreen;
