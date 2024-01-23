// PostView.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../Components/Colors';
import ThreeDotsIcon from '../../Assets/Icons/ThreeDotsIcon';
import CommonStyles from '../../Components/CommonStyles';
import MateBox from '../../Components/MateBox';

interface BudgetProps {
  id?: number;
  loggedInUserId: string;
  amount: number;
  category: string;
  //subCategory: string;
  content: string;
  userId?: string;
  date: string;
 //onEdit: (content: string) => void;
 //onPin: (isPinned: boolean) => void;
}

const Budget: React.FC<BudgetProps> = ({loggedInUserId , amount,content, category, userId, date, id }) => {

  // userId가 현재 로그인한 사용자의 userId와 일치하면 버튼을 표시하고 아니면 감춥니다.
  const showButton = userId === loggedInUserId;
  console.log('budget id: ', id, ',showButton: ',showButton);

  return(
  <View style={styles.generalBox}>
    {/* 날짜, 버튼 */}
    <View style={styles.dateAndButtonContainer}>
      <View style = {styles.dateContainer}>
        <Text style = {{color: Colors.text, marginLeft: 8, marginTop: 5}}>{date}</Text>
      </View>
      {showButton && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <ThreeDotsIcon />
            </TouchableOpacity>
          </View>
      )}
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
      <Text style={[styles.amountText, {marginRight: 7}]}>{amount}원</Text>
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

  text: {
    fontSize: 16,
    color: '#000000',
  },

  amountText: {
    fontSize: 19,
  },
});

export default Budget;

