import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PlaceholderMessage from '../../common/PlaceholderMessage';
import CommonStyles from '../../common/CommonStyles';

interface NoticificationProps {
  id: number;
  content: string;
  date: string;
}

const NoticificationView: React.FC<NoticificationProps> = ({content, date}) => {
  return (
    <View style={CommonStyles.generalBox}>
      <Text>{content}</Text>
      <Text>{date}</Text>
    </View>
  )
}

const NormalNoticificationsContainer: React.FC = () => {
  const [noticifications, setNoticifications] = useState<NoticificationProps[]>([]);

  useEffect(() => {
    // API에서 데이터를 가져오는 함수
    const fetchNoticifications = async () => {
      try {
        const response = await fetch('http://54.180.100.242:3000/notis/aaaaaa');
        let data: NoticificationProps[] = await response.json();

        // 서버 데이터를 클라이언트의 데이터 구조로 변환
        data = data.map((item: any) => ({
          id: item.id,
          content: item.content,
          date: item.createdAt.substring(0,10),
        }));

        setNoticifications(data);

      } catch (error) {
           console.error('Failed to fetch NormalNotifications:', error);
        // 기본 동작: 빈 배열로 설정
        setNoticifications([]);
      }
    };

    fetchNoticifications();
  }, []);

  return (
    <ScrollView>
        {noticifications.length > 0 ? (
          noticifications.map((item) => (
            <NoticificationView
              key={item.id.toString()}
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

export default NormalNoticificationsContainer;
