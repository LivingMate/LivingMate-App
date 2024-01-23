import * as Notifications from 'expo-notifications';

Notifications.setNotificationChannelAsync('my-channel', {
  name: 'My Channel',
  importance: Notifications.AndroidImportance.MAX,
  vibrationPattern: [0, 250, 250, 250],
  lightColor: '#FF231F7C',
});

Notifications.scheduleNotificationAsync({
    content: {
      title: '알림 제목',
      body: '알림 내용',
    },
    trigger: null, // 즉시 표시
});

Notifications.addNotificationReceivedListener((notification) => {
    // 알림을 받았을 때 실행할 코드
});
  
  Notifications.addNotificationResponseReceivedListener((response) => {
    // 알림을 눌러 응답했을 때 실행할 코드
});
  
const scheduleNotification = async () => {
    const notificationContent = {
      title: '알림 제목',
      body: '알림 내용',
    };
  
    const trigger = {
      seconds: 0.1, // 0.1초 후에 알림을 표시
    };
  
    // 알림을 예약하고 반환된 notificationId를 얻음
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: notificationContent,
      trigger: trigger,
    });
  
    // notificationId를 저장하거나 필요한 작업을 수행
    console.log(`예약된 알림 ID: ${notificationId}`);
  };
  
  scheduleNotification();
