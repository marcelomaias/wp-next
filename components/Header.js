import useSWR from 'swr'
import { GET_MAIN_NAV } from '@/graphql/queries'
import Link from 'next/link'

function Header() {
  const { data, error } = useSWR(GET_MAIN_NAV)

  const loading = !data && !error

  console.log(data)

  return (
    <div>
      {loading
        ? 'Loading...'
        : data.menuItems.edges.map(item => (
            <Link href={item.node.uri} key={item.node.label}>
              {item.node.label}
            </Link>
          ))}
    </div>
  )
}

export default Header
