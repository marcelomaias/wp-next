import { client } from '@/lib/client'
import Layout from '@/components/Layout'
import { GET_HOME_CONTENT } from '@/graphql/queries'
import { handleBlocks } from '@/lib/handleBlocks'
import { BlockRenderer } from '../components/BlockRenderer'

export default function Home({ blocks }) {
  console.log('BLOCKS: ', blocks)
  return (
    <Layout>
      <BlockRenderer blocks={blocks} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await client.request(GET_HOME_CONTENT)

  const blocks = handleBlocks(res.nodeByUri.blocksJSON)

  return {
    props: { blocks },
  }
}
