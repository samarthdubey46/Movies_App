import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Main from './src/navigation/Stack'
import ThemeProvider from './src/state'
const App = (props) => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </ThemeProvider>
  )
}
export default App