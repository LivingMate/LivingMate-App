import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Platform, TouchableOpacity, Button } from 'react-native';
import { Colors } from '../../common/Colors';
import CommonStyles from '../../common/CommonStyles'
import PlusIcon from '../../assets/icons/PlusIcon';
import { Calendar, DateData } from 'react-native-calendars'; //캘린더 달력 모양
import { Agenda } from 'react-native-calendars'; //캘린더 아래에 일정 내용 펼쳐지는 거
import { daysInWeek, weeksToDays } from 'date-fns';
import { LocaleConfig } from 'react-native-calendars';
import { createStackNavigator } from '@react-navigation/stack';
import RoundPlusButtonView from '../../common/RoundPlusButtonView';
import ScreenA from '../../modals/ex';
import ModalDialog from '../../modals/ModalDialog';

import CalenderView from './CalenderView';
import Event from './Event';
import EditAndDeleteButton from '../../common/EditAndDeleteButton';
import EventRegisterAndSchedulingButton from './EventRegisterAndSchedulingButton';

//import CalenderAgenda from './CalenderAgenda';

interface EventData {
  id: number,
  userId: string,
  gruopId: string,
  title: string,
  startTime: string,
  endTime: string,
  memo: string,
  term: number,
  participants: string[];
}

interface AgendaEntry {
  date: string; // 날짜 문자열, 예: '2024-01-19'
  items: EventData[]; // 해당 날짜에 대한 일정 항목 배열
}

const testmarkedDates = {
  '2024-01-19': { marked: true },
  '2024-01-21': { marked: true,  },
}

const CalenderContainer = () => {
  const today = new Date().toISOString().split('T')[0];
  const [events, setEvents] = useState<AgendaEntry[]>([]);
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});
  const [selectedEvent, setSelectedEvent] = useState<string>(today);

  const [eventRegisterAndSchedulingButtonVisible, setEventRegisterAndSchedulingButtonVisible] = useState<boolean>(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const url = 'http://54.180.100.242:3000/calendar/aaaaaa';
        const response = await fetch(url);
        let data: EventData[] = await response.json();

        /*서버 데이터를 클라이언트의 데이터 구조로 변환
        data = data.map((item: any) => ({
          id: item.id,
          userId: item.userId,
          groupId: item.gruopId,
          startTime: item.dateStart,
          endTime: item.dateEnd,
          title: item.title,
          memo: item.memo,
          term: item.term,
          participants: item.participants,
        })); */
  
      //  setEvents(data); // 이벤트 상태 업데이트
  
      } catch (error) {
        console.error('Failed to fetch events:', error);
      //  setEvents([]);
      }
    };
    fetchEvents();
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
    const event = events.find((event) => event.date === selectedEvent);
    setSelectedEvent('2024-01-19');
  };

  const handleEventRegisterPress = () => {
    // 수정 버튼을 눌렀을 때 할 작업을 여기에 작성합니다.
    // 예: 수정 화면을 표시하는 네비게이션 이동 등
    // navigation.navigate('EditScreen');
    console.log("handleEventRegisterPress clicked");
   // handleEventRegisterAndSchedulingButton(false);
  };

  const handleEventSchedulingPress = () => {
    console.log("handleEventSchedulingPress clicked");
  //  handleEventRegisterAndSchedulingButton(false);
  };

  return (
    <View style={CommonStyles.baseContainer}>
      <SafeAreaView style={CommonStyles.safearea}>
        <View style={CommonStyles.section}>
          <CalenderView markedDates={testmarkedDates} selectedDate={selectedEvent} handleDayPress={handleDayPress}/>    
        </View>

        {/* 캘린더 선택된 일정 표출 */}
        <View style={[CommonStyles.section, {marginTop: 10}]}>
        
          {/*
          <CalenderAgenda />
          <Agenda
          items={{events}}
        { events.length > 0 ? (
          events.map((event) => (
            <Event 
                id={event.id} 
                userIds={event.participants}
                title={event.title}
                memo={event.memo}
                date={event.date} 
                startTime={event.startTime}
                endTime={event.endTime} 
                term={event.term}
          /> 
          ))
        ) : 
        <View>*/}
        <Event 
                id={0} 
                userIds={["윤민지", "박영희"]}
                title={"event 예시"}
                memo={"메모"}
                date={"2024-01-23"} 
                startTime={"09:17"}
                endTime={"11:17"} 
                term={1}
              />
        </View>

        {/* roundBox */}
        <View style={[styles.roundBox, {height: 250}]}></View> 
      </SafeAreaView>
      
      {/* plus button */}
      {/* round plus button */}
      <View style={{alignItems: 'flex-end', paddingHorizontal: '4%'}}>
      <TouchableOpacity style={{width: 50}}>
        <RoundPlusButtonView />
      </TouchableOpacity>
      </View>

      {eventRegisterAndSchedulingButtonVisible && (
      <EventRegisterAndSchedulingButton
        setVisible={()=>setEventRegisterAndSchedulingButtonVisible(false)}
      /> )}
      
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

  postRegisterAndSchedulingButtonContainer:{
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

  postRegisterAndSchedulingButtonText: {
    fontSize: 14,
    color: '#000000',
  },
});

export default CalenderContainer;
