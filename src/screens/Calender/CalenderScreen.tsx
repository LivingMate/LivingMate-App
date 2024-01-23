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
import RoundPlusButton from '../../Components/RoundPlusButton';
import ScreenA from '../../Modals/ex';
import ModalDialog from '../../Modals/ModalDialog';
import { ApiEndpoints } from '../../API/ApiEndpoints';
import CalenderView from './CalenderView';
import Event from './Event';

interface EventData {
  id: number,
  userId: string,
  gruopId: string,
  title: string,
  dateStart: string,
  dateEnd: string,
  memo: string,
  term: number,
  participants: string[];
}

const testmarkedDates = {
  '2024-01-19': { marked: true },
  '2024-01-27': { marked: true },
  '2024-01-28': { marked: true }
}

const CalenderScreen = () => {
  const today = new Date().toISOString().split('T')[0];
  const [events, setEvents] = useState<EventData[]>([]);
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});
  const [selectedEvent, setSelectedEvent] = useState<string>(today);

  const [modalVisible, setModalVisible] = React.useState(false); // 모달의 표시 상태를 관리하는 state
  const openModal = () => setModalVisible(true); // 모달을 여는 함수
  const closeModal = () => setModalVisible(false); // 모달을 닫는 함수
  
  useEffect(() => {
    const fetchEvents = async (groupId: string) => {
      try {
        const url = 'http://54.180.100.242:3000/calendar/aaaaaa';
        const response = await fetch(url);
        let data: EventData[] = await response.json();
        setEvents(data); //이벤트 상태 업데이트
      } catch (error) {
        console.error('Failed to fetch events:', error);
        setEvents([]);
      }
      console.log(events);
    };
    fetchEvents(ApiEndpoints.GroupId);
  }, []);
  /*
  useEffect(() => {
    
    // events 상태가 변경될 때마다 markedDates를 업데이트
    const markedDates: { [key: string]: any } = {};
    events.forEach((event) => {
      markedDates[event.dateStart] = { marked: true, dotColor: Colors.text };
    });
    setMarkedDates(markedDates);
    console.log('markedDates: ',markedDates); 
    
      let markedDates: {[key: string]: any} = {...events};
      // 선택된 날짜 처리
      if (markedDates[selectedDate]) {
        markedDates[selectedDate] = { ...markedDates[selectedDate], selected: true, selectedColor: selectedDate === today ? Colors.theme : Colors.text };
      } else {
        markedDates[selectedDate] = { selected: true, selectedColor: selectedDate === today ? Colors.theme : Colors.text };
      }
      console.log('markedDates: ',markedDates);
      return setMarkedDates(markedDates);
  }, [events]);    

  const handleDayPress = (day: any) => {
    const selectedDate = day.dateString;
    setSelectedDate(selectedDate);
  };
*/
  
  const handleDayPress = (day: any) => {
    const selectedEvent = day.dateString;
    // 선택한 날짜에 해당하는 이벤트를 찾아 selectedEvent 상태로 설정
    const event = events.find((event) => event.dateStart === selectedEvent);
    setSelectedEvent('2024-01-19');
  };

  return (
    <View style={CommonStyles.baseContainer}>
      <SafeAreaView style={CommonStyles.safearea}>
        <View style={CommonStyles.section}>
          <CalenderView markedDates={testmarkedDates} selectedDate={selectedEvent} handleDayPress={handleDayPress}/>    
        </View>

        {/* 캘린더 선택된 일정 표출 */}
        <View style={[CommonStyles.section, {marginTop: 10}]}>
        <ScrollView>
        { events.length > 0 ? (
          events.map((event) => (
            <Event 
                id={event.id} 
                userIds={event.participants}
                title={event.title}
                memo={event.memo}
             //   date={event.date} 
                startTime={event.dateStart}
                endTime={event.dateEnd} 
                term={event.term}
              />
          ))
        ) : 
        <View>
        <Event 
                id={0} 
                userIds={["박시온", "김예원", "박준유"]}
                title={"event 예시"}
                memo={"메모"}
             //   date={event.date} 
                startTime={"2024-01-23T09:17:07.655Z"}
                endTime={"2024-01-23T11:17:07.655Z"} 
                term={1}
              />
        </View>
        }
      </ScrollView>
        </View>

        {/* roundBox */}
        <View style={[styles.roundBox, {height: 250}]}></View> 
      </SafeAreaView>
      
      {/* plus button */}
      <RoundPlusButton openModal={openModal}/>
      <ModalDialog visible={modalVisible} onClose={closeModal} screenComponent={<ScreenA/>}/>
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

  text: {
    fontSize: 18,
    alignItems: 'flex-start',
  },
});

export default CalenderScreen;
