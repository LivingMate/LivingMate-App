import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Colors } from './Colors';

interface MateProps {
    userId?: string;
    textSize: number;
    userColor?: string;
    showOnlyFirstLetter?: boolean;
}

const MateBox: React.FC<MateProps> = ({ userId, textSize, showOnlyFirstLetter, userColor}) => {
    
  const [userName, setUserName] = useState<string>();
  const [user_Color, setUserColor] = useState<string>();

  //let firstChar = str.charAt(0); 
  let name = '탈퇴';
  let color = (userColor) ? userColor : Colors.text;

  useEffect(() => {
    if (userId)  {
      name = userId;
      color = color;
    } 
    
    if(showOnlyFirstLetter) {
      name = name.charAt(0);
    }

    setUserName(name);
    setUserColor(color);

  }, []); // dependency 배열에 추가  
  
  return (
        <View style = {[styles.container, {backgroundColor: user_Color,}]}>
          <Text style={[styles.text, {fontSize: textSize}]}>{userName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      margin: 1,
      alignSelf: 'flex-start', // 내부 View가 Text 크기에 맞춰 왼쪽 정렬
    },
  
    text: {
      color: '#ffffff',
      fontWeight: 'bold',
      padding: 5,
    },
  });
  
export default MateBox;
  
  
  