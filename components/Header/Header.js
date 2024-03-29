import { usePageContext } from '@/context/pageContext'
import Link from 'next/link'

function Header() {
  const { mainNav } = usePageContext()

  return (
    <section className='headerArea'>
      <div className='container'>
        <header className='header'>
          <div className='logo'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M17.133 17.202l1.596.923c-1.508 2.055-3.606 3.548-5.729 3.875v-14.103c0-2.39 2-2.619 2-4.897 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 2.297 2 2.487 2 4.897v14.103c-2.123-.327-4.221-1.799-5.729-3.854l1.596-.944-4.867-2.811v5.621l1.5-.908c2.178 3.077 5.203 4.896 8.5 4.896s6.282-1.798 8.458-4.875l1.542.887v-5.621l-4.867 2.811zm-6.133-14.202c0-.551.449-1 1-1s1 .449 1 1-.449 1-1 1-1-.449-1-1z' />
            </svg>
          </div>
          <div className='nav'>
            {mainNav.map(item => (
              <Link href={item.node.uri} key={item.node.label}>
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
