import { client } from '@/lib/client'
import Layout from '@/components/Layout'
import { GET_HOME_CONTENT } from '@/graphql/queries'
import { handleBlocks } from '@/lib/handleBlocks'
import { BlockRenderer } from '../components/BlockRenderer'
import DestinosGrid from '@/components/Content/DestinosGrid/DestinosGrid'
import Destaque1 from '@/components/Content/Destaque1/Destaque1'
import Destaque2 from '@/components/Content/Destaque2/Destaque2'
import Destaque3 from '@/components/Content/Destaque3/Destaque3'
import Destaque4 from '@/components/Content/Destaque4/Destaque4'
import ViagensGrid from '@/components/Content/ViagensGrid/ViagensGrid'

export default function Home({
  blocks,
  destinos,
  destaque1,
  destaque2,
  destaque4,
}) {
  // console.log('HOME BLOCKS: ', blocks)
  // console.log('DESTAQUE4: ', destaque4)
  return (
    <Layout>
      <BlockRenderer blocks={blocks} />
      <DestinosGrid destinos={destinos} />
      <Destaque1 destaque1={destaque1} />
      <Destaque2 destaque2={destaque2} />
      <ViagensGrid destinos={destinos} />
      <Destaque3 destaque3={destaque2} />
      <Destaque4 destaque4={destaque4} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await client.request(GET_HOME_CONTENT)

  const blocks = handleBlocks(res.nodeByUri.blocksJSON)
  const destinos = res.destinos.edges
  const destaque1 = res.nodeByUri.destaque1
  const destaque2 = res.nodeByUri.destaque2
  const destaque4 = res.nodeByUri.destaque4

  return {
    props: { blocks, destinos, destaque1, destaque2, destaque4 },
  }
}
