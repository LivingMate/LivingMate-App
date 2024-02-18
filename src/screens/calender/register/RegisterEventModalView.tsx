import { TextInput } from 'react-native';
import { Colors } from '../../common/Colors';
import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import CustomPicker from './CustomPicker';
import { testUser } from '../../../testUsers';
import { EventProps } from './types';
import { UserProps } from '../mypage/types';
import useIsInThisWeek from './UseIsInThisWeek';


interface RegisterEventModalViewProps {
  isVisible: boolean;
  mode: 'create' | 'edit';
  onClose: () => void;
  regesterEvent: (title: string, start: Date, end: Date, term: number, participants: UserProps[], memo: string) => void;
  deleteEvent: () => void;
  editingEvent: EventProps | null;
}

const RegisterEventModalView: React.FC<RegisterEventModalViewProps> = ({ isVisible, onClose, mode, regesterEvent, deleteEvent, editingEvent }) => {
  const loggedUser = testUser.loggedUser;

  const userLocale = navigator.language;
  console.log('userLocale', userLocale); // 현재 기기의 locale 출력

  
  const test = { 
    userColor: "#c30737", 
    userId: "DJ55XWMA", 
    userName: "minzy",
  }
  
  const [title, setTitle] = useState<string>('');
  const [term, setTerm] = useState<number>(0);
  const [participants, setParticipants] = useState<UserProps[]>([test]);
  const [memo, setMemo] = useState<string>('');
  const [start, setStart] = useState<Date>(new Date());
  const [end, setEnd] = useState<Date>(new Date());

  const [startString, setStartString] = useState<string>('');
  const [endString, setEndString] = useState<string>('');
  console.log('start', start, 'end', end, '.toLocaleTimeString()');
  console.log('.toLocaleTimeString()', start.toLocaleTimeString(), end.toLocaleTimeString());

  const [isInThisWeek, loading] = useIsInThisWeek();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>('2');
  const [items, setItem] = useState([
    {label: '없음', value: '0'},
    {label: '매일', value: '1'},
    {label: '매주', value: '2'},
    {label: '매달', value: '3'},
    {label: '매년', value: '4'},
  ]);

  const setInitialData = () => {
    if(mode==='edit' && editingEvent) {
      setTitle(editingEvent.title);
      setStartString(editingEvent.start);
      setEndString(editingEvent.end);
      setStart(new Date(editingEvent.start));
      setEnd(new Date(editingEvent.end));
      setTerm(editingEvent.term);
      setParticipants(editingEvent.participants);
    }
    console.log('editingEvent InitialData: ',editingEvent);
  }

  const onChangeStart = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || start;
    setStart(currentDate);
  };

  const onChangeEnd = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || end;
    setEnd(currentDate);
  };
/*
  const onChangeStart = (selectedDate: Date) => {
    setStart(selectedDate);
  };
  
  const onChangeEnd = (selectedDate: Date) => {
    setEnd(selectedDate);
  };
*/
  const handleCancel = () => {
    console.log('--------------handleCancel');
    onClose();
    setTitle('');
    setStart(new Date());
    setEnd(new Date());
    setTerm(0);
    setParticipants([test]);
  };

  const handleRegister = () => {
    console.log('----------------handleRegister ');
    setParticipants([test]);
    regesterEvent(title, start, end, term, participants, memo);
    handleCancel();
  }

  const handleDelete = () => {
    console.log('--------------handleDelete')
    deleteEvent();
    console.log('--------------deleteEvent')
    handleCancel();
    console.log('--------------handleCancel')
  }

  useEffect(() => {
    setInitialData();
  }, [editingEvent]);

  useEffect(() => {
    if (end < start) {
      setEnd(start);
    }
  }, [start, end]);

  return (  
    <Modal visible={isVisible} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>

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

        {/* line shape*/}
        <View style = {{borderBottomWidth: 1, borderColor: Colors.text, marginVertical: 10}} />
        
        {/* start */}
        <View style={styles.titleAndInputContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>시작</Text>
          </View>
          <View style={[styles.inputContainer, {flexDirection: 'row'}]}>
            <DateTimePicker
              testID="dateTimePicker"
              value={start}
              mode="datetime"
              display="default"
              onChange={onChangeStart}
              locale="ko_KR"
            />
          </View>
        </View>

        {/* end */}
        <View style={styles.titleAndInputContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>종료</Text>
          </View>
          <View style={[styles.inputContainer, {flexDirection: 'row'}]}>
            <DateTimePicker
            testID="dateTimePicker"
            value={end}
            mode="datetime"
            display="default"
            onChange={onChangeEnd}
            locale="ko_KR"
            />
          </View>
        </View>

        {/* 반복 주기*/}
        <View style={styles.titleAndInputContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>반복주기</Text>
          </View>
          <View style={styles.inputContainer}>
            {/*
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              zIndex={3000} // zIndex 값을 높게 설정
              containerStyle={styles.inputContainer} // containerStyle을 추가하여 스타일링
              style={styles.dropDownPicker} // 드롭다운 스타일 조정
              dropDownContainerStyle={styles.dropDownPicker}
            /> */}
            <CustomPicker items={items} setSelectedItem={setValue}/>
          </View>
        </View>

        {/* participants */}
        <View style={styles.titleAndInputContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>담당자</Text>
          </View>
          <View style={styles.inputContainer}>
            
          </View>
        </View>

        {/* memo */}
        <View style={[styles.titleAndInputContainer, {flexDirection: 'column'}]}>
          <Text style={[styles.title, {marginBottom: 10}]}>메모</Text>
          <TextInput
            style={styles.textInput}
            placeholder="메모를 입력하세요"
            value={memo}
            onChangeText={(text) => {
              setMemo(text);
            }}
            placeholderTextColor={Colors.text}
          />
        </View>

        {/* edit , delete, register button */}
        <View style={styles.buttonsContainer}>
            <View style={[styles.buttonContainer, {justifyContent: 'flex-start'}]}>
              {mode == 'edit' && (
                <TouchableOpacity onPress={handleDelete} style={[styles.button, {backgroundColor: 'red'}]}>
                  <Text style={[styles.buttonText, {color: '#ffffff'}]}>삭제</Text>
                </TouchableOpacity>)
              }
            </View>
            <View style={[styles.buttonContainer,{justifyContent: 'flex-end'}]}>
              <TouchableOpacity onPress={handleCancel} style={[styles.button, {marginRight: 5}]}>
                <Text style={styles.buttonText}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleRegister} style={[styles.button, {backgroundColor: Colors.theme}]}>
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

export default RegisterEventModalView;
