import { Platform, StyleSheet } from "react-native";
import { mvs } from "./responsive";

export const Margin = {
    Margin_4: mvs(4),
    Margin_5: mvs(5),
    Margin_6: mvs(6),
    Margin_7: mvs(7),
    Margin_8: mvs(8),
    Margin_9: mvs(9),
    Margin_10: mvs(10),
    Margin_12: mvs(12),
    Margin_14: mvs(14),
    Margin_16: mvs(16),
    Margin_18: mvs(18),
    Margin_24: mvs(24),
    Margin_32: mvs(32),
    Margin_40: mvs(40),
    Margin_48: mvs(48),
    Margin_52: mvs(52),
    Margin_60: mvs(60),
    Margin_70: mvs(70),
};
export const RADIUS = {
    BOX: mvs(10),
    SMALLBOX: mvs(5),
    OVAL: mvs(24),
    OVALBOX: mvs(20),
    MAXOVALBOX: mvs(32),
};
export const COMMON_STYLES = StyleSheet.create({
    GeneralWidth: {
        width: "95%",
        alignSelf: "center",
    },
    bottomSheet: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        width: "100%",
        borderTopLeftRadius: mvs(40),
        borderTopRightRadius: mvs(40),
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    absolute: {
        position: "absolute",
        overflow: "hidden",
    },
    centerAlign: {
        justifyContent: "center",
        alignItems: "center",
    },
    centerDiv: {
        flex: 1,
        alignSelf: "center",
    },
    rowDirection: {
        flexDirection: "row",
        alignItems: "center",
    },
    rowDirectionWithSpaceBTW: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    elevation1: {
        elevation: 1,
        shadowColor: "#4CA4FD",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
    },
    elevation10: {
        elevation: 10,
        shadowColor: "#4CA4FD",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    },
    elevation2: {
        elevation: 2,
        shadowColor: "#4CA4FD",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    elevation3: {
        elevation: 3,
        shadowColor: "#4CA4FD",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    elevationOnAllSides: {
        elevation: 4,
        shadowColor: "#4CA4FD",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 4.62,
    },
    elevation4: {
        elevation: 4,
        shadowColor: "#4CA4FD",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    elevationGrey: {
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1.5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 1.62,
    },
    elevation5: {
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    primaryElevation2: {
        elevation: 10,
        shadowColor: "#4CA4FD",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
    },
    elevation6: {
        elevation: 6,
        shadowColor: "#4CA4FD",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    elevation7: {
        elevation: 7,
        shadowColor: "#4CA4FD",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
    },
    elevation8: {
        elevation: 8,
        shadowColor: "#4CA4FD",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
    elevation9: {
        elevation: 9,
        shadowColor: "#4CA4FD",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
    },
    CENTER: {
        justifyContent: "center",
        alignItems: "center",
    },
});