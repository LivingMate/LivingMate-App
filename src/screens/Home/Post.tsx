// PostView.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../Components/Colors';
import PinIcon from '../../Assets/Icons/PinIcon';
import ThreeDotsIcon from '../../Assets/Icons/ThreeDotsIcon';
import CommonStyles from '../../Components/CommonStyles';
import { useSelector } from 'react-redux';
import { RootState } from '@app/Store/store';

interface PostProps {
  content: string;
  isPinned: boolean;
  userId: string,
  date: string;
  //onPin: (isPinned: boolean) => void;
}

const Post: React.FC<PostProps> = ({ content, isPinned, userId, date}) => {
  
  // 각 Post의 userId에 해당하는 유저 정보를 스토어에서 가져옵니다.
  const user = useSelector((state: RootState) => 
    state.userGroup.users.find(u => u.id === userId)
  );

  if (!user) {
    return null; // 또는 로딩 컴포넌트, 또는 유저 정보가 없음을 표시하는 컴포넌트
  }
  
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
        <TouchableOpacity style={{marginLeft: 10}}>
          <PinIcon color={isPinned ? Colors.theme : Colors.button} />
        </TouchableOpacity>
      </View>
    </View>
    
    <View style={styles.authorAndDateContainer}>
      <View style={styles.dateContainer}>
        <Text style = {{color: Colors.text}}> {date}</Text>
      </View>
      <View style={styles.authorContainer}>
        <View style = {[styles.mateStyle, {
              backgroundColor: user.color,}]}>
          <Text style={styles.mateText}>{user.name}</Text>
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

