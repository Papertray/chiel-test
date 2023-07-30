import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Layout } from '@/components/layouts/Layout'
import { Providers } from '@/components/Providers'

const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
const routes = []

for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1]
  if (!fileName) {
    continue
  }

  const normalizedPathName = fileName.includes('$')
    ? fileName.replace('$', ':')
    : fileName.replace(/\/index/, '')

  routes.push({
    Element: pages[path].default,
    ErrorBoundary: pages[path]?.ErrorBoundary,
    action: pages[path]?.action,
    loader: pages[path]?.loader,
    path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
  })
}

const GlobalFallback = () => <div>Something went wrong.</div>
const PageNotFound = () => <div>Page not found.</div>

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: (
      <Layout>
        <Element />
      </Layout>
    ),
    ...(ErrorBoundary
      ? {
          errorElement: (
            <Layout>
              <ErrorBoundary />
            </Layout>
          ),
        }
      : {
          errorElement: (
            <Layout>
              <PageNotFound />
            </Layout>
          ),
        }),
  }))
)

const App = () => {
  return (
    <ErrorBoundary fallback={<GlobalFallback />}>
      <Providers>
        <RouterProvider router={router} />
      </Providers>
    </ErrorBoundary>
  )
}

export default App
