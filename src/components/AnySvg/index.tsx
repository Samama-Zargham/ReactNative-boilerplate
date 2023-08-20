import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

import * as Svgs from './../../assets/svgs';
import { mvs } from '../../others/utils/responsive';
interface Props {
  name: string | undefined;
  width?: number;
  height?: number;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
  size?: any;
}
const AnySvg: React.FC<Props> = ({
  name = '',
  width = 20,
  height = 20,
  containerStyle = {},
  onPress = () => { },
  disabled = false,
  size,
  ...props
}) => {
  // @ts-ignore
  const Tag: any = name ? Svgs[name] : null;
  let isWidthString = typeof width == 'string';
  let isHeightString = typeof height == 'string';

  return (
    <>
      {name && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            { justifyContent: 'center', alignItems: 'center' },
            containerStyle,
          ]}
          disabled={disabled}
          onPress={() => {
            onPress ? onPress() : console.log('Nothing to act');
          }}>
          <Tag
            {...props}
            width={size || (isWidthString ? width : mvs(width))}
            height={size || (isHeightString || isWidthString ? height : mvs(height))}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default AnySvg;
