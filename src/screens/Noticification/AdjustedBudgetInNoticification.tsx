import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, DimensionValue } from 'react-native';
import PlaceholderMessage from '../../Components/PlaceholderMessage';

import CommonStyles from '../../Components/CommonStyles';
import MateBox from '../../Components/MateBox';
import RightArrowIcon from '../../Assets/Icons/RightArrowIcon';
import { Colors } from '../../Components/Colors';
import ArrowUpAndDownIcon from '../../Assets/Icons/ArrowUpAndDownIcon';

interface AdjustedResultProps {
    plusUserId?: string,
    minusUserId: string;
    change: number;
}

const AdjustedResult: React.FC<AdjustedResultProps> = ({plusUserId, minusUserId, change}) => {
    return (
        <View style={{flexDirection: 'row', marginVertical: 5}}>
            {/* plusUser */}
            <View style={{justifyContent: 'center'}}>
                <MateBox userId={plusUserId} textSize={13} />
            </View>
            <View style={{justifyContent: 'center', paddingVertical: 2, marginHorizontal: 15}}>
                <RightArrowIcon />
            </View>
            {/* minusUser */}
            <View style={{justifyContent: 'center', paddingLeft: 4}}>
                <MateBox userId={minusUserId} textSize={12} />
            </View>
            <View style={styles.moneyContainer}>
                <Text style={styles.moneyText}>{'('+change.toLocaleString()+'원)'}</Text>
            </View>
        </View>
    )
}

const ReceiverAdjustedResult: React.FC<AdjustedResultProps> = ({minusUserId, change}) => {
    return (
        <View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'center'}}>
            {/* minusUser */}
            <MateBox userId={minusUserId} textSize={12} />
            <Text style={{marginLeft: 5, fontSize: 16}}>님께 {change.toLocaleString()}원 이체하세요</Text>
        </View>
    )
}

const AdjustedBudgetInNoticification: React.FC = () => {
    
    const [lastCalculatedDate, setLastCalculatedDate] = useState<string>('');
    const [adjustedBudgetData, setAdjustedBudgetData] = useState<AdjustedResultProps[]>([]);
    const loggedUser = "박시온";

    const [boxMaxHeightButtonFocused, setBoxMaxHeightButtonFocused] = useState<boolean>(false);
    const [boxMaxHeight, setBoxMaxHeight] = useState<number>(200);
    const [boxMaxHeightButtonColor, setBoxMaxHeightButtonColor] = useState<string>(Colors.button);
    
    const toggleBoxHeight = () => {
      setBoxMaxHeight(boxMaxHeightButtonFocused ? 200 : 630);
      setBoxMaxHeightButtonFocused(boxMaxHeightButtonFocused ? false: true)
      setBoxMaxHeightButtonColor(boxMaxHeightButtonFocused ? Colors.button : Colors.theme)
    };

    const formetDate = (date: string) => {
        const newdate = new Date(date);
        const year = newdate.getFullYear();
        const month = newdate.getMonth() + 1;
        const day = newdate.getDate();
        return `${year}년 ${month}월 ${day}일`;
    }

    const renderResults = () => {
        const adjustedResults: JSX.Element[] = [];
        const receiverAdjustedResults: JSX.Element[] = [];
      
        adjustedBudgetData.map((item) => {
          adjustedResults.push(
            <AdjustedResult
              plusUserId={item.plusUserId}
              minusUserId={item.minusUserId}
              change={item.change}
            />
          );
      
          // 조건에 따라 receiverAdjustedResults 배열에 값을 추가
          if (loggedUser === item.plusUserId) {
            receiverAdjustedResults.push(
              <ReceiverAdjustedResult
                minusUserId={item.minusUserId}
                change={item.change}
              />
            );
          }
          return null; // map 함수에서 요소를 반환해야 함 중요! return값 없어서 오류났음.
        });
      
        return (
          <>
            {adjustedResults}
            <View style={{borderColor: Colors.text, borderTopWidth: 1, marginVertical: 15, marginHorizontal: 5}} />
            {receiverAdjustedResults}
          </>
        );
      };      

    useEffect(() => {
        // 초기 데이터 설정
        setLastCalculatedDate(formetDate('2024-01-14T18:15:22.311Z'));
        setAdjustedBudgetData([
            {
                "plusUserId": "박시온",
                "minusUserId": "박준유",
                "change": 26000
            },
            {
                "plusUserId": "박시온",
                "minusUserId": "김예원",
                "change": 46000
            },
        ]);
    }, []); // 빈 배열을 전달하여 초기 렌더링 시에만 실행

    return (
        <View>
            {adjustedBudgetData.length > 0 ? (
                
                <View style={[CommonStyles.generalBox, {maxHeight: boxMaxHeight, paddingHorizontal: 15}]}>
                    <Text style={styles.title}>{lastCalculatedDate}까지의 정산 내역입니다.</Text>
                    <ScrollView>
                    {renderResults()}
                    </ScrollView>
                    <TouchableOpacity 
                        style={{alignItems: 'flex-start'}} 
                        onPress={toggleBoxHeight}>
                        <ArrowUpAndDownIcon focused={boxMaxHeightButtonFocused} color={boxMaxHeightButtonColor}/>      
                    </TouchableOpacity>
                </View>
                
            ) : (
                <PlaceholderMessage msg='미정산 내역이 없습니다.' fontSize={18} />
            )}
        </View>
    );
};

// StyleSheet.create를 사용하여 스타일 정의
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        width: '90%',
        borderRadius: 12,
        paddingVertical: 20,
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
   
    title: {
        fontSize: 16,
        marginVertical: 7,
    },

    content: {
        borderTopWidth: 1,
        paddingVertical: 10,
        borderColor: Colors.text,
        marginTop: 5,
        width: '100%',
    },

    moneyContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 11,
    },
   
    moneyText: {
        fontSize: 18,
        marginVertical: 5,
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 5,
    },

    roundedbutton: {
        borderRadius: 7,
        backgroundColor: Colors.theme,
        justifyContent: 'center',
        alignItems: 'center',
        height: 29,
        marginLeft: 5,
        paddingHorizontal: 4,
    },
    
    buttonText: {
        fontSize: 14,
        color: '#ffffff',
    },
});

export default AdjustedBudgetInNoticification;

