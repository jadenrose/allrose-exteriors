import Layout from '@/components/Layout'
import { PAGE_QUERY } from '@/graphql'
import client from '@/graphql/client'
import { Page } from '@/__generated__/graphql'
import { GetStaticProps } from 'next'
import { ApolloError } from '@apollo/client/errors'
import { ServerError } from '@apollo/client/link/utils'

const Partners = ({ page }: { page: Page }) => {
  if (page) return <Layout {...page} />

  return null
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const {
      data: { page },
    } = await client.query({
      query: PAGE_QUERY,
      variables: {
        id: 'cle6bzji8cbga0bsn97i6v178',
      },
    })

    return {
      props: { page },
    }
  } catch (err) {
    const apolloError = err as ApolloError
    const networkError = apolloError.networkError as ServerError

    if (networkError.result) console.error(networkError.result)
    else console.error(err)

    return {
      props: { page: null },
    }
  }
}

export default Partners
