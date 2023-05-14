import Layout from '@/components/Layout'
import content from '@/data/content'

const Contact = ({ page }) => {
  if (page) return <Layout {...page} heroStyle="primary" />

  return null
}

export const getStaticProps = async () => {
  return {
    props: { page: content.pages.contact },
  }
}

export default Contact
