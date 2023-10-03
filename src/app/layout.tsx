import './globals.css'

import Header from './components/Header/Header'
import Providers from './core/utils/providers'

export const metadata = {
  title: 'Kanban Task Manager',
  description: 'Kanban Board Task Manager'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-plusJakarta'>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
