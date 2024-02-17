import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import PlaceholderMessage from '../../common/PlaceholderMessage';
import CommonStyles from '../../common/CommonStyles';
import { getData } from '../../api/APIs';
import { useAuth } from '../../auth/AuthContext';
import { Colors } from '../../common/Colors';

interface NoticificationProps {
  id: number;
  content: string;
  date: string;
}

const NoticificationView: React.FC<NoticificationProps> = ({content, date}) => {
  return (
    <View style={CommonStyles.generalBox}>
      <Text style={{fontSize: 15, marginBottom: 5}}>{content}</Text>
      <Text style={{fontSize: 12, color: Colors.text}}>{date}</Text>
    </View>
  )
}

const NormalNoticificationsContainer: React.FC = () => {
  const {userToken} = useAuth();
  const [noticifications, setNoticifications] = useState<NoticificationProps[]>([]);

  useEffect(() => {
    // API에서 데이터를 가져오는 함수
    const fetchNoticifications = async () => {
      try {
        const path = '/notis';
        const response = await getData<{
          'code': number,
          'message': string,
          'data':  {
            Notifications: {
              Id: number;
              text: string;
              createdAt: string;}[];
            } | string;
        }>(path, userToken);
        console.log('response:', response.data);

        if(typeof response.data !== 'string'){
            // 서버 데이터를 클라이언트의 데이터 구조로 변환
            const data = response.data.Notifications.map((item: any) => ({
              id: item.Id,
              content: item.text,
              date: item.createdAt.substring(0,10),
            }));
            setNoticifications(data);
          }
          console.log('noticifications sucessed');
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
