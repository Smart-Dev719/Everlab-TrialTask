import { Button, rem, createTheme, MantineColorsTuple } from '@mantine/core';

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
  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.size === 'xs') {
          return {
            root: {
              '--button-height': rem(24),
              '--button-padding-x': rem(12),
              '--button-fz': rem(12),
              '--button-radius': rem(6),
            },
          };
        }

        if (props.size === 'sm') {
          return {
            root: {
              '--button-height': rem(32),
              '--button-padding-x': rem(16),
              '--button-fz': rem(14),
              '--button-radius': rem(10),
            },
          };
        }

        if (props.size === 'md') {
          return {
            root: {
              '--button-height': rem(40),
              '--button-padding-x': rem(20),
              '--button-fz': rem(16),
              '--button-radius': rem(10),
            },
          };
        }

        if (props.size === 'lg') {
          return {
            root: {
              '--button-height': rem(48),
              '--button-padding-x': rem(24),
              '--button-fz': rem(16),
              '--button-radius': rem(10),
            },
          };
        }

        if (props.size === 'xl') {
          return {
            root: {
              '--button-height': rem(56),
              '--button-padding-x': rem(32),
              '--button-fz': rem(18),
              '--button-radius': rem(10),
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});
