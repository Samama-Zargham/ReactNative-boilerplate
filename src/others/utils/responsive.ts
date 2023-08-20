// import {Dimensions, PixelRatio} from 'react-native';
// import {RFValue} from 'react-native-responsive-fontsize';

// const widthPercentageToDP = (widthPercent: any) => {
//   const screenWidth = Dimensions.get('window').width;
//   const elemWidth = parseFloat(widthPercent);
//   return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
// };
// const heightPercentageToDP = (heightPercent: any) => {
//   const screenHeight = Dimensions.get('window').height;
//   const elemHeight = parseFloat(heightPercent);
//   return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
// };
// export {widthPercentageToDP as WP, heightPercentageToDP as HP, RFValue as RF};

import { Dimensions, PixelRatio, Platform } from "react-native";
// const {width, height} = Dimensions.get('window');
const width = Math.round(Dimensions.get("window").width);
const height = Math.round(Dimensions.get("window").height);

const xdHeight = (xdHeight: any) => {
  const heightPercent = Math.round((xdHeight / 812) * 100);
  return PixelRatio.roundToNearestPixel((height * heightPercent) / 100);
};

const xdWith = (xdWidth: any) => {
  const widthPercent = Math.round((xdWidth / 375) * 100);
  return PixelRatio.roundToNearestPixel((width * widthPercent) / 100);
};

//Guideline sizes are based on standard ~5" screen mobile devices

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 800 + 40;
const scale = (size: any) => (width / guidelineBaseWidth) * size;
const vs = (size: any) => (height / guidelineBaseHeight) * size;
const ms = (size: any, factor: any = 0.5) =>
  size + (scale(size) - size) * factor;
const mvs = (size: any, factor: any = Platform.OS === "android" ? 0.7 : 0.5) =>
  size + (vs(size) - size) * factor;



// Calculate the pixel ratio
const pixelRatio = PixelRatio.get();

// Calculate the adjusted height and width based on pixel ratio
const adjustedHeight = height / pixelRatio;
const adjustedWidth = width / pixelRatio;

export { scale, vs, ms, mvs, height, width, xdHeight, xdWith, adjustedWidth };