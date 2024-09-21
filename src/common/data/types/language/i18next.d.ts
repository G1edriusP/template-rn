import en from '@translation/resources/en'
import lt from '@translation/resources/lt'

import 'i18next'
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'lt'
    resources: {
      lt: typeof lt
      en: typeof en
    }
  }
}
