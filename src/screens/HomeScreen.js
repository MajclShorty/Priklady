import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  
  return (
    <View>
        <Text style={styles.text}>Kurz React Native</Text>
         
        <Button onPress={ () => navigation.navigate("Components") } title="Go to Components Demo"/>

        <Button onPress={ () => navigation.navigate("List") } title="Go to List Demo" />

        <Button onPress={ () => navigation.navigate("Image") } title="Go to ImageScreen" />
 
        <Button onPress={ () => navigation.navigate("Counter") } title="Go to CounterScreen" />

        <Button onPress={ () => navigation.navigate("Color") } title="Go to ColorScreen" />

        <Button onPress={ () => navigation.navigate("Square") } title="Go to SquareScreen" />

        <Button onPress={ () => navigation.navigate("Text") } title="Go to TextScreen" />

        <Button onPress={ () => navigation.navigate("Box") } title="Go to BoxScreen" />

    </View> 
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 30
  },
});

export default HomeScreen;

