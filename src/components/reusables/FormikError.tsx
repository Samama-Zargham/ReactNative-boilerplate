
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnyIcon, { Icons } from './AnyIcon';
import { colors } from '../../others/config/colors';
import { mvs } from '../../others/utils/responsive';
import { fontFamily } from '../../others/config/fonts';

// create a component
export const FormikError = ({ error, top }: any) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AnyIcon
                disabled
                type={Icons.MaterialIcons}
                name={'error'}
                size={14}
                color={colors.error}
                style={{ top: 1.5, marginRight: 4 }}
            />
            <Text style={[styles.errorText, top && { marginTop: mvs(top) }]}>
                {error}
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    errorText: {
        fontSize: 12,
        color: colors.error,
        fontFamily: fontFamily[400],
        marginTop: 3,
    },
});