import React, { useState } from 'react';
import { Alert } from 'react-native';
import { addData } from '../../api/APIs';
import EntryModalView from './EntryModalView';

type modeType = 'new' | 'existing';

interface EntryModalContainerProps {
  mode: modeType;
  isVisible: boolean;
  groupId?: string;
  onClose: () => void;
  handleEntry: () => void;
}

const EntryModalContainer: React.FC<EntryModalContainerProps> = ({ mode, groupId, isVisible, onClose, handleEntry}) => {
  console.log('EntryModal initial mode:', mode);

  const handleCancel = () => {
    onClose();
  };

  {/*entryNew */}
  const entryNew = async (content: string) => {
    console.log('EntryModal mode: new');
    if (content !== '') {
      // JSON 데이터 생성
      const newGroupName = {
        content: content,
      };
      console.log('entryNew will be sended: ', newGroupName);
  
      try {
        // addData 함수를 사용하여 서버에 POST 요청
        const path = '/group/create'; 
        const response = await addData<typeof newGroupName, any>(path, newGroupName);
        console.log('entryNew 서버 응답:', response);
      } catch (error) {
        console.error('entryNew 서버 요청 실패:', error);
        handleEntry();
      }
    } else {
      Alert.alert(
        '',
        '그룹 이름을 입력해주세요',
        [{ text: '확인' }],
        { cancelable: false }
      );
    }
  };
  {/*entryExisting */}
  const entryExisting = async (content: string) => {
    console.log('EntryModal mode: existing');
    if (content !== '') {
      // JSON 데이터 생성
      const inviteCode = {
        content: groupId,
      };
      console.log('entryExisting groupId will be sended: ', inviteCode);
  
      try {
        // addData 함수를 사용하여 서버에 POST 요청
        const path = '/group/create'; 
        const response = await addData<typeof inviteCode, any>(path, inviteCode);
  
        console.log('entryExisting  서버 응답:', response);
      } catch (error) {
        console.error('entryExisting 서버 요청 실패:', error);
        handleEntry();
      }
    } else {
      Alert.alert(
        '',
        '초대코드를 입력해주세요',
        [{ text: '확인' }],
        { cancelable: false }
      );
    }
  };

  const entryGroup = mode === 'new' ? entryNew : entryExisting;

  return (
    <EntryModalView
      mode={mode}
      isVisible={isVisible} 
      handleCancel={handleCancel} 
      entryGroup={entryGroup} 
    />
  );
};

export default EntryModalContainer;
