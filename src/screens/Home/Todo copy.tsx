// TodoList.tsx
import PlaceholderMessage from '../../Components/PlaceholderMessage';
import CommonStyles from '../../Components/CommonStyles';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { Colors } from '../../Components/Colors';
import Checkbox from 'expo-checkbox';
import MateBox from '../../Components/MateBox';
import TodoParticipants from './TodoParticipants';

interface TodoProps {
    content: string;
    participants: string[];
    weekDays: string;
}

const Todo: React.FC<TodoProps> = ({ content, participants, weekDays}) => {
    
    const [isChecked, setChecked] = useState(false);

    return(        
    <View>
        <View style={styles.generalBox}>
            {/* participants */}
            <View style={[styles.participantsContainer]}>
                <TodoParticipants participants={participants}/>
            </View>

            {/* weekDays 요일 */}
            <View style={[styles.weekDaysContainer]}>
                <Text style={{fontSize:12}}>{weekDays}</Text>
            </View>

            {/* 체크박스 */}
            <View style={[styles.checkboxContainer]}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? Colors.theme : undefined}
                />
            </View>
        </View>
            
        {/* 내용 */}
        <View style={[styles.contentContainer, {marginLeft: 4}]}>
            <Text style={styles.text}>{content}</Text>
        </View>
    </View>
)};
  
const styles = StyleSheet.create({
    generalBox: {
     // marginHorizontal: '5%',
     // flexDirection: 'row',
    },

    participantsContainer:{
        alignItems: 'flex-start',
        justifyContent: 'center',
       // flex: 20,
        flexDirection: 'row',
    },

    weekDaysContainer :{
        alignItems: 'center',
        justifyContent: 'center',
       // flex: 10,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        padding: 3,
    },

    checkboxContainer : {
        alignItems: 'center',
        justifyContent: 'center',
       // flex: 10,
    },

    contentContainer:{
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingRight: 5,
    },
  
    text: {
      fontSize: 16,
      color: '#000000',
    },
  
    mateStyle:{
      borderRadius: 8,
    },
  
    mateText: {
      fontSize: 12,
      color: '#ffffff',
      fontWeight: 'bold',
      margin: 6,
    },

    checkbox: {
       width: 14,
       height: 14,
       borderWidth: 1
    },
})

export default Todo;