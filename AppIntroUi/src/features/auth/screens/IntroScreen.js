//import libraries
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { AppScreenNames } from '../../../utils/AppScreenRoutes';

// create a component
class IntroScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>IntroScreen</Text>
                <TouchableOpacity style={{padding: 10, backgroundColor: "blue"}} onPress={()=>this.props.navigation.navigate(AppScreenNames.launch.LoginScreen)}>
                    <Text style={{color: "#FFFFFF"}}>Goto login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

//make this component available to the app
export default IntroScreen;
