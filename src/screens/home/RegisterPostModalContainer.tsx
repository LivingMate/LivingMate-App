import React, { useState } from 'react';
import { Alert } from 'react-native';
import { addData, deleteData, updateData } from '../../api/APIs';
import RegisterPostModalView from './RegisterPostModalView';

interface RegisterPostModalContainerProps {
  mode: 'create' | 'edit';
  id: number;
  postContent: string;
  isVisible: boolean;
  onClose: () => void;
  fetchPosts: () => void;
}

const RegisterPostModalContainer: React.FC<RegisterPostModalContainerProps> = ({ mode, id, isVisible, postContent, onClose, fetchPosts}) => {
  console.log('mode:', mode);
  
  const [content, setContent] = useState<string>('');  

  const handleCancel = () => {
    onClose();
    setContent(''); // 모달이 닫힐 때 텍스트 필드 초기화
  };

  const addPost = async () => {
    if (content !== '') {
      // JSON 데이터 생성
      const newPost = {
        content: content,
      };
      console.log('postData will be sended: ', newPost);
  
      try {
        // addData 함수를 사용하여 서버에 POST 요청
        const path = '/feed/aaaaaa/asdf124'; // 요청을 보낼 경로
        const response = await addData<typeof newPost, any>(path, newPost); // 여기서 응답 데이터 타입은 실제 응답에 맞게 수정해야 합니다.
  
        console.log('addPost 서버 응답:', response);
        onClose(); // 등록 버튼 클릭 후 모달 닫기
        setContent(''); // 텍스트 필드 초기화
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
    if (content !== '') {
      try {
        // 서버에 업데이트 요청을 보냅니다.
        const updateContent = {
          content: content
        }

        const path = `/feed/${id}`;
        const response = await updateData(path, updateContent); // 업데이트할 데이터를 전달합니다.
        console.log('editPost 서버 응답:', response);

        onClose(); // 등록 버튼 클릭 후 모달 닫기
        setContent(''); // 텍스트 필드 초기화
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

  const deletePost = async (): Promise<void> => {
    try {
      const path = `/feed/aaaaaa/${id}`;
      await deleteData<void>(path); // deleteData 함수를 호출하여 DELETE 요청을 보냅니다.
      console.log(`Post with ID ${id} deleted successfully.`);
      onClose(); // 삭제 버튼 클릭 후 모달 닫기
      fetchPosts(); // 게시글 목록 새로고침
    } catch (error) {
      console.error(`Error deleting post with ID ${id}:`, error);
      // DELETE 요청 실패를 적절히 처리하세요
      // 여기에는 예를 들어 사용자에게 오류 메시지를 보여주는 등의 로직을 추가할 수 있습니다.
      throw error;
    }
  };

  const regesterPost = mode === 'edit' ? editPost : addPost;

  return (
    <RegisterPostModalView 
        mode={mode}
        isVisible={isVisible} 
        handleCancel={handleCancel} 
        setContent={setContent} 
        regesterPost={regesterPost} 
        deletePost={deletePost}
        initialContent={postContent}
      />
  );
};

export default RegisterPostModalContainer;