// PostView.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../common/Colors';
import ThreeDotsIcon from '../../assets/icons/ThreeDotsIcon';
import CommonStyles from '../../common/CommonStyles';
import MateBox from '../../common/MateBox';

export interface BudgetProps {
  id: number;
  price: number;
  category: string;
  groupId: string;
  subCategory: string;
  content: string;
  userId?: string;
  date: string;
}
interface BudgetViewProps extends BudgetProps{
  
}

const BudgetView: React.FC<BudgetViewProps> = ({id, userId, groupId, price, content, category, subCategory, date }) => {
  const loggedInUserId = "asdf000";
  // userId가 현재 로그인한 사용자의 userId와 일치하면 버튼을 표시하고 아니면 감춥니다.
  const showButton = userId === loggedInUserId;
  console.log('userId: ', userId, ' budget id: ', id, ',showButton: ',showButton);
  const [isFocused, setIsFocused] = useState(false);

  return(
  <View style={styles.generalBox}>
    {/* 날짜, 버튼 */}
    <View style={styles.dateAndButtonContainer}>
      <View style = {styles.dateContainer}>
        <Text style = {{color: Colors.text, marginLeft: 8, marginTop: 5}}>{date}</Text>
      </View>
        {/* 버튼(threeDots, 수정/삭제) */}
        {showButton && (
          <View style={styles.buttonContainer}>
              <TouchableOpacity
              onPressIn={() => setIsFocused(true)}
              onPressOut={() => setIsFocused(false)}
              style={[styles.buttonContainer, isFocused && styles.focused]}
              >
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
    <View style={styles.priceAndAuthorContainer}>
      <Text style={[styles.priceText, {marginRight: 7}]}>{price}원</Text>
      <MateBox
          userId={userId}
          textSize={12}
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

  button2Container: {
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

  priceAndAuthorContainer : {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  text: {
    fontSize: 16,
    color: '#000000',
  },

  priceText: {
    fontSize: 19,
  },

  buttonContainer: {
    paddingVertical: 12,
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

export default React.memo(BudgetView);
