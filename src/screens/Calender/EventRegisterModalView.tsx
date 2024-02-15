import { TextInput } from 'react-native';
import { Colors } from '../../common/Colors';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import CustomPicker from './CustomPicker';

interface EventRegisterModalViewProps {
  isVisible: boolean;
  mode: 'create' | 'edit';
  onClose: () => void;
}

const EventRegisterModalView: React.FC<EventRegisterModalViewProps> = ({ isVisible, onClose, mode }) => {
  
  const [title, setTitle] = useState<string>('');
  const [start, setStartTime] = useState<string>('');
  const [end, setEndTime] = useState<string>('');
  const [term, setTerm] = useState<number>(0);
  const [participants, setParticipants] = useState<string[]>([]);
  const [memo, setMemo] = useState<string>('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>('0');
  const [items, setItem] = useState([
    {label: '없음', value: '0'},
    {label: '매일', value: '1'},
    {label: '매주', value: '2'},
    {label: '매달', value: '3'},
    {label: '매년', value: '4'},
  ]);
  

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || startDate;
    setStartDate(currentDate);
    console.log('onChange startDate :',startDate);
  };

  const onChange2 = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || endDate;
    setEndDate(currentDate);
    console.log('onChange endDate :', endDate);
  };

  console.log('memo:', memo);

  const handleCancel = () => {
    onClose();
    setTitle('');
    setStartTime('');
    setEndTime('');
    setTerm(0);
    setParticipants([]);
  };

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
              value={startDate}
              mode="datetime"
              display="default"
              onChange={onChange}
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
            value={endDate}
            mode="datetime"
            display="default"
            onChange={onChange2}
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
                <TouchableOpacity onPress={handleCancel} style={[styles.button, {backgroundColor: 'red'}]}>
                  <Text style={[styles.buttonText, {color: '#ffffff'}]}>삭제</Text>
                </TouchableOpacity>)
              }
            </View>
            <View style={[styles.buttonContainer,{justifyContent: 'flex-end'}]}>
              <TouchableOpacity onPress={handleCancel} style={[styles.button, {marginRight: 5}]}>
                <Text style={styles.buttonText}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancel} style={[styles.button, {backgroundColor: Colors.theme}]}>
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

export default EventRegisterModalView;
