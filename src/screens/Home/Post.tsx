// PostView.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../Components/Colors';
import PinIcon from '../../../assets/Icons/PinIcon';
import ThreeDotsIcon from '../../../assets/Icons/ThreeDotsIcon';
import CommonStyles from '../../Components/CommonStyles';

interface PostProps {
  content: string;
  isPinned: boolean;
  authorName: string;
  authorColor: string;
  date: string;
 //onEdit: (content: string) => void;
 //onPin: (isPinned: boolean) => void
}

const Post: React.FC<PostProps> = ({ content, isPinned, authorName, authorColor, date }) => {
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
        >
          <PinIcon />
        </TouchableOpacity>
      </View>
    </View>
    
    <View style={styles.authorAndDateContainer}>
      <View style={styles.dateContainer}>
        <Text style = {{color: Colors.text}}> {date}</Text>
      </View>
      <View style={styles.authorContainer}>
        <View style = {[styles.mateStyle, {
              backgroundColor: authorColor,}]}>
          <Text style={styles.mateText}>{authorName}</Text>
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

