import { gql } from 'graphql-request'
import { client } from '@/lib/client'
import Layout from '@/components/Layout'

const theQuery = gql`
  query NewQuery {
    pages {
      nodes {
        title
        uri
      }
    }
  }
`

export default function Home({ res }) {
  const pages = res.pages.nodes
  return (
    <Layout>
      {pages.map(page => (
        <h2 key={page.title}>{page.title}</h2>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await client.request(theQuery)

  console.log('DATA: ', res)

  return {
    props: { res },
  }
}
