import * as ROUTES from './routes'

export interface LinkItem {
  name: string
  path: string
}

export const DesktopNavs: Array<LinkItem> = [
  { name: 'EXPERIENCE', path: ROUTES.EXPERIENCE_PATH },
  { name: 'SKILLS', path: ROUTES.SKILLS_PATH },
]

export const MobileNavs: Array<LinkItem> = [
  { name: 'ABOUT', path: ROUTES.HOME_PATH },
  { name: 'EXPERIENCE', path: ROUTES.EXPERIENCE_PATH },
  { name: 'SKILLS', path: ROUTES.SKILLS_PATH },
  { name: 'SOURCE', path: 'https://github.com/mihara0320/next-portfolio' },
]
