import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PlaceholderMessage from '../../components/PlaceholderMessage';
import CommonStyles from '../../components/CommonStyles';

interface Noticification {
  id: number;
  content: string;
  date: string;
}

const NoticificationView: React.FC<Noticification> = ({content, date}) => {
  return (
    <View style={CommonStyles.generalBox}>
      <Text>{content}</Text>
      <Text>{date}</Text>
    </View>
  )
}

const AppNoticifications: React.FC = () => {
  const [noticifications, setNoticifications] = useState<Noticification[]>([]);

  useEffect(() => {
    // API에서 데이터를 가져오는 함수
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://54.180.100.242:3000//notis/aaaaaa');
        let data: Noticification[] = await response.json();

        // 서버 데이터를 클라이언트의 데이터 구조로 변환
        data = data.map((item: any) => ({
          id: item.id,
          content: item.content,
          date: item.createdAt.substring(0,10),
        }));

        setNoticifications(data);
      } catch (error) {
        // data가 빈 배열일 경우, 빈 배열 setting
        console.error('Failed to fetch posts:', error);
        setNoticifications([]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <ScrollView>
        {noticifications.length > 0 ? (
          noticifications.map((item) => (
            <NoticificationView
              key={item.id}
              id={item.id}
              content={item.content}
              date={item.date}        
            />
          ))
        ) : (
          <PlaceholderMessage msg='알림이 없습니다.' fontSize={18} />
        )}
      </ScrollView>
  );
};

export default AppNoticifications;
