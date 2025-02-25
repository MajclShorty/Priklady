import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
    return ( 
        <View style={styles.margin}>
            <Image source={props.imageSource} />
            <Text>{props.title}</Text>
            <Text>Image Score - {props.imageScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    margin: {
        marginVertical: 15
    }
});

export default ImageDetail;
