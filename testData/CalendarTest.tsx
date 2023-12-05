export const generateTestCalendarData = (): Record<string, { selected: boolean }> => {
    const today = new Date();
    const startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1); // 이전 달의 1일
    const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0); // 다음 달의 마지막 날
  
    const calendarData: Record<string, { selected: boolean }> = {};
    let currentDate = startDate;
  
    while (currentDate <= endDate) {
      const dateString = currentDate.toISOString().split('T')[0];
      calendarData[dateString] = { selected: false };
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return calendarData;
  };
  