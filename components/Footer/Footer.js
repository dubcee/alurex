import { useState } from 'react'
import Link from 'next/link'
import styles from './footer.module.css'
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/FA'

export const Footer = (props) => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpened(!mobileMenuOpened)
  }

  return (
    <footer className={styles.footer}>
      <div className={`${styles.box} ${styles.logoWrapper}`}>
        <img src={'./images/logo.png'} alt={'logo'} />
      </div>
      <div className={`${styles.box} ${styles.linksWrapper}`}>
        ALUREX Ⓒ 2022
      </div>
      <div className={`${styles.box} ${styles.mmbWrapper}`}>
        <div className={styles.contactsWrapper}>
          <FaPhoneAlt />
          <a href="tel:+359897053616"> +359897053616 </a>
        </div>
        <div className={styles.contactsWrapper}>
          <FaRegEnvelope />
          <span> alurex@abv.bg </span>
        </div>
      </div>
    </footer>
  )
}
