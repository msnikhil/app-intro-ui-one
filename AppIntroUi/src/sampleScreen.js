//import libraries
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import TestComponent from "./components/buttons/RoundedButton";

// create a component
class SampleScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TestComponent></TestComponent>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

//make this component available to the app
export default SampleScreen;
