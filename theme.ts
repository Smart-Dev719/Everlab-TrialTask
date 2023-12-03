import { createTheme, MantineColorsTuple } from '@mantine/core';

const beige: MantineColorsTuple = [
  "#FFFCF8",
  "#FAF7F4",
  "#F3E8DE",
  "#EEDAC9",
  "#E0BFA2",
  "#AE9D87",
  "",
  "",
  "#8E7D66",
  "#605648"
];

const gray: MantineColorsTuple = [
  "#F3F3F3",
  "#E8E7E7",
  "#E8E7E7",
  "#E2E4ED",
  "#D7D8E3",
  "#AFB4BF",
  "",
  "",
  "",
  ""
];

const dark: MantineColorsTuple = [
  "",
  "",
  "",
  "#737985",
  "#575861",
  "#221F20",
  "#25262B",
  "",
  "",
  ""
];

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  colors: {
    beige,
    gray,
    dark,
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '16px',
    xl: '18px',
  },
});
