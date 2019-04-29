//import libraries
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    StyleSheet,
} from 'react-native';
import PropTypes from "prop-types";

import { AppFonts } from "../../utils/AppFonts";
import { AppIcons } from "../../utils/AppIcons";

// create a component
class RoundedButton extends Component {
    constructor(){
        super();
    }

    static propTypes = {
        btnText: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
        btnWrapStyle: PropTypes.object,
        btnIcon: PropTypes.object,
        btnIconStyle: PropTypes.object,
        btnTextStyle: PropTypes.object,
        btnOnPressColor: PropTypes.string,
    }

    static defaultProps = {
        btnText: "Email",
        btnWrapStyle: {},
        btnTextStyle: {},
        btnIconStyle: {},
        btnIcon: null,
        btnOnPressColor: "#e6e6e6"
    }

    handleBtnPress(){
        if(this.props.onPress){
            requestAnimationFrame(()=>{
                this.props.onPress();
            })
        }
    }

    render() {
        return (
            <TouchableHighlight style={[styles.btnContainer, this.props.btnWrapStyle]} underlayColor={this.props.btnOnPressColor} onPress={()=>this.handleBtnPress()}>
                <View style={styles.btnContentWrap}>
                    <Text style={[styles.btnText, this.props.btnTextStyle]}>{this.props.btnText}</Text>
                    {this.props.btnIcon ? <Image source={this.props.btnIcon} style={[styles.btnIcon, this.props.btnIconStyle]} resizeMode="contain"/>: false}
                </View>
            </TouchableHighlight>
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
    btnContainer: {
        // width: "80%", 
        // flex: 1,
        height: 50, 
        paddingHorizontal: 25,
        borderRadius: 50/2, 
        backgroundColor: "#FFF", 
        borderWidth: 0.5, 
        borderColor: "#000", 
        justifyContent: "center"
    },
    btnContentWrap: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between", 
        alignItems: "center",
    },
    btnText: {
        color: "#000",
        fontFamily: AppFonts.Tertiary.SansSerif.Bold,
        fontSize: 15
    },
    btnIcon: {
        width: 25,
        height: 25,
    }
});

//make this component available to the app
export default RoundedButton;
