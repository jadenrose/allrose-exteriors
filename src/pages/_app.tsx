import type { AppProps } from 'next/app'
import '@/scss/global.scss'
import ViewportProvider from '@/context/ViewportContext'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ViewportProvider>
      <Component {...pageProps} />
    </ViewportProvider>
  )
}

export default App
