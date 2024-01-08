import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { Colors } from '../../Components/Colors';
import CommonStyles from '../../Components/CommonStyles'
import PlusIcon from '../../Assets/Icons/PlusIcon';
import { Calendar, DateData } from 'react-native-calendars'; //캘린더 달력 모양
import { Agenda } from 'react-native-calendars'; //캘린더 아래에 일정 내용 펼쳐지는 거
import { daysInWeek, weeksToDays } from 'date-fns';
import { LocaleConfig } from 'react-native-calendars';
import { createStackNavigator } from '@react-navigation/stack';
import MyModal from '../../Components/MyModal';

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

//const eventsData = require('./events.json');

//JSON 데이터를 불러오는 함수
const fetchEvents = async () => {
  try {
    // 로컬 파일 또는 원격 URL에서 JSON 데이터를 불러옵니다.
    // 예를 들어, 로컬 파일 경로 또는 원격 서버 주소를 사용할 수 있습니다.
    const response = await fetch('./events.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return {};
  }
};

const CalenderScreen = () => {
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [events, setEvents] = useState<{[key: string]: any}>({});

  const [modalVisible, setModalVisible] = React.useState(false); // 모달의 표시 상태를 관리하는 state
  const openModal = () => setModalVisible(true); // 모달을 여는 함수
  const closeModal = () => setModalVisible(false); // 모달을 닫는 함수
  

  useEffect(() => {
    setSelectedDate(today); 
    fetchEvents().then(data => setEvents(data));
  }, []);

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  const getMarkedDates = () => {
    let markedDates: {[key: string]: any} = {...events};
    // 선택된 날짜 처리
    if (markedDates[selectedDate]) {
      markedDates[selectedDate] = { ...markedDates[selectedDate], selected: true, selectedColor: selectedDate === today ? Colors.theme : Colors.text };
    } else {
      markedDates[selectedDate] = { selected: true, selectedColor: selectedDate === today ? Colors.theme : Colors.text };
    }
    return markedDates;
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
              onDayPress={onDayPress}
              markedDates={getMarkedDates()}
              // 테마 변경
              theme={{
                arrowColor: '#000000', // 월 이동 화살표 색깔
                selectedDayBackgroundColor: Colors.theme,
                todayTextColor: Colors.theme,
                dayTextColor: '#000000',
                monthTextColor: '#000000',
                todayButtonFontWeight: 'bold',
                dotColor: Colors.text,
                selectedDotColor: Colors.theme,
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
          
      </View>
      {/* roundBox */}
      <View style={[styles.roundBox, {height: 250}]}></View> 

      </SafeAreaView>
      
      {/* plus button */}
      <View style={CommonStyles.plusButtonCotainer}>
        <TouchableOpacity 
          onPress={openModal}
        >
          <View style={CommonStyles.plusButton}>
            <PlusIcon />
          </View>
        </TouchableOpacity>
      </View>

      <MyModal visible={modalVisible} onClose={closeModal} />

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
