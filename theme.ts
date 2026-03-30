import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F5F5FA',
      paper: '#FFFFFF',
    },
    primary: {
      light: '#818CF8',
      main: '#4F46E5',
      dark: '#3730A3',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#FDBA74',
      main: '#F97316',
      dark: '#C2410C',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#EF4444',
    },
    info: {
      main: '#0EA5E9',
    },
    success: {
      main: '#10B981',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
    divider: 'rgba(15, 23, 42, 0.08)',
  },
  typography: {
    fontFamily: '"Bricolage Grotesque", "Inter", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2 },
    h2: { fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 },
    h3: { fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.3 },
    h6: { fontSize: '1.125rem', fontWeight: 600, letterSpacing: '0.01em' },
    subtitle1: { fontSize: '1rem', fontWeight: 600, letterSpacing: '0.01em' },
    body1: { fontSize: '0.9375rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', lineHeight: 1.6 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 12,
          padding: '10px 24px',
          boxShadow: 'none',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 8px 16px -4px rgba(79, 70, 229, 0.25)',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: #F8FAFC;
          background-image: radial-gradient(at 0% 0%, rgba(224,231,255,0.7) 0px, transparent 50%),
                            radial-gradient(at 100% 0%, rgba(254,226,226,0.3) 0px, transparent 50%);
          background-attachment: fixed;
          background-repeat: no-repeat;
        }
      `
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.05), 0 8px 10px -6px rgba(15, 23, 42, 0.01)',
          border: '1px solid rgba(15, 23, 42, 0.05)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          overflow: 'hidden',
          borderRadius: 24,
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.03)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 12px 30px -4px rgba(15, 23, 42, 0.08)',
            transform: 'translateY(-2px)'
          }
        },
      },
    },
  },
});
