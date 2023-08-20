import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React, { useState, ReactNode } from 'react'
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu'
import LineSeprator from './LineSeprator';
import AnyIcon, { Icons } from './AnyIcon';
import navServices from '../../others/utils/navServices';
import { COMMON_STYLES } from '../../others/utils/commonStyles';
import { colors } from '../../others/config/colors';

interface navObj {
    label: string;
    screenName?: string;
    action?: () => void;
    iconName?: string;
}
type Props = {
    containerStyle?: StyleProp<ViewStyle>;
    children: ReactNode;
    navOnPress?: boolean;
    setValue?: (item: object) => void;
    optionsComponent?: ReactNode
} & ({
    navOnPress?: true;
    data?: navObj[];
} | {
    navOnPress?: false;
    value: string;
    data?: Array<string>;
})
const PopUpWrapper: React.FC<Props> = React.memo(({ setValue, optionsComponent, value, children, navOnPress = false, data, containerStyle }) => {
    const [visible, setvisible] = useState(false);
    const [isOpen, setisOpen] = useState(false)

    const handleOnPress = (item: navObj) => {
        if (item?.action) {
            item?.action()
        }
        else if (navOnPress) {
            navServices.navigate((item as navObj).screenName)
        } else {
            setValue(item)
        }
        setvisible(false), setisOpen(!isOpen)
    }
    return (
        <Menu
            opened={visible}
            onBackdropPress={() => { setvisible(false), setisOpen(!isOpen) }}>
            <MenuTrigger>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[{
                        flexDirection: 'row',
                        alignItems: 'center',
                        ...COMMON_STYLES.GeneralWidth,
                    }, containerStyle && containerStyle]}
                    onPress={() => { setvisible(true), setisOpen(!isOpen) }}>
                    {children || <Text>{'dummy'}</Text>}
                </TouchableOpacity>
            </MenuTrigger>
            <MenuOptions customStyles={optionsStyles}>
                {
                    optionsComponent ||
                    (data?.map((item: navObj, index: number) => {
                        let label = navOnPress ? item.label : String(item.label)
                        return (
                            <MenuOption onSelect={() => handleOnPress(item)}
                                key={index}>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => handleOnPress(item)}
                                    style={styles.option}>
                                    <Text style={[
                                        {
                                            color: (!navOnPress && (String(item) == String(value)))
                                                ? colors.primary :
                                                colors.BLACK
                                        }, styles.label
                                    ]} >{label || 'dummy'}</Text>
                                    {item?.iconName && <AnyIcon disabled type={Icons.MaterialIcons} size={20} name={item.iconName} />}
                                </TouchableOpacity>
                                {index !== data.length - 1 && <LineSeprator />}
                            </MenuOption>
                        )
                    }))
                }
            </MenuOptions>
        </Menu>
    )
})
const optionsStyles = {
    optionsContainer: {
        ...COMMON_STYLES.elevation8,
        zIndex: 1000,
        paddingHorizontal: 10,
        paddingTop: 10,
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,0.95)"
    }
};
export default PopUpWrapper

const styles = StyleSheet.create({
    label: { padding: 1, marginBottom: 10 },
    option: {
        ...COMMON_STYLES.rowDirectionWithSpaceBTW
    }
})