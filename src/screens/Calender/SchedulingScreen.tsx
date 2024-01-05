import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

// LocaleConfig 설정
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

interface TimeSlot {
  time: string;
  date: string;
  selectedBy: string[];
}

const SchedulingScreen: React.FC = () => {
  const [timeSlots, setTimeSlots] = useState<Record<string, TimeSlot>>({});
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [activeUser, setActiveUser] = useState<string | null>(null);

  const users: Record<string, { color: string }> = {
    '김예원': { color: 'yellow' },
    '박준유': { color: 'green' },
    '박시온': { color: 'pink' },
  };

  const getMarkedDates = () => {
    // marked 객체에 인덱스 시그니처 추가
    const marked: Record<string, { marked: boolean, selected?: boolean, selectedColor?: string }> = {};

    Object.keys(timeSlots).forEach((key) => {
      if (timeSlots[key].selectedBy.length > 0) {
        const date = key.split(" ")[0]; // 날짜 부분만 추출
        marked[date] = { marked: true }; // 해당 날짜에 점 표시
      }
    });

    // 현재 선택된 날짜에 대한 스타일 추가
    if (selectedDate) {
      marked[selectedDate] = { ...(marked[selectedDate] || {}), selected: true, selectedColor: 'grey' };
    }
    return marked;
  };

  const handleDayPress = (day: any) => {
    const selectedDate = day.dateString; // 선택된 날짜 저장
    setSelectedDate(selectedDate); // 선택된 날짜 업데이트
    // 여기서 선택된 날짜를 toggleTimeSlot 함수에 전달
    console.log(`handleDayPress Date is ${selectedDate}`);
    toggleTimeSlot(selectedDate, ''); // 빈 문자열로 시간은 초기화

  };

  const toggleTimeSlot = (date: string, time: string) => {
    console.log(`toggleTimeSlot Date is ${date}`);
    if (!activeUser) return;
  
    setTimeSlots((prevSlots) => {
      const newSlots = { ...prevSlots };
      const slotKey = `${date} ${time}`;
      const slot = newSlots[slotKey];
  
      if (!slot) {
        newSlots[slotKey] = { date, time, selectedBy: [activeUser] };
        console.log(`Slot selected: Date: ${date}, Time: ${time}, Selected By: ${activeUser}`);
      } else {
        if (slot.selectedBy.includes(activeUser)) {
          slot.selectedBy = slot.selectedBy.filter(u => u !== activeUser);
          console.log(`Slot deselected: Date: ${date}, Time: ${time}, Deselected By: ${activeUser}`);
        } else {
          slot.selectedBy.push(activeUser);
          console.log(`Slot selected: Date: ${date}, Time: ${time}, Selected By: ${activeUser}`);
        }
      }
      return newSlots;
    });
  };
  
  

  const renderUserButtons = () => {
    return (
      <>
        {Object.keys(users).map(user => (
          <TouchableOpacity
            key={user}
            style={[
              styles.userButton, 
              { backgroundColor: users[user].color },
              activeUser === user && styles.activeUserButton,
            ]}
            onPress={() => setActiveUser(user)}
          >
            <Text style={styles.userButtonText}>{user}</Text>
          </TouchableOpacity>
        ))}
        
        <TouchableOpacity
          style={[
            styles.userButton, 
            { backgroundColor: 'grey' },
            activeUser === null && styles.activeUserButton
          ]}
          onPress={() => setActiveUser(null)}
        >
          <Text style={[styles.userButtonText]}>
            모두 </Text>
        </TouchableOpacity>
      </>
    );
  };

  
  const renderTimeSlots = () => {
    const slots: JSX.Element[] = [];
    for (let hour = 6; hour < 23; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour}:${minute === 0 ? '00' : minute}`;
        const slotKey = `${selectedDate} ${time}`;
        const selectedUsers = timeSlots[slotKey]?.selectedBy || [];
        let backgroundColor = 'white';

        if (activeUser === null) {
            // 모두 보기 모드
            if (selectedUsers.length === Object.keys(users).length) {
              // 모든 사용자가 선택한 경우
              backgroundColor = 'grey';
            } else if (selectedUsers.length > 1) {
              // 두 명 이상이 선택한 경우
              backgroundColor = 'lightgrey';
            } else if (selectedUsers.length === 1) {
              // 한 명만 선택한 경우
              backgroundColor = users[selectedUsers[0]].color;
            }
          } else {
            // 개별 사용자 모드
            if (selectedUsers.includes(activeUser)) {
              backgroundColor = users[activeUser].color;
            }
        }

        slots.push(
            <TouchableOpacity
            key={time}
            style={[styles.timeSlot, { backgroundColor }]}
            onPress={() => toggleTimeSlot(selectedDate, time)} // date 값을 전달
          >
            <Text style={styles.timeText}>{time}</Text>
          </TouchableOpacity>          
        );
      }
    }
    return slots;
}

  return (
    <View style={styles.container}>
        <Text> APP 3 </Text>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={getMarkedDates()}
      />
      <View style={styles.userButtonContainer}>{renderUserButtons()}</View>
      <ScrollView>
        <View style={styles.timeSlotContainer}>{renderTimeSlots()}</View>
      </ScrollView>

        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  timeSlotContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  timeSlot: {
    width: '30%',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  timeText: {
    textAlign: 'center',
  },
  userButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  userButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  activeUserButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'grey'
  },
  userButtonText: {
    textAlign: 'center',
    color: '#000000',
  }
});

export default SchedulingScreen;