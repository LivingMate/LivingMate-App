import React, { useState } from 'react';
import { Alert } from 'react-native';
import { addData } from '../../api/APIs';
import RegisterPostModalView from './RegisterPostModalView';

interface RegisterPostModalContainerProps {
  mode: 'create' | 'edit';
  isVisible: boolean;
  onClose: () => void;
  fetchPosts: () => void;
}

const RegisterPostModalContainer: React.FC<RegisterPostModalContainerProps> = ({ mode, isVisible, onClose, fetchPosts}) => {
  const [text, setText] = useState<string>('');

  const handleCancel = () => {
    onClose();
    setText(''); // 모달이 닫힐 때 텍스트 필드 초기화
  };

  const regesterPost = async () => {
    if (text !== '') {
      // JSON 데이터 생성
      const newPost = {
        content: text,
        //userId: 'asdf124', // 사용자 ID 값을 여기에 대체
        //groupId: 'aaaaaa' // 그룹 ID 값을 여기에 대체
      };
      console.log('postData will be sended: ', newPost);
  
      try {
        // addData 함수를 사용하여 서버에 POST 요청
        const path = '/feed/aaaaaa/asdf124'; // 요청을 보낼 경로
        const response = await addData<typeof newPost, any>(path, newPost); // 여기서 응답 데이터 타입은 실제 응답에 맞게 수정해야 합니다.
  
        console.log('서버 응답:', response);
        onClose(); // 등록 버튼 클릭 후 모달 닫기
        setText(''); // 텍스트 필드 초기화
        fetchPosts(); // 게시글 목록 새로고침
      } catch (error) {
        console.error('AddPostModal 서버 요청 실패:', error);
      }
    } else {
      Alert.alert(
        '',
        '게시글 내용을 입력하세요',
        [{ text: '확인' }],
        { cancelable: false }
      );
    }
  };   

  return (
    <RegisterPostModalView isVisible={false} handleCancel={handleCancel} setContent={setText} regesterPost={regesterPost} />
  );
};

export default RegisterPostModalContainer;
