import Rect from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    //const greeting = <Text>Ahoj smrdis</Text>; 
    
    const name = 'Michal';

    return (
        <View>
            <Text style={styles.headerStyle}>Getting started with react native!</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    );

}; 

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 45
    },
    subHeaderStyle:{
        fontSize: 20
    }
});

export default ComponentsScreen;