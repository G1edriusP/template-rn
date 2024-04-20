import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import BottomNavigator from './BottomNavigator'
import NavigatorProps from './types/NavigatorProps'

// eslint-disable-next-line no-empty-pattern
const Navigator = ({}: NavigatorProps): React.ReactElement => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  )
}

export default Navigator
