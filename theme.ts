import { Button, rem, defaultVariantColorsResolver, VariantColorsResolver, parseThemeColor, rgba, darken, createTheme, MantineColorsTuple } from '@mantine/core';

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

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Completely override variant
  if (input.variant === 'default' && input.color === 'gray') {
    return {
      background: 'white',
      hover: gray[1],
      color: dark[5],
      border: `${rem(1)} solid ${dark[5]}`,
    };
  }

  if (input.variant === 'default' && input.color === 'beige') {
    return {
      background: 'white',
      hover: gray[1],
      color: dark[5],
      border: `${rem(1)} solid ${dark[5]}`,
    };
  }

  if (input.variant === 'white' && input.color === 'gray') {
    return {
      background: 'white',
      hover: 'white',
      color: dark[5],
    };
  }

  if (input.variant === 'white' && input.color === 'beige') {
    return {
      background: 'white',
      hover: 'white',
      color: beige[8],
      hoverColor: beige[9],
    };
  }

  if (input.variant === 'outline' && input.color === 'gray') {
    return {
      background: 'white',
      hover: '#C1C2C5',
      color: dark[5],
      border: `${rem(1)} solid ${dark[5]}`,
    };
  }

  if (input.variant === 'outline' && input.color === 'beige') {
    return {
      background: 'white',
      hover: beige[0],
      color: beige[8],
      border: `${rem(1)} solid ${beige[8]}`,
    };
  }

  if (input.variant === 'filled' && input.color === 'gray') {
    return {
      background: dark[5],
      hover: dark[5],
    };
  }

  if (input.variant === 'filled' && input.color === 'beige') {
    return {
      background: beige[5],
      hover: beige[8],
    };
  }

  if (input.variant === 'light' && input.color === 'gray') {
    return {
      background: '#C1C2C5',
      hover: gray[1],
      color: dark[5],
    };
  }

  if (input.variant === 'light' && input.color === 'beige') {
    return {
      background: beige[3],
      hover: beige[4],
      color: dark[5],
    };
  }

  if (input.variant === 'subtle' && input.color === 'gray') {
    return {
      background: 'white',
      hover: '#C1C2C5',
      color: dark[5],
    };
  }

  if (input.variant === 'subtle' && input.color === 'beige') {
    return {
      background: 'white',
      hover: beige[1],
      color: beige[8],
    };
  }

  return defaultResolvedColors;
};

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  colors: {
    beige,
    gray,
    dark,
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        fw: "500",
        lts: "0.25px",
      },
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
  variantColorResolver,
});
