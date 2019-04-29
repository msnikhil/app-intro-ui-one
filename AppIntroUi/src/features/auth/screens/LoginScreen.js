//import libraries
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { AppScreenNames } from "../../../utils/AppScreenRoutes";

import {AppFonts} from "../../../utils/AppFonts";
import {AppIcons} from "../../../utils/AppIcons";

import RoundedBtn from "../../../components/buttons/RoundedButton";

const userImgs = {
    one: require("../../../assets/images/13.jpg"),
    two: require("../../../assets/images/28.jpg"),
    three: require("../../../assets/images/44.jpg"),
    four: require("../../../assets/images/58.jpg"),
    five: require("../../../assets/images/63.jpg"),
    six: require("../../../assets/images/77.jpg"),
}

// create a component
class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.sectionWrap, {justifyContent: "center", alignItems: "center"}]}>
                    <Text style={[styles.screenText, {width: 150}]}>Create your</Text>
                    <Text style={[styles.screenText, {width: 150}]}>account</Text>
                    <Text style={[styles.screenInfoText, {width: "50%"}]}>(It's super quick!)</Text>
                </View>
                <View style={[styles.sectionWrap, {flex: 1}]}>
                    <View style={styles.imgListWrap}>
                        <View style={styles.imgWrap}>
                            <Image source={userImgs.one} style={styles.userImgNormal} resizeMode="contain"/>
                        </View>
                        <View style={styles.imgWrap}>
                            <Image source={userImgs.two} style={styles.userImgNormal} resizeMode="contain"/>
                        </View>
                        <View style={styles.imgWrap}>
                            <Image source={userImgs.three} style={styles.userImgEnlarged} resizeMode="contain"/>
                        </View>
                        <View style={styles.imgWrap}>
                            <Image source={userImgs.four} style={styles.userImgNormal} resizeMode="contain"/>
                        </View>
                        <View style={styles.imgWrap}>
                            <Image source={userImgs.five} style={styles.userImgNormal} resizeMode="contain"/>
                        </View>
                    </View>
                </View>
                <View style={[styles.sectionWrap, {justifyContent: "center", paddingHorizontal: 20}]}>
                    <View style={styles.actionBtnWrap}>
                        <RoundedBtn
                            btnText="Email"
                            btnIcon={AppIcons.emailFilledBlack}
                        />
                    </View>
                    <View style={styles.actionBtnWrap}>
                        <RoundedBtn
                            btnText="Facebook"
                            btnIcon={AppIcons.fbWhite}
                            btnWrapStyle={{backgroundColor: "#3b5998", borderWidth: 0}}
                            btnOnPressColor="#24365c"
                            btnIconStyle={{width: 18, height: 25}}
                            btnTextStyle={{color: "#fff"}}
                        />
                    </View>
                    <View style={styles.userLoginInfoWrap}>
                        <Text style={styles.smallText}>
                            Already registered? 
                        </Text>
                        <TouchableOpacity style={styles.loginTextPress}>
                            <Text style={styles.loginText}>Log in here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    sectionWrap: {
        flex: 2,
        justifyContent: "flex-start",
    },
    screenText: {
        textAlign: "center",
        fontFamily: AppFonts.Secondary.SansSerif.Bold,
        fontSize: 26,
        color: "#000000",
        marginBottom: 10,
    },
    screenInfoText: {
        textAlign: "center",
        fontFamily: AppFonts.Secondary.SansSerif.Light,
        fontSize: 12,
        color: "#000000",
    },
    imgListWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: -25,
        marginRight: -25,
    },
    imgWrap: {
        marginHorizontal: 10
    },
    userImgNormal: {
        width: 50,
        height: 50,
        borderRadius: 50/2
    },
    userImgEnlarged: {
        width: 80,
        height: 80,
        borderRadius: 80/2
    },
    actionBtnWrap: {
        marginBottom: 10
    },
    userLoginInfoWrap: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20
    },
    smallText: {
        fontFamily: AppFonts.Secondary.SansSerif.Regular,
        fontSize: 12,
        color: "#505050"
    },
    loginTextPress: {
        paddingHorizontal: 3
    },
    loginText: {
        fontSize: 12,
        fontFamily: AppFonts.Secondary.SansSerif.Bold,
        color: "#000000"
    }
});

//make this component available to the app
export default LoginScreen;
