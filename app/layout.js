'use client'
import './globals.css';
import { Commissioner } from 'next/font/google';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { SessionProvider } from "next-auth/react"
const commissioner = Commissioner({ subsets: ['latin'] });

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ABAFB0', // This is an orange looking color
    },
  },
  typography: {
    fontFamily: 'Commissioner, sans-serif', // Set the global font family to Commissioner
    fontWeight: 500,
  },
  shadows: ['none'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={commissioner.className}>
        <MuiThemeProvider theme={theme}>
          <SessionProvider>
          <div className={commissioner.className}>{children}</div>
          </SessionProvider>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
