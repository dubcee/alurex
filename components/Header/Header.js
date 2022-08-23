import { useState } from 'react'
import { useRouter } from "next/router"
import Link from 'next/link'
import styles from './header.module.css'
import { FaAlignJustify, FaRegWindowClose } from 'react-icons/FA'

export const Header = (props) => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false)

  const router = useRouter()

  const toggleMobileMenu = () => {
    setMobileMenuOpened(!mobileMenuOpened)
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.box} ${styles.logoWrapper}`}>
        <img src={'./images/logo.png'} alt={'logo'} />
      </div>
      <div className={`${styles.box} ${styles.linksWrapper}`}>
        <ul className={styles.linksList}>
          <li className={`${styles.linkItem} ${router.pathname === '/' ? styles.active : ''}`}>
            <Link href='/' as={ process.env.BACKEND_URL + '/'}><a>Начало</a></Link>
          </li>
          <li className={`${styles.linkItem} ${router.pathname === '/products' ? styles.active : ''}`}>
            <Link href='/products' as={ process.env.BACKEND_URL + '/products'}><a>Продукти</a></Link>
          </li>
          <li className={`${styles.linkItem} ${router.pathname === '/projects' ? styles.active : ''}`}>
            <Link href='/projects' as={ process.env.BACKEND_URL + '/projects'}><a>Проекти</a></Link>
          </li>
          <li className={`${styles.linkItem} ${router.pathname === '/contacts' ? styles.active : ''}`}>
            <Link href='/contacts' as={ process.env.BACKEND_URL + '/contacts'}><a>Контакти</a></Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.box} ${styles.mmbWrapper}`}>
        <div className={styles.hbWrapper}>
          <FaAlignJustify onClick={toggleMobileMenu} size={30} />
        </div>
      </div>
      {
        mobileMenuOpened &&
        <div className={styles.mobileMenuWrapper}>
          <div className={styles.inMenuCbWrapper}>
            <FaRegWindowClose onClick={toggleMobileMenu} size={30} />
          </div>
          <ul className={styles.linksList}>
            <li className={`${styles.linkItem} ${router.pathname === '/' ? styles.active : ''}`}>
              <Link href='/' as={ process.env.BACKEND_URL + '/'}><a onClick={toggleMobileMenu}>Начало</a></Link>
            </li>
            <li className={`${styles.linkItem} ${router.pathname === '/products' ? styles.active : ''}`}>
              <Link href='/products' as={ process.env.BACKEND_URL + '/products'}><a onClick={toggleMobileMenu}>Продукти</a></Link>
            </li>
            <li className={`${styles.linkItem} ${router.pathname === '/projects' ? styles.active : ''}`}>
              <Link href='/projects' as={ process.env.BACKEND_URL + '/projects'}><a onClick={toggleMobileMenu}>Проекти</a></Link>
            </li>
            <li className={`${styles.linkItem} ${router.pathname === '/contacts' ? styles.active : ''}`}>
              <Link href='/contacts' as={ process.env.BACKEND_URL + '/contacts'}><a onClick={toggleMobileMenu}>Контакти</a></Link>
            </li>
          </ul>
          <div className={styles.inMenuLogoWrapper}>
            <img src={'./images/logo.png'} alt={'logo'} />
          </div>
        </div>
      }
    </header>
  )
}
