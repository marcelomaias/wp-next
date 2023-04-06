import { client } from '@/lib/client'
import { gql } from 'graphql-request'
import { GET_PAGES_CONTENT } from '@/graphql/queries'
import { handleBlocks } from '@/lib/handleBlocks'
import { BlockRenderer } from '@/components/BlockRenderer'
import Layout from '@/components/Layout'
import { PageWrapper } from '@/context/pageContext'

function SinglePage(props) {
  // console.log('PAGE_PROPS: ', props)
  return (
    <PageWrapper
      value={{
        mainNav: props.mainNav,
        title: props.title,
        featImage: props.featImage,
      }}
    >
      <Layout mainNav={props.mainNav}>
        <BlockRenderer blocks={props.blocks} />
      </Layout>
    </PageWrapper>
  )
}

export default SinglePage

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

  // FILTER THE "/" PATH OUT TO AVOID CONFLICT WIHT "/" FROM HOMEPAGE
  const pagesPaths = res.pages.nodes.filter(path => {
    return path.uri !== '/'
  })

  const paths = [...pagesPaths, ...res.destinos.nodes].map(destino => ({
    params: {
      slug: destino.uri.substring(1, destino.uri.length - 1).split('/'),
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const uri = `/${params.slug.join('/')}/`

  console.log('params: ', params)

  const variables = {
    uri,
  }

  const res = await client.request(GET_PAGES_CONTENT, variables)
  const mainNav = res.menuItems.edges

  return {
    props: {
      title: res.nodeByUri.title,
      blocks: handleBlocks(res.nodeByUri.blocksJSON),
      featImage: res.nodeByUri.featuredImage?.node.mediaItemUrl || null,
      mainNav,
    },
  }
}
