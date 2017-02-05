/* @flow */

const palette = {
  white: '#ffffff',
  gray1: '#fdfdfd',
  gray4: '#f5f5f5',
  gray7: '#ececec',
  gray9: '#e9e9e9',
  gray15: '#dadada',
  gray21: '#c9c9c9',
  gray50: '#808080',
  gray84: '#282828',
  black: '#000000',

  yellow: '#ffde02',
  green: '#009900',
  red: '#ff0033',

  amber: '#FFC107',
  amberLight: '#FFE082',
  amberDark: '#FF6F00',

  deepOrange: '#FF5722',
  deepOrangeLight: '#FFAB91',
  deepOrangeDark: '#BF360C',

  lime: '#CDDC39',
  limeLight: '#E6EE9C',
  limeDark: '#827717'
};

export const Colors = {
  statusBarBg: palette.black,
  toolbarBg: palette.black,
  toolbar: palette.white,

  background: palette.white,
  container: palette.gray4,

  accent: palette.green,
  link: palette.green,
  text: palette.gray84,
  body: palette.gray50,
  textDim: palette.gray50,
  negative: palette.white,

  button: palette.white,
  buttonBg: palette.green,

  input: palette.gray84,
  inputBg: palette.gray1,
  inputBorder: palette.gray7,
  inputIcon: palette.gray50,
  placeholder: palette.gray50,

  heading: palette.gray84,

  tabBg: palette.green,
  tabBgActive: palette.red,
  tab: palette.white,
  tabActive: palette.yellow,

  success: palette.green,
  warning: palette.yellow,
  danger: palette.red,

  divider: palette.gray7,

  listItemBody: palette.white,
  listItemGood: palette.limeDark,
  listItemGoodBg: palette.lime,
  listItemGoodBody: palette.limeLight,
  listItemNormal: palette.amberDark,
  listItemNormalBg: palette.amber,
  listItemNormalBody: palette.amberLight,
  listItemBad: palette.deepOrangeDark,
  listItemBadBg: palette.deepOrange,
  listItemBodyBad: palette.deepOrangeLight,

  selection: palette.green,

  star: palette.white
};
