import Layout from '@/components/Layout'
import content from '@/data/content'

const Gallery = ({ page }) => {
  if (page) return <Layout {...page} />

  return null
}

export const getStaticProps = async () => {
  return {
    props: { page: content.pages.gallery },
  }
}

export default Gallery
