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
        }
    };

    let switchConfig = {
        initialRouteName: initialScreen
    }

    return createSwitchNavigator(routeConfig, switchConfig);
}

export const AppNavigator = ()=>{
    return createAppContainer(LaunchNavigator(AppScreenNames.launch.IntroScreen));
}