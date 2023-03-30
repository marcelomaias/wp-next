import { client } from '@/lib/client'
import { gql } from 'graphql-request'
import { GET_PAGES_CONTENT } from '@/graphql/queries'
import { handleBlocks } from '@/lib/handleBlocks'
import { BlockRenderer } from '@/components/BlockRenderer'
import Layout from '@/components/Layout'

function SingleDestino(props) {
  console.log('featImage:', props.featImage)
  return (
    <Layout>
      <h1>{props.title}</h1>
      <BlockRenderer blocks={props.blocks} />
    </Layout>
  )
}

export default SingleDestino

export const getStaticPaths = async () => {
  const res = await client.request(gql`
    query get_pages_paths {
      pages {
        nodes {
          slug
          uri
        }
      }
      destinos {
        nodes {
          slug
          uri
        }
      }
    }
  `)

  const paths = [...res.pages.nodes, ...res.destinos.nodes].map(destino => ({
    params: {
      slug: destino.uri.substring(1, destino.uri.length - 1).split('/'),
    },
  }))

  // console.log('PATHS ', paths)

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const uri = `/${params.slug.join('/')}/`

  const variables = {
    uri,
  }

  const res = await client.request(GET_PAGES_CONTENT, variables)
  console.log('DATA: ', res)

  return {
    props: {
      title: res.nodeByUri.title,
      blocks: handleBlocks(res.nodeByUri.blocksJSON),
      featImage: res.nodeByUri.featuredImage?.node.mediaItemUrl || null,
    },
  }
}
