import {
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '@config/colors';
import { mvs } from '@config/metrices';
import { commonStyles } from '@config/commonStyles';
import Eye from '@resources/assets/svgs/Eye';
import { InputWrapper } from '@components/wrapper/inputWrapper';
import fontFamily from '@config/fonts';
import { FormikError } from '@components/reuseables/FormikError';

const PrimaryInput = ({
    placeholder,
    onChangeText,
    name,
    keyboardType,
    onBlur,
    value,
    eye,
    isforget,
    error,
    header,
    top = null,
    width,
    editable = true,
    headerStyle = {}
}) => {
    const [eyeSeen, seteyeSeen] = useState(false);
    let secure = eye && !eyeSeen;
    return (
        <View
            style={{
                marginTop: 0,
                ...commonStyles.GeneralWidth,
                marginTop: mvs(top ?? 13),
            }}>
            <InputWrapper inputTitle={header} headerStyle={{ ...headerStyle, color: error ? colors.error : colors.lightBlack }}>
                <View
                    style={[
                        styles.inputView,
                        { borderColor: error ? colors.error : colors.lightgray },
                    ]}>
                    <TextInput
                        name={name}
                        style={styles.input}
                        secureTextEntry={secure}
                        placeholderTextColor={colors.placeholder}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        autoCapitalize={'none'}
                        onChangeText={onChangeText}
                        onBlur={onBlur}
                        value={value}
                        editable={editable}
                    />
                    {eye &&
                        (eyeSeen ?
                            <Eye onPress={() => seteyeSeen(!eyeSeen)} color={error ? colors.error : colors.primary} />
                            :
                            <Eye onPress={() => seteyeSeen(!eyeSeen)} color={error ? colors.error : colors.darkGray} />
                        )}
                </View>
            </InputWrapper>
            {error && <FormikError error={error} />}
        </View>
    );
};

export default PrimaryInput;
const styles = StyleSheet.create({
    header: {
        fontFamily: fontFamily[400],
        fontSize: mvs(14),
        color: colors.textColor,
    },
    inputView: {
        height: mvs(49),
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: mvs(6),
    },
    input: {
        height: mvs(56),
        flex: 1,
        color: colors.textColor,
        fontSize: mvs(14),
        fontFamily: fontFamily[500],
        overflow: 'hidden',
    },
    errorText: {
        fontSize: 12,
        color: colors.error,
        fontFamily: fontFamily[400],
        marginTop: 3,
    },
});
