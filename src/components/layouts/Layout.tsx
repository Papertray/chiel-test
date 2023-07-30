import { FC, PropsWithChildren } from 'react'

import { Navigation } from '@/components/Navigation'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Navigation />
      <div className="max-h-full flex-grow scroll-auto">{children}</div>
    </div>
  )
}
