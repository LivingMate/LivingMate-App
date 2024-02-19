import { TextInput } from 'react-native';
import { Colors } from '../../../common/Colors';
import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { daysInWeek } from 'date-fns';

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

interface RegisterSchedulingModalViewProps {
  isVisible: boolean;
  onClose: () => void;
  addScheduling: (title: string, dates: string[], startTime: string, endTime: string)=> void;
}

interface showedDateProps {
  [date: string]: {
    selected: boolean;
  };
}

const RegisterSchedulingModalView: React.FC<RegisterSchedulingModalViewProps> = ({ isVisible, onClose, addScheduling }) => {
  const [showedDates, setShowedDates] = useState<showedDateProps>({});
  const [title, setTitle] = useState<string>('');
  const [start, setStart] = useState<Date>(new Date());
  const [end, setEnd] = useState<Date>(new Date());
  const [isReadyToSend, setIsReadyToSend] = useState<boolean>(false);

  const onChangeStart = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || start;
    setStart(currentDate);
  };

  const onChangeEnd = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || end;
    setEnd(currentDate);
  };

  const handleCancel = () => {
    onClose();
    setTitle('');
    setStart(new Date());
    setEnd(new Date());
    setShowedDates({});
  };
  
  const handleRegister = () => {
    const dateStrings: string[] = Object.keys(showedDates);
    let startString = start.toLocaleTimeString();
    let endString = end.toLocaleTimeString();
    const startIsAm = startString.endsWith('AM') ? true : false;
    const endIsAm = endString.endsWith('AM') ? true : false;
  
    if(!startIsAm) {
      let newHour = parseInt(startString.substring(0,2))+12
      startString = newHour.toString()+startString.substring(1,4);
    } else {
      if(startString.length==10) startString = '0'+startString.substring(0,4);
    }
    if(!endIsAm) {
      let newHour = parseInt(endString.substring(0,2))+12
      endString = newHour.toString()+endString.substring(1,4);
    } else {
      if(endString.length==10) endString = '0'+endString.substring(0,4);
    }
    console.log(startString, '~' , endString);

    addScheduling(title, dateStrings, startString, endString);
    handleCancel();
  }

  const handleDayPress = (date: DateData) => {
    // 선택된 날짜를 토글
    const updatedShowedDates = { ...showedDates };
  
    // date가 이미 선택되어 있는지 확인
    const isSelected = showedDates[date.dateString]?.selected ?? false;
    if (isSelected) {
      delete updatedShowedDates[date.dateString];
    } else {
      updatedShowedDates[date.dateString] = { selected: !isSelected };
    }
    setShowedDates(updatedShowedDates);
    console.log('ShowedDates',updatedShowedDates);
  };
  
  useEffect(() => {
    if (end < start) {
      setEnd(start);
    }
  }, [start, end]);

  useEffect(() => {
    // 모든 필수 상태 값이 채워져 있는지 확인.
    if (title && start && end && Object.keys(showedDates).length > 0) {
      setIsReadyToSend(true);
    } else {
      setIsReadyToSend(false);
    }
  }, [title, start, end, showedDates]);

  return (  
    <Modal visible={isVisible} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <View style={[styles.calendarShape]}>
          <Calendar
            dayFormet={{ daysInWeek }}
            hideExtraDays={true}
            onDayPress={handleDayPress}
            markedDates={showedDates}
            enableSwipeMonths={true}
            onMonthChange={month => {
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
        {/* title */}
        <View style={styles.titleAndInputContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>제목</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.textInput, {width: '95%'}]}
              placeholder="제목을 입력하세요"
              value={title}
              onChangeText={(text) => {
                setTitle(text);
              }}
              placeholderTextColor={Colors.text}
          />
          </View>
        </View>
        {/* start */}
        <View style={styles.titleAndInputContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>시작 시각</Text>
          </View>
          <View style={[styles.inputContainer, {flexDirection: 'row'}]}>
            <DateTimePicker
              testID="dateTimePicker"
              value={start}
              mode="time"
              display="default"
              onChange={onChangeStart}
              locale="ko_KR"
            />
          </View>
        </View>

        {/* end */}
        <View style={styles.titleAndInputContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>종료 시각</Text>
          </View>
          <View style={[styles.inputContainer, {flexDirection: 'row'}]}>
            <DateTimePicker
            testID="dateTimePicker"
            value={end}
            mode="time"
            display="default"
            onChange={onChangeEnd}
            locale="ko_KR"
            />
          </View>
        </View>

        {/* edit , delete, register button */}
        <View style={styles.buttonsContainer}>
            <View style={[styles.buttonContainer,{justifyContent: 'flex-end'}]}>
              <TouchableOpacity onPress={handleCancel} style={[styles.button, {marginRight: 5}]}>
                <Text style={styles.buttonText}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={isReadyToSend ? handleRegister : undefined } 
                style={[styles.button, isReadyToSend ? {backgroundColor: Colors.theme} : {backgroundColor: Colors.text}]}
              >
                <Text style={[styles.buttonText, {color: '#ffffff'}]}>등록</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },

  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    paddingBottom: 10,
    borderRadius: 10,
    width: '80%',
  },

  calendarShape: {
    backgroundColor: '#ffffff',
  },

  titleAndInputContainer:{
    flexDirection: 'row',
    marginVertical: 10,
  },

  titleContainer: {
    marginRight: 10,
    justifyContent: 'center',
  },

  inputContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  title: {
    fontSize: 18,
  },
  textInput: {
    borderRadius: 9,
    padding: 5,
    backgroundColor: Colors.textInputField,
    minHeight: 35,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.text,
    fontSize: 16,
  },
  dropDownPicker: {
    borderRadius: 9,
    borderColor: Colors.text,
  }
});

export default RegisterSchedulingModalView;
