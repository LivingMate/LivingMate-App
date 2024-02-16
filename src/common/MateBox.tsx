import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Colors } from './Colors';

interface MateProps {
  userId?: string;
  userName?: string;
  userColor?: string;
  textSize: number;
  marginLeft?: number;
  marginRight?: number;
  showOnlyFirstLetter?: boolean;
}

const MateBox: React.FC<MateProps> = ({ userId, userName, userColor, textSize, showOnlyFirstLetter, marginLeft, marginRight}) => {
    
  const [name, setName] = useState<string>();
  const [color, setColor] = useState<string>();

  useEffect(() => {
    if (!userId || !userName || !userColor)  {
      setName('탈퇴');
      setColor('Colors.text');
    } 
    else {
      if(showOnlyFirstLetter==true) {
        setName(userName.charAt(0));
      } else {
        setName(userName);
      }
      setColor(color);
    }
  }, []); // dependency 배열에 추가  
  
  return (
        <View style = {[styles.container, {backgroundColor: color, marginLeft: marginLeft, marginRight: marginRight}]}>
          <Text style={[styles.text, {fontSize: textSize}]}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      marginVertical: 2,
      alignSelf: 'flex-start', // 내부 View가 Text 크기에 맞춰 왼쪽 정렬
    },
  
    text: {
      color: '#ffffff',
      fontWeight: 'bold',
      padding: 5,
    },
  });
  
export default MateBox;
  
  
  