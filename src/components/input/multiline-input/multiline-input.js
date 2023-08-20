import { InputWrapper } from '@components/wrapper/inputWrapper';
import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './multiline-input.styles'
export function MultilineInput({
    inputTitle,
    headerStyle = {},
    ...props
}) {
    return (
        <InputWrapper inputTitle={inputTitle} headerStyle={headerStyle}>
            <TextInput
                style={styles.container}
                {...props}
            />
        </InputWrapper>
    )
}