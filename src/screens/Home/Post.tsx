// PostView.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../Components/Colors';
import PinIcon from '../../Assets/Icons/PinIcon';
import ThreeDotsIcon from '../../Assets/Icons/ThreeDotsIcon';
import CommonStyles from '../../Components/CommonStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import MateBox from '../../Components/MateBox';

interface PostProps {
  content: string;
  isPinned: boolean;
  userId?: string,
  date: string;
  //onTogglePin: () => void;
}

const Post: React.FC<PostProps> = ({ content, isPinned, userId, date}) => {
  
  const [isFocused, setIsFocused] = useState(false);

  return(
  <View style={styles.generalBox}>
    <View style={styles.contentAndButtonContainer}>
      <View style={[styles.contentContainer, {marginLeft: 4}]}>
        <Text style={styles.text}>{content}</Text>
      </View>
  
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPressIn={() => setIsFocused(true)}
          onPressOut={() => setIsFocused(false)}
          onPress={()=> {console.log("post threedots clicked");}}
          style={[styles.buttonContainer, isFocused && styles.focused]}
        >
          <ThreeDotsIcon />
        </TouchableOpacity>

        <TouchableOpacity 
          
          //onPress={onTogglePin} 
        >
          <PinIcon 
            color={isPinned ? Colors.theme : Colors.button} 
          />
        </TouchableOpacity>
      </View>
    </View>
    
    <View style={styles.authorAndDateContainer}>
      <View style={styles.dateContainer}>
        <Text style = {{color: Colors.text}}> {date}</Text>
      </View>
      <MateBox
          userId={userId}
          textSize={12}
          showOnlyFirstLetter={false}
      />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  generalBox: {
    backgroundColor: Colors.white,
    marginHorizontal: '5%',
    marginBottom: 10,
    borderRadius: 12,
    padding: 10,
    ...CommonStyles.shadow,
  },

  contentAndButtonContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },

  contentContainer:{
    alignItems: 'flex-start',
    marginVertical: 5,
    flex: 8,
  },

  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  authorAndDateContainer : {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dateContainer : {
    flex: 8,
  },

  text: {
    fontSize: 16,
    color: '#000000',
  },

  buttonContainer: {
    paddingVertical: 12,
    backgroundColor: 'white', // 기본 배경색
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  focused: {
    backgroundColor: 'rgba(181, 181, 181, 0.4)', //포커스 시 배경색
  },

});

export default Post;


