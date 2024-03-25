import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Screens } from '../constants/Screens'

/*
 * Type checks for main stack navigator
 */
export type MainStackNavigatorParamList = {
  [Screens.DASHBOARD_SCREEN]: undefined
  [Screens.PROFILE_SCREEN]: undefined
}

/*
 * Type checks for navigation main stack screens
 */
export type DashboardScreenNavigationProp = NativeStackScreenProps<
  MainStackNavigatorParamList,
  Screens.DASHBOARD_SCREEN
>
export type ProfileScreenNavigationProp = NativeStackScreenProps<
  MainStackNavigatorParamList,
  Screens.PROFILE_SCREEN
>
