import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../components/Colors';
import { Calendar } from 'react-native-calendars'; //캘린더 달력 모양
import { daysInWeek } from 'date-fns';
import { LocaleConfig } from 'react-native-calendars';
import CommonStyles from '../../components/CommonStyles';

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
  markedDates: { [key: string]: any };
  selectedDate: string;
  handleDayPress: (day: any) => void;
}

const CalenderView: React.FC<CalenderViewProps> = ({ markedDates, selectedDate, handleDayPress }) => {
  // useState를 사용하여 컴포넌트의 상태를 관리합니다.
    // dates 상태는 캘린더에서 표시할 날짜 정보를 저장합니다.
    const [dates, setDates] = useState({});

    useEffect(() => {
        // mergeSelectedAndMarked 함수는 selectedDate와 markedDates를 병합합니다.
        const mergeSelectedAndMarked = (selected: { [key: string]: any }, marked: { [key: string]: any }) => {
            // markedDates 객체를 복사하여 수정하지 않는 것이 좋습니다.
            const result = { ...marked };
            if (selectedDate) {
                // 선택한 날짜가 있다면, 해당 날짜를 markedDates에 추가하거나 수정합니다.
                if (result[selectedDate]) {
                    // 이미 해당 날짜가 markedDates에 있는 경우, 'selected' 속성을 true로 설정합니다.
                    result[selectedDate].selected = true;
                } else {
                    // 해당 날짜가 markedDates에 없는 경우, 새로운 하위 객체를 만들어 추가합니다.
                    result[selectedDate] = { selected: true };
                }
            }
            // 병합된 결과를 로그로 출력하고 반환합니다.
            console.log('calenderview merged event data: ', result);
            return result;
        };

        try {
            // markedDates와 selectedDate를 mergeSelectedAndMarked 함수에 전달하여 새로운 dates 상태를 생성합니다.
            const mergedDates = mergeSelectedAndMarked({}, markedDates);
            // 생성된 dates 상태를 설정합니다.
            setDates(mergedDates);
        } catch (error) {
            console.error('Failed to fetch events:', error);
            // 오류가 발생한 경우 dates 상태를 null로 설정합니다.
            setDates({});
        }
    }, [markedDates, selectedDate]); // markedDates와 selectedDate가 변경될 때마다 useEffect가 실행됩니다.
  
    return (
    <View style={styles.container}>
      <Calendar
        dayFormet={{ daysInWeek }}
        hideExtraDays={true}
        onDayPress={handleDayPress}
        markedDates={dates}
        enableSwipeMonths={true}
        onMonthChange={month => {
          console.log('month changed', month);
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
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: 'white',
    marginHorizontal: '5%',
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#ffffff',
    marginTop: 10,
    ...CommonStyles.shadow,
  }
});

export default CalenderView;
