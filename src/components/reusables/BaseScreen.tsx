import React, { ReactNode } from "react";
import { TextStyle, View, ViewStyle } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { COMMON_STYLES } from "../../others/utils/commonStyles";
interface Props {
    children: ReactNode;
    bottomInset?: number;
    topInset?: number;
    refreshControl?: JSX.Element;
    isFullWidth?: boolean;
    paddingHorizontal?: number;
    paddingBottom?: number;
    marginTop?: number;
    scrollable?: boolean;
    containerStyle?: ViewStyle;
    style?: ViewStyle;
    titleStyle?: TextStyle;
    horizontal?: boolean;
    bottomViewColor?: any;
    isbackgroundColor?: boolean;
    scrollableBottomViewHeight?: string;
    generalWidth?: boolean;
    isBorderRadius?: any;
    edges?: any;
    isDrawer?: boolean;
    onlyDrawer?: boolean;
}

const BaseScreen: React.FC<Props> = ({
    children,
    scrollable = false,
    containerStyle,
    horizontal = false,
    bottomViewColor,
    isbackgroundColor = true,
    scrollableBottomViewHeight,
    generalWidth,
    isBorderRadius = true,
    isDrawer = false,
    edges,
    onlyDrawer = false
}) => {

    if (scrollable) {
        return (
            <View style={[{ flex: 1 }]}>
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={horizontal}
                    nestedScrollEnabled={true}
                    keyboardShouldPersistTaps="handled"
                    style={{ flex: 1 }}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ flex: 1 }}>{children}</View>
                    <View style={{
                        paddingTop: scrollableBottomViewHeight ?? "20%",
                        backgroundColor: bottomViewColor ?? 'white',
                    }} />
                </KeyboardAwareScrollView>
            </View>
        );
    }
    else return (
        <SafeAreaView
            edges={edges || ["right", "top", "left"]}
            style={[
                generalWidth && { ...COMMON_STYLES.GeneralWidth },
                { flex: 1, },
                isBorderRadius && { borderRadius: 10, },
                isbackgroundColor && { backgroundColor: "#FFFFFF" },
                containerStyle,
            ]}>
            <View style={{ flex: 1 }}>
                {children}
            </View>
        </SafeAreaView>
    );
}
export default BaseScreen;