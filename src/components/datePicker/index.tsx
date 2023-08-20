
import React from 'react'
import { Platform } from 'react-native'
import DateTimePicker from "react-native-modal-datetime-picker";

interface Props {
    minimumDate: string;
    date: string,
    open: false,
    onConfirm: () => void;
    onCancel: () => void;
    mode: string;
}

export const DatePicker: React.FC<Props> = React.memo(({
    minimumDate = new Date(),
    date = new Date(),
    open = false,
    onConfirm = () => { },
    onCancel = () => { },
    mode = 'time'
}) => {
    return (
        <DateTimePicker
            testID="dateTimePicker"
            date={date}
            isVisible={open}
            mode={mode}
            display={Platform.OS === 'android' ? "default" : "spinner"}
            buttonTextColorIOS={'#000000'}
            minimumDate={minimumDate}
            is24Hour={true}
            onConfirm={onConfirm}
            onCancel={onCancel}
        />
    )
})