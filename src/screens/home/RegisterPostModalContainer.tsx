import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { addData, updateData } from '../../api/APIs';
import RegisterPostModalView from './RegisterPostModalView';

interface RegisterPostModalContainerProps {
  mode: 'create' | 'edit';
  postId: number;
  postContent: string;
  isVisible: boolean;
  onClose: () => void;
  fetchPosts: () => void;
}

const RegisterPostModalContainer: React.FC<RegisterPostModalContainerProps> = ({ mode, isVisible, postId, postContent, onClose, fetchPosts}) => {
  const [text, setText] = useState<string>('');  

  const handleCancel = () => {
    onClose();
    setText(''); // 모달이 닫힐 때 텍스트 필드 초기화
  };

  const addPost = async () => {
    if (text !== '') {
      // JSON 데이터 생성
      const newPost = {
        content: text,
      };
      console.log('postData will be sended: ', newPost);
  
      try {
        // addData 함수를 사용하여 서버에 POST 요청
        const path = '/feed/aaaaaa/asdf124'; // 요청을 보낼 경로
        const response = await addData<typeof newPost, any>(path, newPost); // 여기서 응답 데이터 타입은 실제 응답에 맞게 수정해야 합니다.
  
        console.log('addPost 서버 응답:', response);
        onClose(); // 등록 버튼 클릭 후 모달 닫기
        setText(''); // 텍스트 필드 초기화
        fetchPosts(); // 게시글 목록 새로고침
      } catch (error) {
        console.error('addPost 서버 요청 실패:', error);
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

  // content 값을 업데이트하는 함수
  const editPost = async () => {
    if (text !== '') {
      try {
        // 서버에 업데이트 요청을 보냅니다.
        const updateContent = {
          content: text
        }

        const path = `/feed/${postId}`;
        const response = await updateData(path, updateContent); // 업데이트할 데이터를 전달합니다.
        console.log('editPost 서버 응답:', response);

        onClose(); // 등록 버튼 클릭 후 모달 닫기
        setText(''); // 텍스트 필드 초기화
        fetchPosts(); // 게시글 목록 새로고침
                
      } catch (error) {
        console.error('editPost 서버 요청 실패:', error);
      }
    } else {
      Alert.alert(
        '',
        '수정사항이 없으면 취소를 눌러주세요',
        [{ text: '확인' }],
        { cancelable: false }
      );
    }
  };

  const regesterPost = mode === 'edit' ? editPost : addPost;

  return (
    <RegisterPostModalView 
        isVisible={isVisible} 
        handleCancel={handleCancel} 
        setContent={setText} 
        regesterPost={regesterPost} 
        initialContent={postContent}
      />
  );
};

export default RegisterPostModalContainer;
