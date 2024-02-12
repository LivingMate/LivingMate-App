import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, Alert } from 'react-native';
import { Colors } from '../../common/Colors';

interface RegisterBudgetModalViewProps {
  mode: 'create' | 'edit';
  isVisible: boolean;
  onClose: () => void;
  regesterBudget: (content: string, price: number, category: string, subCategory: string) => void;
}

const RegisterBudgetModalView: React.FC<RegisterBudgetModalViewProps> = ({ mode, isVisible, onClose, regesterBudget}) => {
  const [content, setContent] = useState<string>('');
  const [price, setPrice] = useState<number>(-1);
  const [category, setCategory] = useState<string>('주거');
  const [subCategory, setSubCategory] = useState<string>('공과금');

  const handlePriceChange = (inputText: string) => {
    // 입력된 값이 숫자이고, 양수일 때만 state 업데이트
    const parsedNumber = parseInt(inputText, 10);
    if (!isNaN(parsedNumber) && parsedNumber >= 0) {
      setPrice(parsedNumber);
    }
  };

  const handleRegisterBudget = (content: string, price: number, category: string, subCategory: string) => {
    regesterBudget(content, price, category, subCategory);
    onClose();
    setContent('');
    setPrice(-1);
    setCategory('주거');
    setSubCategory('공과금');
  }

  const handleCancel = () => {
    onClose();
    setContent('');
    setPrice(-1);
    setCategory('주거');
    setSubCategory('공과금');
  }

  return (
    <Modal visible={isVisible} transparent animationType='fade'>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{borderBottomColor: Colors.text, borderBottomWidth: 1, marginBottom: 10,}}>
            <Text style={styles.titleText}>지출내역 등록</Text>
          </View>
          
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>지출명</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="제목을 입력하세요"
              onChangeText={setContent}
              placeholderTextColor={Colors.text}
            />
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>가격</Text>
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="숫자로 입력하세요"
              onChangeText={handlePriceChange}
              placeholderTextColor={Colors.text}
            />
          </View>

          {/* 카테고리  */}
          <View style={[styles.itemContainer, {marginTop: 10}]}>
            <Text style={styles.itemText}>카테고리</Text>
          </View>
            <TouchableOpacity>
                <View style={styles.categoryIconContanier}>
                  <View style = {styles.categoryShape}>
                    <Text style={{fontSize: 35, color: '#b9b9b9'}}>?</Text>
                  </View>
                  <Text style={styles.subCategoryText}>서브카테고리</Text>
              </View>
          </TouchableOpacity>
        
          <View style={styles.buttonsContainer}>
            <View style={[styles.buttonContainer, {justifyContent: 'flex-start'}]}>
              {mode == 'edit' && (
                <TouchableOpacity style={[styles.buttonShape, {backgroundColor: 'red'}]}>
                  <Text style={[styles.buttonText, {color: '#ffffff'}]}>삭제</Text>
                </TouchableOpacity>)
              }
            </View>
            <View style={[styles.buttonContainer,{justifyContent: 'flex-end'}]}>
              <TouchableOpacity 
                onPress={handleCancel}
                style={[styles.buttonShape, {marginRight: 5}]}>
                <Text style={styles.buttonText}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={()=>handleRegisterBudget(content, price, category, subCategory)}
                style={[styles.buttonShape, {backgroundColor: Colors.theme}]}
              >
                <Text style={[styles.buttonText, {color: '#ffffff'}]}>등록</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    paddingBottom: 10,
    borderRadius: 10,
    width: '80%',
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 7,
  },

  itemContainer: {
    marginVertical: 5,
  },

  textInputContainer: {
    marginTop: 5,
    marginBottom: 10,
  },

  textInput: {
    borderRadius: 6,
    backgroundColor: Colors.textInputField,
    height: 25,
    paddingHorizontal: 5,
  },

  itemText: {
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },

  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },

  buttonShape: {
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.text,
    fontSize: 16,
  },
  categoryIconContanier: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryShape:{
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#b9b9b9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subCategoryText: {
    color: Colors.text,
    fontSize: 15,
    marginLeft: 20,
  }
});

export default RegisterBudgetModalView;
