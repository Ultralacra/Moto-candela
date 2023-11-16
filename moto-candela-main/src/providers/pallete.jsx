import { createTheme } from '@mui/material/styles';

export const ColorPalette = createTheme({
    palette: {
        primary: {
            light: '#ef8233',
            main: '#EC6300',
            dark: '#a54500',
            contrastText: '#000',
        },
        secondary: {
            light: '#333333',
            main: '#000000',
            dark: '#000000',
            contrastText: '#FFF',
        },
        tertiary: {
            light: '#FFF',
            main: '#FFF',
            dark: '#b2b2b2',
            contrastText: '#000',
        },
    },
});