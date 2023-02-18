import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ViewportContextObject {
  text: 'mobile' | 'tablet' | 'desktop'
  width: number
  height: number
}

const init: ViewportContextObject = {
  text: 'mobile',
  width: 0,
  height: 0,
}

const ViewportContext = createContext(init)

export const useViewport = () => useContext(ViewportContext)

const ViewportProvider = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState<ViewportContextObject['text']>(init.text)
  const [width, setWidth] = useState<ViewportContextObject['width']>(init.width)
  const [height, setHeight] = useState<ViewportContextObject['height']>(
    init.height
  )

  useEffect(() => {
    const setSize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    setSize()

    window.addEventListener('resize', setSize)

    return () => window.removeEventListener('resize', setSize)
  }, [])

  useEffect(() => {
    if (width >= 1100) return setText('desktop')
    if (width >= 768) return setText('tablet')
    return setText('mobile')
  }, [width])

  return (
    <ViewportContext.Provider value={{ text, width, height }}>
      {children}
    </ViewportContext.Provider>
  )
}

export default ViewportProvider
