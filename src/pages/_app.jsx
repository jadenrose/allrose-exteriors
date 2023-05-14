import { Analytics } from '@vercel/analytics/react'
import '@/scss/global.scss'
import ViewportProvider from '@/context/ViewportContext'

const App = ({ Component, pageProps }) => {
  return (
    <ViewportProvider>
      <Component {...pageProps} />
      <Analytics />
    </ViewportProvider>
  )
}

export default App
