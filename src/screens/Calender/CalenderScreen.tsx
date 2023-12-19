import React from "react";
import { Calendar } from "react-native-calendars";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from '../../Components/Colors';
import CommonStyles from '../../Components/CommonStyles'
import { Shadow } from '../../Components/Shadow';

function CalendarScreen() {
  const markedDates = {
    '2022-02-26': { selected: true },
    '2022-02-27': { marked: true },
    '2022-02-28': { marked: true }
  }
  return (
    <View style={[CommonStyles.container, { backgroundColor: Colors.background }]}>
      <>
    <Calendar
        style={styles.calendar}
        markedDates={markedDates}
        theme={{
          selectedDayBackgroundColor: 'red',
          arrowColor: 'blue',
          dotColor: 'green',
          todayTextColor: 'yellow',
        }} />
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  }
});

export default CalendarScreen;