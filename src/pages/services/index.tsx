import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Services = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/services/siding')
  }, [router])

  return null
}

export default Services
