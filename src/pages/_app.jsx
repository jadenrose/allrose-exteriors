import '@/scss/global.scss'
import ViewportProvider from '@/context/ViewportContext'

const App = ({ Component, pageProps }) => {
  return (
    <ViewportProvider>
      <Component {...pageProps} />
    </ViewportProvider>
  )
}

export default App
