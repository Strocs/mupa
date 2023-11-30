import { LEAD_ARCHITECTS } from './lead-architects'
import { LIFETIME_ARCHITECTS } from './lifetime-architects'

const referenceList = LEAD_ARCHITECTS.map(({ short_name }) => short_name)
const lifetimeList = LIFETIME_ARCHITECTS.map(({ short_name }) => short_name)

export const NAV_ITEMS = [
  {
    title: 'inicio',
    url: '/'
  },
  {
    title: 'proyecto',
    url: '/proyecto'
  },
  {
    title: 'referentes',
    url: referenceList
  },
  {
    title: 'vitalicias',
    url: lifetimeList
  },
  {
    title: 'equipo',
    url: '/equipo'
  }
]
