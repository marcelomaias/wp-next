import { client } from '@/lib/client'
import Layout from '@/components/Layout'
import { GET_HOME_CONTENT } from '@/graphql/queries'
import { handleBlocks } from '@/lib/handleBlocks'
import { BlockRenderer } from '../components/BlockRenderer'
import DestinosGrid from '@/components/DestinosGrid/DestinosGrid'
import Destaque1 from '@/components/Destaque1/Destaque1'
import Destaque2 from '@/components/Destaque2/Destaque2'
import ViagensGrid from '@/components/ViagensGrid/ViagensGrid'

export default function Home({ blocks, destinos, destaque1, destaque2 }) {
  // console.log('HOME BLOCKS: ', blocks)
  console.log('DESTAQUE2: ', destaque2)
  return (
    <Layout>
      <BlockRenderer blocks={blocks} />
      <DestinosGrid destinos={destinos} />
      <Destaque1 destaque1={destaque1} />
      <Destaque2 destaque2={destaque2} />
      <ViagensGrid destinos={destinos} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await client.request(GET_HOME_CONTENT)

  const blocks = handleBlocks(res.nodeByUri.blocksJSON)
  const destinos = res.destinos.edges
  const destaque1 = res.nodeByUri.destaque1
  const destaque2 = res.nodeByUri.destaque2

  return {
    props: { blocks, destinos, destaque1, destaque2 },
  }
}
