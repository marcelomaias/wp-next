import { client } from '@/lib/client'
import Layout from '@/components/Layout'
import { GET_PAGES_CONTENT, GET_HOME_CONTENT } from '@/graphql/queries'
import { handleBlocks } from '@/lib/handleBlocks'
import { BlockRenderer } from '../components/BlockRenderer'
import DestinosGrid from '@/components/Content/DestinosGrid/DestinosGrid'
import Destaque1 from '@/components/Content/Destaque1/Destaque1'
import Destaque2 from '@/components/Content/Destaque2/Destaque2'
import Destaque3 from '@/components/Content/Destaque3/Destaque3'
import Destaque4 from '@/components/Content/Destaque4/Destaque4'
import ViagensGrid from '@/components/Content/ViagensGrid/ViagensGrid'
import { PageWrapper } from '@/context/pageContext'

export default function Home({
  blocks,
  destinos,
  destaque1,
  destaque2,
  destaque4,
  mainNav,
  featImage,
}) {
  return (
    <PageWrapper value={{ mainNav, featImage }}>
      <Layout>
        <BlockRenderer blocks={blocks} />
        <DestinosGrid destinos={destinos} />
        <Destaque1 destaque1={destaque1} />
        <Destaque2 destaque2={destaque2} />
        <ViagensGrid destinos={destinos} />
        <Destaque3 destaque3={destaque2} />
        <Destaque4 destaque4={destaque4} />
      </Layout>
    </PageWrapper>
  )
}

export async function getStaticProps() {
  const uri = '/'

  // console.log('params: ', params)

  const variables = {
    uri,
  }
  const pages = await client.request(GET_PAGES_CONTENT, variables)
  const home = await client.request(GET_HOME_CONTENT)

  const blocks = handleBlocks(pages.nodeByUri.blocksJSON)
  const destinos = home.destinos.edges
  const destaque1 = home.nodeByUri.destaque1
  const destaque2 = home.nodeByUri.destaque2
  const destaque4 = home.nodeByUri.destaque4
  const mainNav = pages.menuItems.edges
  const featImage = pages.nodeByUri.featuredImage?.node.mediaItemUrl || null

  return {
    props: {
      blocks,
      destinos,
      destaque1,
      destaque2,
      destaque4,
      mainNav,
      featImage,
    },
  }
}
