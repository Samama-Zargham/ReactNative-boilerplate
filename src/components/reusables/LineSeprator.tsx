import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../../others/config/colors';

interface Props {
    width?: any;
    color?: string;
    vertical?: number
}
const LineSeprator: React.FC<Props> = React.memo(({
    width,
    vertical
}) => {
    return (
        <View style={[{
            borderTopColor: colors.LIGHT_GRAY,
            borderTopWidth: 1,
        }, width && { width }]} />
    )
})

export default LineSeprator

const styles = StyleSheet.create({})