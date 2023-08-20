import React, { ReactNode } from 'react';
import { Pressable, StyleProp, Text, TextProps, ViewProps } from 'react-native';
import { THEME } from '../../config/palette';
import { fontFamily } from '../../others/config/fonts';
import { mvs } from '../../others/utils/responsive';


interface Props extends TextProps {
  children: ReactNode;
  color?: string;
  bold?: boolean;
  Regular?: boolean;
  Medium?: boolean;
  semiBold?: boolean;
  FONT_32?: boolean;
  FONT_34?: boolean;
  FONT_24?: boolean;
  FONT_20?: boolean;
  FONT_22?: boolean;
  FONT_28?: boolean;
  FONT_18?: boolean;
  FONT_16?: boolean;
  FONT_14?: boolean;
  FONT_12?: boolean;
  FONT_10?: boolean;
  FONT_8?: boolean;
  FONT_9?: boolean;
  FONT_26?: boolean;
  handlePress?: () => void;
  center?: boolean;
  containerStyle?: StyleProp<ViewProps>
}

const AppText = (props: Props) => {
  const {
    handlePress,
    center,
    containerStyle,
    children,
    bold,
    color,
    Medium,
    semiBold,
    FONT_32,
    FONT_34,
    FONT_26,
    FONT_24,
    FONT_20,
    FONT_18,
    FONT_16,
    FONT_14,
    FONT_12,
    FONT_10,
    FONT_8,
    FONT_9,
    FONT_22,
    FONT_28
  } = props;

  let FONT_FAMILY = fontFamily[400];

  if (bold) {
    FONT_FAMILY = fontFamily[700];
  }

  if (Medium) {
    FONT_FAMILY = fontFamily[500];
  }
  if (semiBold) {
    FONT_FAMILY = fontFamily[600];
  }
  let fontSize = mvs(14);

  if (FONT_32) {
    fontSize = mvs(32);
  }
  if (FONT_34) {
    fontSize = mvs(34);
  }
  if (FONT_24) {
    fontSize = mvs(24);
  }
  if (FONT_26) {
    fontSize = mvs(26);
  }
  if (FONT_28) {
    fontSize = mvs(28);
  }
  if (FONT_22) {
    fontSize = mvs(22);
  }
  if (FONT_20) {
    fontSize = mvs(20);
  }
  if (FONT_18) {
    fontSize = mvs(18);
  }
  if (FONT_16) {
    fontSize = mvs(16);
  }
  if (FONT_16) {
    fontSize = mvs(15);
  }
  if (FONT_14) {
    fontSize = mvs(14);
  }
  if (FONT_12) {
    fontSize = mvs(12);
  }
  if (FONT_10) {
    fontSize = mvs(10);
  }
  if (FONT_8) {
    fontSize = mvs(8)
  }
  if (FONT_9) {
    fontSize = mvs(9)
  }

  let textComponent = () => (
    <Text
      {...props}
      style={[
        center ? { alignSelf: "center" } : {},
        {
          fontSize,
          color: color ? color : 'black',
          fontFamily: FONT_FAMILY,
        },
        props?.style,
      ]}>
      {children}
    </Text>
  )
  if (handlePress) {
    return <Pressable onPress={handlePress} style={containerStyle}>
      {textComponent()}
    </Pressable>
  } else {
    return textComponent()
  }


};

export default AppText;
