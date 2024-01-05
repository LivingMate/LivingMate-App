import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// MyModalProps 인터페이스 정의: 모달의 visible 상태와 onClose 함수 타입을 정의합니다.
interface MyModalProps {
    visible: boolean;     // 모달의 표시 여부를 결정하는 boolean 값
    onClose: () => void;  // 모달을 닫는 함수
}

// MyModal 함수형 컴포넌트: MyModalProps 인터페이스를 props로 사용합니다.
const MyModal: React.FC<MyModalProps> = ({ visible, onClose }) => {
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
                
                <View style={styles.modalView}>
                    <Text>모달의 내용</Text> 
                    {/* 여기에 모달의 다른 내용을 추가할 수 있습니다. */}
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

// StyleSheet.create를 사용하여 스타일 정의
const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 배경
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default MyModal;