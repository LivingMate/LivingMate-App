import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import MateBox from '../../../common/MateBox';
import RightArrowIcon from '../../../assets/icons/RightArrowIcon';
import { Colors } from '../../../common/Colors';
import CommonStyles from '../../../common/CommonStyles';
import ArrowUpAndDownIcon from '../../../assets/icons/ArrowUpAndDownIcon';
import PlaceholderMessage from '../../../common/PlaceholderMessage';
import { AdjustedBudgetInNoticificationViewProps, AdjustedResultItemProps } from '../types';

//loggin 유저 얻는 용
import { testUser } from '../../../../testUsers';

const AdjustedResult: React.FC<AdjustedResultItemProps> = ({plusUserName, plusUserColor, minusUserName, minusUserColor, change}) => {
    return (
        <View style={{flexDirection: 'row', marginVertical: 5}}>
            {/* plusUser */}
            <View style={{justifyContent: 'center'}}>
                <MateBox userName={plusUserName} textSize={13} userColor={plusUserColor}/>
            </View>
            <View style={{justifyContent: 'center', paddingVertical: 2, marginHorizontal: 15}}>
                <RightArrowIcon />
            </View>
            {/* minusUser */}
            <View style={{justifyContent: 'center', paddingLeft: 4}}>
                <MateBox userId={minusUserName} textSize={12} userColor={minusUserColor}/>
            </View>
            <View style={styles.moneyContainer}>
                <Text style={styles.moneyText}>{'('+change.toLocaleString()+'원)'}</Text>
            </View>
        </View>
    )
}

const ReceiverAdjustedResult: React.FC<AdjustedResultItemProps> = ({minusUserName, minusUserColor, change}) => {
    return (
        <View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'center'}}>
            {/* minusUser */}
            <MateBox userId={minusUserName} textSize={12} userColor={minusUserColor}/>
            <Text style={{marginLeft: 5, fontSize: 16}}>님께 {change.toLocaleString()}원 이체하세요</Text>
        </View>
    )
}

const AdjustedBudgetInNoticificationView: React.FC<AdjustedBudgetInNoticificationViewProps> = ({lastCalculatedDate, adjustedResult}) => {

    const loggedUser = testUser.loggedUser;

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

    const Results: React.FC = () => {
        const [filteredResults, setFilteredResults] = useState<AdjustedResultItemProps[]>([]);
        
        useEffect(() => {
            const data = adjustedResult.filter(item => loggedUser === item.plusUserId);
            setFilteredResults(data);
        }, []);

        return (
                <View>
                {/* 조건에 따라 ReceiverAdjustedResults 렌더링 또는 Text 출력 */}
                {filteredResults  && filteredResults.length > 0 ? (
                    filteredResults.map((item, index) => (
                    <ReceiverAdjustedResult
                    key={index.toString()}
                    minusUserId={item.minusUserId}
                    minusUserColor={item.minusUserColor}
                    change={item.change}
                    />
                    ))
                ) : (
                    <Text style={styles.title}>{loggedUser}님이 송금해야할 금액은 없습니다.</Text> // 조건을 만족하는 item이 없을 경우 출력할 텍스트
                )}                

                {boxMaxHeightButtonFocused && (
                    <View>
                        <View style={{borderColor: Colors.text, borderTopWidth: 1, marginVertical: 15, marginHorizontal: 5}} />

                        {/* 전체 AdjustedResults 렌더링 */}
                        { adjustedResult.map((item, index) => (
                        <AdjustedResult
                            key={index.toString()}
                            plusUserId={item.plusUserId}
                            minusUserId={item.minusUserId}
                            plusUserColor={item.plusUserColor}
                            minusUserColor={item.minusUserColor}
                            change={item.change}
                        />
                        ))}
                    </View>
                )}
                 
              </View>
            );
    };      
    
    return (
        <View>
            {adjustedResult && adjustedResult.length > 0 ? (
                <View style={[CommonStyles.generalBox, {maxHeight: boxMaxHeight, paddingHorizontal: 15}]}>
                    <Text style={styles.title}>{formetDate(lastCalculatedDate)}까지의 정산 내역입니다.</Text>
                    <ScrollView>
                    <Results />
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

export default AdjustedBudgetInNoticificationView;

