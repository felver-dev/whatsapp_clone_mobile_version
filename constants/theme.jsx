import { Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const FONTS = {
  Big: 21,
  xLarge: 20,
  Large: 18.54,
  xMedium: 16,
  medium: 15.54,
  small: 14.54,
  tiny: 12,
};
const COLORS = {
  primary: "#18252D",
  primary1: "#232D36",
  primary2: "#101D25",
  primary2: "#313C42",
  secondary: "#02AD9B",
  secondary1: "#00B29C",
  secondary2: "#17B49F",
  secondary3: "#0CA996",
  secondary4: "#0CA996",
  secondary5: "#04AD9C",
  gray5: "#868F94",
  gray4: "#9DA5AC",
  gray3: "#D4DCDF",
  gray2: "#D3DAE0",
  gray1: "#E3E8EE",
  gray: "#F9FFFF",
  red: "#DF788B",
  pink: "#D3396D",
  purpleBlue: "#5157AD",
  purple: "#AD46CD",
  orangered: "#F78D0D",
  green: "#118B50",
  blue: "#0796DC",
};

export { COLORS, FONTS, width, height };
