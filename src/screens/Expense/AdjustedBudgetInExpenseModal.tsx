import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CommonStyles from '../../Components/CommonStyles';
import { Colors } from '../../Components/Colors';
import MateBox from '../../Components/MateBox';

interface MateSpendingProps {
    user: string;
    spendingNet: number;
    spendingsOnAvg: number;
}

// ModalDialogProps 인터페이스 정의: 모달의 visible 상태와 onClose 함수 타입을 정의
interface AdjustedBudgetInExpenseModalProps {
    visible: boolean;     // 모달의 표시 여부를 결정하는 boolean 값
    onClose: () => void;  // 모달을 닫는 함수
    mateSpendings: MateSpendingProps[];
    groupSum: number;
    groupAvg: number;
}

const MateSpeding: React.FC<MateSpendingProps> = ({user, spendingNet, spendingsOnAvg}) => {
    const renderMateSpendingsOnAvg = () => {
        let moneyWithSign = spendingsOnAvg.toLocaleString();
        if(moneyWithSign[0]!='-') moneyWithSign = '+'+moneyWithSign;
        return (
            <Text>{'('+moneyWithSign+'원)'}</Text>
        )
    }
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{width: '20%', justifyContent: 'center', paddingLeft: 4}}>
                <MateBox userId={user} textSize={13} />
            </View>
            <View style={styles.moneyContainer}>
                <Text style={styles.moneyText}>{spendingNet.toLocaleString()+'원'}</Text>
            </View>
            <View style={styles.moneyContainer}>
                <Text style={styles.moneyText}>{renderMateSpendingsOnAvg()}</Text>
            </View>
        </View>
    )
}

// ModalDialog 함수형 컴포넌트: ModalDialogProps 인터페이스를 props로 사용합니다.
const AdjustedBudgetInExpenseModal: React.FC<AdjustedBudgetInExpenseModalProps> = ({ visible, onClose, mateSpendings, groupSum, groupAvg}) => {
    return (
        // Modal 컴포넌트: visible과 transparent 속성을 설정합니다.
        <Modal
            visible={visible}               // 모달의 표시 여부
            transparent={true}             // 투명 배경을 사용하여 모달 뒤의 내용이 보이도록 설정
            animationType="fade"           // 모달 등장 애니메이션 타입을 fade로 설정
        >
            {/* TouchableOpacity 컴포넌트: 사용자가 터치하면 onClose 함수가 호출되도록 설정 */}
            <TouchableOpacity 
                style={styles.overlay}     // overlay 스타일 적용
                activeOpacity={1}           // 터치 시 투명도 변경 없음
                onPressOut={onClose}        // 터치가 끝날 때 onClose 함수 실행
            >
                <View style={[styles.container]}>
                    <Text style={styles.title}> 정산 내역 </Text>
                    <View style={styles.content}>
                        { mateSpendings.map((mateSpending) => (
                            <MateSpeding 
                                user={mateSpending.user}
                                spendingNet={mateSpending.spendingNet}
                                spendingsOnAvg={mateSpending.spendingsOnAvg}
                            />
                            ))
                        }
                    </View>
                    <View style={[styles.content, {flexDirection: 'row'}]}>
                        {/*groupMemberSpending 과 간격 맞추기 위한 컴포넌트 */}
                        <View style={{width: '20%'}} />
                        <View style={styles.moneyContainer}>
                            <Text style={styles.moneyText}>{groupSum.toLocaleString()+'원'}</Text>
                        </View>
                        <View style={styles.moneyContainer}>
                            <Text style={styles.moneyText}>{'('+groupAvg.toLocaleString()+'원)'}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={[styles.buttonText, {color: Colors.text}]}> 취소 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.roundedbutton}
                            onPress={onClose}
                        >
                            <Text style={styles.buttonText}> 정산알림 보내기 </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
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
    },
   
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
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
        alignItems: 'flex-end',
    },
   
    moneyText: {
        fontSize: 20,
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

    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 배경
    },
});

export default AdjustedBudgetInExpenseModal;
