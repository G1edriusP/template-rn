import React from 'react'

import { DashboardScreen, ProfileScreen } from '@screens'

import { Screens } from './constants/Screens'
import { MainStack } from './stacks/MainStack'
import { fadeAnimation, noHeader } from './utils'

const BottomNavigator = (): React.ReactElement => (
  <MainStack.Navigator screenOptions={fadeAnimation} initialRouteName={Screens.DASHBOARD_SCREEN}>
    {/* Bottom stack screens */}
    <MainStack.Group screenOptions={noHeader}>
      <MainStack.Screen name={Screens.DASHBOARD_SCREEN} component={DashboardScreen} />
      <MainStack.Screen name={Screens.PROFILE_SCREEN} component={ProfileScreen} />
    </MainStack.Group>
  </MainStack.Navigator>
)

export default BottomNavigator
