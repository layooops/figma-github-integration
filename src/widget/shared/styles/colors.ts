import type { GithubPresetColors } from '../lib/types/github';

export const Colors = {
  white: '#fff',
  black: '#000',
  red: {
    900: '#310403',
    800: '#500B07',
    700: '#771510',
    600: '#9D1F19',
    500: '#B0392F',
    400: '#CE584A',
    300: '#EB7464',
    200: '#F1A295',
    100: '#F7CBC4',
    50: '#FDF2F0',
  },
  gray: {
    900: '#1F1F1F',
    800: '#333333',
    700: '#484848',
    600: '#5D5D5D',
    500: '#747474',
    400: '#8C8C8C',
    300: '#A4A4A4',
    200: '#BEBEBE',
    100: '#D7D7D7',
    50: '#F2F2F2',
  },
  blue: {
    900: '#0A1156',
    800: '#17237C',
    700: '#25379E',
    600: '#384EBD',
    500: '#4660D0',
    400: '#5F7CEB',
    300: '#7F9BF8',
    200: '#A5BAFA',
    100: '#CBD7FC',
    50: '#F2F5FE',
  },
  green: {
    900: '#081E0B',
    800: '#15381A',
    700: '#24582C',
    600: '#34783E',
    500: '#4B8E53',
    400: '#64A66B',
    300: '#7CBF82',
    200: '#94D89A',
    100: '#ADF2B2',
    50: '#E5FEE6',
  },
  orange: {
    900: '#281002',
    800: '#502609',
    700: '#804115',
    600: '#B35C22',
    500: '#D4763A',
    400: '#E78A4F',
    300: '#F2A374',
    200: '#F5BF9F',
    100: '#F9D9C7',
    50: '#FDF2ED',
  },
  yellow: {
    900: '#1C1803',
    800: '#4D4411',
    700: '#8A7C26',
    600: '#CBB63B',
    500: '#FAE463',
    400: '#FBEA85',
    300: '#FCF0A5',
    200: '#FDF4C0',
    100: '#FEF9DB',
    50: '#FFFEF8',
  },
};

export const presetColors: Record<GithubPresetColors, string> = {
  GRAY: Colors.gray[50],
  RED: Colors.red[100],
  GREEN: Colors.gray[100],
  BLUE: Colors.blue[100],
  PINK: Colors.red[50],
  PURPLE: Colors.blue[200],
  YELLOW: Colors.yellow[100],
  ORANGE: Colors.orange[100],
};
