import { LEAD_ARCHITECTS } from './lead-architects'

const referenceList = LEAD_ARCHITECTS.map(({ short_name }) => short_name)

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
    url: '/arquitectas-vitalicias'
  },
  {
    title: 'equipo',
    url: '/equipo'
  }
]
