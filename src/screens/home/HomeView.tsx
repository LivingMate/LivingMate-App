import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';
import { Colors } from '../../common/Colors';
import CommonStyles from '../../common/CommonStyles';
import RoundPlusButtonView from '../../common/RoundPlusButtonView';
import TodosContainer from './TodosContainer';
import PostView, { PostProps } from './PostView';
import PlaceholderMessage from '../../common/PlaceholderMessage';
import RegisterPostModalContainer from './RegisterPostModalContainer';

interface HomeViewProps {
  posts: PostProps[];
  fetchPosts: () => void; // 예시, 구체적인 타입은 구현에 따라 달라질 수 있음
}

const HomeView:React.FC<HomeViewProps> = ({posts, fetchPosts}) => {
  
  const [modalVisible, setModalVisible] = React.useState(false); // 모달의 표시 상태를 관리하는 state
  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
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
                key={post.id.toString()}
                id={post.id}
                content={post.content}
                isPinned={post.isPinned}
                userId={post.userId}
                date={post.date} 
                groupId={post.groupId}           
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
      <TouchableOpacity onPress={toggleModalVisible} style={{width: 50}}>
        <RoundPlusButtonView />
      </TouchableOpacity>
      </View>
      <RegisterPostModalContainer mode={'create'} isVisible={modalVisible} onClose={toggleModalVisible} fetchPosts={fetchPosts}/>
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
