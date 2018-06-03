import {ThemeProvider} from 'emotion-theming'
import * as React from 'react'

interface ModeProps {
  colorMode: 'light' | 'dark' | 'color'
}

export const Mode: React.SFC<ModeProps> = ({ colorMode, children }) => (
  // tslint:disable-next-line:jsx-no-lambda
  <ThemeProvider theme={theme => ({ ...theme, colorMode })}>
    {/* Fragment because Theme Provider breaks with multiple children */}
    <>{children}</>
  </ThemeProvider>
)