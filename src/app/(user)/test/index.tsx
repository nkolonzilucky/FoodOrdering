import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
dayjs.extend(relativeTime);

const TestingScreen = () => {
    console.log("Hello")
  return (
    <View>
      <View>
        <View>
          <Text> Order #21333</Text>
          <Text>
            {dayjs('2025-11-15').fromNow()}
          </Text>
        </View>
        <Text>"Cooking"</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  orderAndTime: {
    flex: 1,
    flexDirection: "row",
    gap: 6,
  },
  orderNumber: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
  },
  duration: {
    color: "gray",
    fontSize: 12,
  },
  status: {
    fontSize: 500,
    color: "black",
  },
});
export default TestingScreen