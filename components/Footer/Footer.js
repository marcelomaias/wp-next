import Link from 'next/link'
import { MdLocationPin, MdPhone, MdPhoneIphone } from 'react-icons/md'
import style from './Footer.module.scss'

function Footer() {
  return (
    <section className={style.Footer}>
      <div className='container'>
        <footer>
          <div className='col'>
            <nav>
              <h4>About Us</h4>
              <Link href={'/'}>About Organization</Link>
              <Link href={'/'}>Our Journeys</Link>
              <Link href={'/'}>Our Partners</Link>
            </nav>
            <div>
              <h4>Achievements</h4>
              <p>
                Vitae aliquet nec ullamcorper sit amet risus nullam eget felis.
                Leo urna molestie at elementum pellentesque habitant tristique.
              </p>
            </div>
          </div>
          <div className='col'>
            <nav>
              <h4>Quick Links</h4>
              <Link href={'/'}>Introduction</Link>
              <Link href={'/'}>Organisation Team</Link>
              <Link href={'/'}>Press Enquiries</Link>
            </nav>
            <div>
              <h4>Useful Information</h4>
              <p>
                Amet commodo nulla facilisi nullam vehicula ipsum. Faucibus
                pulvinar elementum integer enim.
              </p>
            </div>
          </div>
          <div className='col'>
            <nav>
              <h4>Important Links</h4>
              <Link href={'/'}>Privacy Policy</Link>
              <Link href={'/'}>Cookies Policy</Link>
              <Link href={'/'}>Terms & Conditions</Link>
            </nav>
            <div>
              <h4>Targets & Plans</h4>
              <p>
                Fringilla urna porttitor rhoncus dolor purus nonulla malesuada
                pellentesque elit eget.
              </p>
            </div>
          </div>
          <div className='col'>
            <div>
              <h4>Contact Info</h4>
              <p>
                Nunc lobortis mattis aliquam faucibus purus in massa arcu odio
                ut sem nulla pharetra diam amet.
              </p>
            </div>
            <div className={style.ContactBox}>
              <div className={style.ContactRow}>
                <MdLocationPin />
                <div>
                  <h5>Address:</h5>
                  <p>Street Name, NY 38954</p>
                </div>
              </div>
              <div className={style.ContactRow}>
                <MdPhone />
                <div>
                  <h5>Phone:</h5>
                  <p>5555 5555</p>
                </div>
              </div>
              <div className={style.ContactRow}>
                <MdPhoneIphone />
                <div>
                  <h5>Mobile:</h5>
                  <p>5555 5555</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer
