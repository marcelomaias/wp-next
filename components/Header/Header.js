import useSWR from 'swr'
import { GET_MAIN_NAV } from '@/graphql/queries'
import Link from 'next/link'
import style from './Header.module.scss'

function Header() {
  const { data, error } = useSWR(GET_MAIN_NAV)

  const loading = !data && !error

  // console.log(data)

  return (
    <section className={style.Header}>
      <div className='container'>
        <header>
          <div className='logo'>Logo</div>
          <div className='nav'>
            {loading
              ? 'Loading...'
              : data.menuItems.edges.map(item => (
                  <Link
                    className={style.mainNavLink}
                    href={item.node.uri}
                    key={item.node.label}
                  >
                    {item.node.label}
                  </Link>
                ))}
          </div>
          <div className='language'>EN</div>
        </header>
      </div>
    </section>
  )
}

export default Header
