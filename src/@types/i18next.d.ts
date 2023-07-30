import 'i18next'

// import all namespaces (for the default language, only)
import common from '../../public/locales/en/common.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    // defaultNS: 'common'
    keySeparator: '-'
    nsSeparator: '.'
    resources: {
      common: typeof common
    }
    returnNull: false
  }
}
