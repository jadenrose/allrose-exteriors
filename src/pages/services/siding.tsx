import Layout from '@/components/Layout'
import { Page } from '@/__generated__/graphql'
import { GetStaticProps } from 'next'
import content from '@/data/content'

const Siding = ({ page }: { page: Page }) => {
  if (page) return <Layout {...page} />

  return null
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { page: content.pages['services/siding'] },
  }
}

export default Siding
