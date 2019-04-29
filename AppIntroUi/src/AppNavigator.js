import { createSwitchNavigator, createAppContainer } from "react-navigation";

import AppScreens from "./utils/AppScreens";
import { AppScreenNames } from "./utils/AppScreenRoutes";

const LaunchNavigator = (initialScreen)=>{
    let routeConfig = {
        IntroScreen: {
            screen: AppScreens.IntroScreen
        },
        LoginScreen: {
            screen: AppScreens.LoginScreen
        },
        SampleScreen: {
            screen: AppScreens.SampleScreen
        }
    };

    let switchConfig = {
        initialRouteName: initialScreen
    }

    return createSwitchNavigator(routeConfig, switchConfig);
}

export const AppNavigator = ()=>{
    let initScreen = AppScreenNames.launch.IntroScreen;
    // let initScreen = AppScreenNames.launch.SampleScreen;

    return createAppContainer(LaunchNavigator(initScreen));
}