import { useState } from 'react'
import { InView } from 'react-intersection-observer'

import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)

  console.log('SCROLLED: ', scrolled)

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
  // return (
  //   <>
  //     <InView
  //       onChange={(inView, entry) => setScrolled(prev => !prev)}
  //       className={scrolled ? '' : 'scrolled'}
  //     >
  //       <Header />
  //     </InView>
  //     {children}
  //     <Footer />
  //   </>
  // )
}

export default Layout
