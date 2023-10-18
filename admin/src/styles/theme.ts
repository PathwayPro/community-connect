import { defaultTheme } from 'react-admin';

export const myTheme = {
  ...defaultTheme,
  palette: {
    primary: {
      main: '#5932ea',
    },
    secondary: {
      main: '#F97794',
    },
    error: {
      main: '#c83532',
    },
  },
  typography: {
    fontFamily: ['-apple-system', 'poppins', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
  },
  components: {
    ...defaultTheme.components,
    MuiTextField: {
      defaultProps: {
        variant: 'outlined' as const,
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: 'outlined' as const,
      },
    },
    // Menu left
    RaMenu: {
      styleOverrides: {
        root: {
          '&.RaMenu-open': {
            paddingLeft: '20px',
            paddingRight: '20px',
          },
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          margin: '5px 0',
          '&:hover': {
            backgroundColor: '#F97794',
          },
          '&.RaMenuItemLink-active': {
            backgroundColor: '#5932ea',
            color: '#ffffff !important',
            '&:hover': {
              backgroundColor: '#5932ea',
            },
          },
        },
      },
    },
  },
};
