/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Alert,
	SafeAreaView,
	BackHandler
} from 'react-native';

import { AppNavigator } from "./src/AppNavigator";

const Navigator = AppNavigator();
export default class App extends Component{
	constructor(){
		super();

		this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	}

	handleBackPress() {
        Alert.alert(
            'Confirm exit',
            'Do you want to quit the app?',
            [
				{text: 'YES', onPress: () => BackHandler.exitApp()},
                {text: 'NO', style: 'cancel'}
            ]
        );
        return true;    // Very important, prevents the default functionality of exiting the app.
    }

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Navigator/>
			</SafeAreaView>
    	)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
