import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SecondPrac = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          flex:1,
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          flex:2,
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: 'space-around',
    flexDirection: "row",
    width: "80%",
    height: 300,
    alignItems: 'stretch',
  },
});

export default SecondPrac;
