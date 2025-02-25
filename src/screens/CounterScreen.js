import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
    // state == { count: number }
    // action == { changeNumber: "increment" || "decremenet", amount: 1 }
    switch (action.changeNumber){
        case "increment":
            return { ...state, count: state.count + action.amount }
        case "decrement":
            return { ...state, count: state.count - action.amount }
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 } )

    return (
        <View>
            <Button title="Increase" onPress={() => { dispatch ({ changeNumber: "increment", amount: 1 }) }} />
            <Button title="Desrease" onPress={() => { dispatch ({ changeNumber: "decrement", amount: 1 }) }} />
            <Text>Current Count: { state.count }</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;