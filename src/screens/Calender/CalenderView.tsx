import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { Colors } from '../../common/Colors';
import CommonStyles from '../../common/CommonStyles'
import RoundPlusButtonView from '../../common/RoundPlusButtonView';
import { AgendaItemProps, MarkedDateProps, today } from './CalendarTypes';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import daysInWeek from 'date-fns';
import EventView from './EventView';
import EventRegisterAndSchedulingButtonModal from './EventRegisterAndSchedulingButtonModal';
import EventRegisterModal from './EventRegisterModal';
import SchedulingModal from './SchedulingModal';

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

interface CalenderViewProps {
  markedDates: MarkedDateProps,
  agendaItems: AgendaItemProps,
}

const CalenderView: React.FC<CalenderViewProps> = ({ markedDates, agendaItems }) => {
  const [selectedDate, setSelectedDate] = useState<string>(today);
  const [eventRegisterAndSchedulingButtonModalVisible, setEventRegisterAndSchedulingModalButtonVisible] = useState<boolean>(false);
  const [eventRegisterModalVisible, setEventRegisterModalVisible] = useState<boolean>(false);
  const [schedulingModalVisible, setSchedulingModalVisible] = useState<boolean>(false);

  const handleDayPress = (day: DateData) => {
    console.log(selectedDate);
    setSelectedDate(day.dateString);
  };

   // 선택된 날짜를 표시하기 위한 markedDates 객체 동적 생성
  const markedAndSelectedDates = {
    ...markedDates,
    [selectedDate]: { ...markedDates[selectedDate], selected: true }
  };

  const openButtonModal = () => {
    setEventRegisterAndSchedulingModalButtonVisible(true);
  }

  const closeButtonModal = () => {
    setEventRegisterAndSchedulingModalButtonVisible(false);
  }

  const openRegisterModal = () => {
    setEventRegisterModalVisible(true);
  }

  const closeRegisterModal = () => {
    setEventRegisterModalVisible(false);
  }

  const openSchedulingModal = () => {
    setSchedulingModalVisible(true);
  }

  const closeSchedulingModal = () => {
    setSchedulingModalVisible(false);
  }


  return (
    <View style={CommonStyles.baseContainer}>
    <SafeAreaView style={CommonStyles.safearea}>
      {/* 캘린더 선택된 일정 표출 */}
      <View style={[CommonStyles.section, {marginTop: 10}]} >
        <View style={styles.calendarShape}>
          <Calendar
            dayFormet={{ daysInWeek }}
            hideExtraDays={true}
            onDayPress={handleDayPress}
            markedDates={markedAndSelectedDates}
            enableSwipeMonths={true}
            onMonthChange={month => {
              const initialDate = month.dateString.substring(0,8)+'01';
              setSelectedDate(initialDate);
            }}

            // 테마 변경
            theme={{
              arrowColor: '#000000', // 월 이동 화살표 색깔
              selectedDayBackgroundColor: Colors.theme,
              todayTextColor: Colors.theme,
              dayTextColor: '#000000',
              monthTextColor: '#000000',
              todayButtonFontWeight: 'bold',
              dotColor: Colors.text,
              selectedDotColor: '#ffffff',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '500',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          />
        </View>

        <ScrollView>
          {Object.values(agendaItems[selectedDate] || {}).map((item) => (
              <EventView 
                key={item.id.toString()}
                id={item.id}
                userId={item.userId}
                groupId={item.groupId}
                title={item.title}
                memo={item.memo}
                startTime={item.startTime}
                endTime={item.endTime}
                term={item.term}
                participants={item.participants}
              />
          ))}
        </ScrollView>
      </View>

      {/* roundBox */}
      <View style={[styles.roundBox, {height: 250}]}/> 

    </SafeAreaView>
      
      {/* plus button */}
      {/* round plus button */}
      <View style={{alignItems: 'flex-end', paddingHorizontal: '4%'}}>
        <TouchableOpacity 
          style={{width: 50}}
          onPress={openButtonModal}
        >
          <RoundPlusButtonView />
        </TouchableOpacity>
      </View>
      <EventRegisterAndSchedulingButtonModal 
        isVisible={eventRegisterAndSchedulingButtonModalVisible} 
        onClose={closeButtonModal} 
        openRegisterModal={openRegisterModal} 
        openSchedulingModal={openSchedulingModal}
      />
      <EventRegisterModal isVisible={eventRegisterModalVisible} onClose={closeRegisterModal}/>
      <SchedulingModal isVisible={schedulingModalVisible} onClose={closeSchedulingModal}/>
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

  calendarShape: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#ffffff',
    marginHorizontal: '7%',
    ...CommonStyles.shadow,
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

export default CalenderView;
