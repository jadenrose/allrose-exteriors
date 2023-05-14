import Layout from '@/components/Layout'
import { Page } from '@/__generated__/graphql'
import { GetStaticProps } from 'next'
import content from '@/data/content'

const Home = ({ page }: { page: Page }) => {
  if (page) return <Layout {...page} heroStyle="primary" />

  return null
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { page: content.pages.home },
  }
}

export default Home
