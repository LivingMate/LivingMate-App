import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Colors } from './Colors';

interface MateProps {
    userId: string;
    textSize: number;
    showOnlyFirstLetter: boolean;
}

const MateBox: React.FC<MateProps> = ({ userId, textSize, showOnlyFirstLetter}) => {
    
  const [userName, setUserName] = useState<string>();
  const [userColor, setUserColor] = useState<string>();

  //let firstChar = str.charAt(0); 
  let name = '탈퇴';
  let color = Colors.text;

  useEffect(() => {
    if (userId!==null)  {
      name = '연결중';
      color = '#000000'
    } 
    
    if(showOnlyFirstLetter===true) {
      name = name.charAt(0);
    }

    setUserName(name);
    setUserColor(color);

  }, []); // dependency 배열에 추가  
  
  return (
        <View style = {[styles.container, {backgroundColor: userColor,}]}>
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
      padding: 5,
    },
  
    text: {
      color: '#ffffff',
      fontWeight: 'bold',
    },
  });
  
export default MateBox;
  
  
  