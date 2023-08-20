import { mvs } from '@config/metrices'
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        borderWidth: mvs(1),
        borderColor: '#000000',
        borderRadius: mvs(4),
        marginVertical: mvs(10),
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: mvs(14),
        fontSize: mvs(16),
        minHeight: mvs(150),
        maxHeight: mvs(200),
        textAlignVertical: 'top', // This makes the text start at the top of the input
    },
})