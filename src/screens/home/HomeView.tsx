import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';
import { Colors } from '../../common/Colors';
import CommonStyles from '../../common/CommonStyles';
import RoundPlusButtonView from '../../common/RoundPlusButtonView';
import PostView, { PostProps } from './PostView';
import PlaceholderMessage from '../../common/PlaceholderMessage';
import RegisterPostModalContainer from './RegisterPostModalContainer';
import TodosContainer from '../calender/TodosContainer';

interface HomeViewProps {
  posts: PostProps[];
  getPosts: () => void; // 예시, 구체적인 타입은 구현에 따라 달라질 수 있음
  editPin: (id: number, isPinned: boolean) => void;
}

const HomeView:React.FC<HomeViewProps> = ({posts, getPosts, editPin}) => {
  console.log('HomeView posts:', posts);
  const [modalVisible, setModalVisible] = useState<boolean>(false); // 모달의 표시 상태를 관리하는 state
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [editingPostId, setEditingPostId] = useState<number>(-1);
  const [editingPostContent, setEditingPostContent] = useState<string>('');

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
    setEditingPostId(-1);
    setEditingPostContent('');
  }
  
  const toggleModalMode = (mode: 'create' | 'edit') => {
    if(mode==='create') setModalMode('create');
    else setModalMode('edit');
  }

  const [roundBoxHeight, setRoundBoxHeight] = useState<number>(0);

  //round box 길이 변경 함수
  useEffect(() => {
    console.log("HomeView roundBoxHeight: ", roundBoxHeight);
  }, [roundBoxHeight]); // roundBoxHeight가 변경될 때마다 실행됨
  
  return (
    <View style={CommonStyles.baseContainer}>
      <SafeAreaView style={CommonStyles.safearea}>
      {/* 이번주 할일 */}
      <View style={[CommonStyles.section, {marginTop: 20}]}>
        <TodosContainer />
      </View>

      {/* 피드 */}
      <View 
        style={[CommonStyles.section, {minHeight: 600}]}
        onLayout={(event) => {
          const { y } = event.nativeEvent.layout;
          console.log('y of Feed: ', y);
          const calculatedHeight = y * 4 / 5;
          setRoundBoxHeight(calculatedHeight);
        }}
      >
        <Text style={[styles.title, { color: 'black' }]}>피드</Text>
        <ScrollView>
          { posts.length > 0 ? (
            posts.map((post) => (
              <PostView
                key={post.id}
                id={post.id}
                content={post.content}
                isPinned={post.isPinned}
                userId={post.userId}
                userName={post.userName}
                userColor={post.userColor}
                date={post.date} 
                groupId={post.groupId} 
                openModal={() => openModal()}
                setModalMode={()=> toggleModalMode('edit')}
                setEditingPostId={() => setEditingPostId(post.id)}
                setEditingPostContent={() => setEditingPostContent(post.content)}
                editPin={() => editPin(post.id, post.isPinned)}
              />
            ))
          ) : (
            <PlaceholderMessage msg='등록된 게시물이 없습니다.' fontSize={18} />
          )}
        </ScrollView>
      </View>

      {/* roundBox */}
      <View style={[styles.roundBox, {height: roundBoxHeight}]}></View>
      </SafeAreaView>

      {/* round plus button */}
      <View style={{alignItems: 'flex-end', paddingHorizontal: '4%'}}>
      <TouchableOpacity 
          onPress={() => {
            setEditingPostId(-1);
            toggleModalMode('create');
            openModal();
          }} 
          style={{width: 50}}>
        <RoundPlusButtonView />
      </TouchableOpacity>
      </View>
      <RegisterPostModalContainer mode={modalMode} isVisible={modalVisible} id={editingPostId} postContent={editingPostContent} onClose={()=>closeModal()} getPosts={getPosts}/>
    </View>
  );
}

const styles = StyleSheet.create({
  roundBox: {
    zIndex: 1, // 낮은 zIndex로 맨 뒤에 위치
    backgroundColor: Colors.theme,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'absolute',
    width: '100%', // 너비 
  },

  title:{
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginVertical: 15,
    marginHorizontal: '5%',
  },
});

export default HomeView;
