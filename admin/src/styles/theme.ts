import { defaultTheme } from 'react-admin';

export const myTheme = {
  ...defaultTheme,
  palette: {
    primary: {
      main: '#374983',
    },
    secondary: {
      main: '#374983',
    },
    error: {
      main: '#374983',
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
          margin: '40px 0px',
          backgroundColor: '#E1E4EC',
          borderRadius: '8px',
          '&.RaMenu-open': {
            padding: '5px 5px',
          },
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          margin: '1px 0',
          color: '#000 !important',
          padding: '10px',
          '&:hover': {
            backgroundColor: '#FCBC5C',
          },
          '&.RaMenuItemLink-active': {
            backgroundColor: '#FCBC5C',
            '&:hover': {
              backgroundColor: '#FCBC5C',
            },
          },
        },
      },
    },
  },
};
