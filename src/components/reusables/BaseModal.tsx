import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';

interface Props {
    width?: any,
    height?: any,
    toggleModal: () => void,
    modalvisible?: boolean,
    children?: any,
    backgroundColor?: string;
    onBottom?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    isBottomSheet?: boolean;
    colorPalette?: boolean
}

const BaseModal = React.memo(({
    // width,
    // height = 100,
    toggleModal,
    modalvisible,
    children,
    backgroundColor,
    // onBottom = false,
    // isBottomSheet,
    // colorPalette = false
    containerStyle
}: Props) => {
    return (
        <Modal
            avoidKeyboard
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.2}
            propagateSwipe={true}
            backdropColor="black"
            onBackdropPress={toggleModal}
            // {...extraProps}
            style={{ padding: 0, margin: 0 }}
            isVisible={modalvisible}>
            <View style={[
                {
                    backgroundColor: backgroundColor || 'rgba(255,255,255,0.95)',
                    alignSelf: "center",
                    borderRadius: 10,
                    padding: 20,
                }, containerStyle
            ]}>
                {children}
            </View>
        </Modal>
    )
})

export default BaseModal
