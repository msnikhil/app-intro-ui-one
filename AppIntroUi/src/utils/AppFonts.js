import {Platform} from "react-native";

export const AppFonts = {
    Primary: {
        SansSerif: {
            Thin: Platform.select({ios: "Montserrat-Thin", android: "Montserrat-Thin"}),
            Light: Platform.select({ios: "Montserrat-Light", android: "Montserrat-Light"}),
            Regular: Platform.select({ios: "Montserrat-Regular", android: "Montserrat-Regular"}),
            Bold: Platform.select({ios: "Montserrat-Bold", android: "Montserrat-Bold"})
        }
    },
    Secondary: {
        SansSerif: {
            Thin: Platform.select({ios: "Raleway-Thin", android: "Raleway-Thin"}),
            Light: Platform.select({ios: "Raleway-Light", android: "Raleway-Light"}),
            Regular: Platform.select({ios: "Raleway-Regular", android: "Raleway-Regular"}),
            Bold: Platform.select({ios: "Raleway-Bold", android: "Raleway-Bold"})
        }
    },
    Tertiary: {
        SansSerif: {
            Thin: Platform.select({ios: "Lato-Hairline", android: "Lato-Hairline"}),
            Light: Platform.select({ios: "Lato-Light", android: "Lato-Light"}),
            Regular: Platform.select({ios: "Lato-Regular", android: "Lato-Regular"}),
            Bold: Platform.select({ios: "Lato-Bold", android: "Lato-Bold"}),
        }
    }
}