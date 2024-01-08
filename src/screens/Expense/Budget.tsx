// PostView.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../Components/Colors';
import PinIcon from '../../Assets/Icons/PinIcon';
import ThreeDotsIcon from '../../Assets/Icons/ThreeDotsIcon';
import NoticificationIcon from '../../Assets/Icons/NoticificationIcon';
import CommonStyles from '../../Components/CommonStyles';

interface BudgetProps {
  amount: number;
  category: string;
  //subCategory: string;
  content: string;
  authorName: string;
  authorColor: string;
  date: string;
 //onEdit: (content: string) => void;
 //onPin: (isPinned: boolean) => void
}

const Budget: React.FC<BudgetProps> = ({ amount ,content, category, authorName, authorColor, date }) => {
  return(
  <View style={styles.generalBox}>
    {/* 날짜, 버튼 */}
    <View style={styles.dateAndButtonContainer}>
      <View style = {styles.dateContainer}>
        <Text style = {{color: Colors.text, marginLeft: 8, marginTop: 5}}>{date}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <ThreeDotsIcon />
        </TouchableOpacity>
      </View>
    </View>
    
    {/* 카테고리, 내용 */}
    <View style={styles.categoryAndContentContainer}>
      <View style = {styles.categoryContainer}>
        <Text style={{fontSize: 35, color: '#b9b9b9'}}>?</Text>
      </View>
      <View style={[styles.contentContainer, {marginLeft: 4}]}>
        <Text style={[styles.text, {marginLeft: 4}]}>{content}</Text>
      </View>
    </View>

    {/* 금액, 작성자 */}
    <View style={styles.amountAndAuthorContainer}>
      <Text style={styles.amountText}>{amount}원</Text>
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

  dateAndButtonContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },

  dateContainer : {
    flex: 8,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 10,
  },

  categoryAndContentContainer:{
    flexDirection: 'row',
  },

  categoryContainer:{
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#b9b9b9',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },

  contentContainer:{
    alignItems: 'flex-start',
    marginVertical: 5,
  },

  amountAndAuthorContainer : {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  authorContainer : {
    alignItems: 'flex-end',
    marginHorizontal: 10,
  },

  text: {
    fontSize: 16,
    color: '#000000',
  },

  amountText: {
    fontSize: 22,
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

export default Budget;

