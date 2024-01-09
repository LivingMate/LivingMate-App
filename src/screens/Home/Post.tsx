// PostView.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../Components/Colors';
import PinIcon from '../../Assets/Icons/PinIcon';
import ThreeDotsIcon from '../../Assets/Icons/ThreeDotsIcon';
import CommonStyles from '../../Components/CommonStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';

interface PostProps {
  content: string;
  isPinned: boolean;
  userId?: string,
  date: string;
  handlePin?: () => void;
}

const Post: React.FC<PostProps> = ({ content, isPinned, userId, date, handlePin}) => {
  
  /* 각 Post의 userId에 해당하는 유저 정보를 스토어에서 가져옵니다.
  const user = useSelector((state: RootState) => 
    state.userGroup.users.find(u => u.id === userId)
  );

  if (!user) {
    return null; // 또는 로딩 컴포넌트, 또는 유저 정보가 없음을 표시하는 컴포넌트
  }*/

  const [userName, setUserName] = useState<string>('탈퇴');
  const [userColor, setUserColor] = useState<string>(Colors.text);

  useEffect(() => {
    if (userId)  {
      setUserName('테스트');
      setUserColor('#000000');
    } /*else {
      setUserName('탈퇴');
      setUserColor(Colors.text);
    }*/
  }, []); // dependency 배열에 추가  

  
  
  return(
  <View style={styles.generalBox}>
    <View style={styles.contentAndButtonContainer}>
      <View style={[styles.contentContainer, {marginLeft: 4}]}>
        <Text style={styles.text}>{content}</Text>
      </View>
  
      <View style={styles.buttonContainer}>
        <View style={{marginTop: 10}}>
        <TouchableOpacity>
          <ThreeDotsIcon />
        </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={{marginLeft: 10}}
          onPress={handlePin} 
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
      <View style={styles.authorContainer}>
        <View style = {[styles.mateStyle, {
              backgroundColor: userColor,}]}>
          <Text style={styles.mateText}>{userName}</Text>
        </View>
      </View>
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

  buttonContainer: {
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

  authorContainer : {
    alignItems: 'flex-start',
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

});

export default Post;

