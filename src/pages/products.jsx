import Layout from '@/components/Layout'
import content from '@/data/content'

const Products = ({ page }) => {
  if (page) return <Layout {...page} />

  return null
}

export const getStaticProps = async () => {
  return {
    props: { page: content.pages.products },
  }
}

export default Products
