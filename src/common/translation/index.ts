import { initReactI18next } from 'react-i18next'

import * as resources from './resources'

import i18n from 'i18next'
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {},
    ),
  },
  lng: 'lt',
})
export default i18n
