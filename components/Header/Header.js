import Link from 'next/link'
import styles from './header.module.css'
export const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.box}>
        <img src={'./images/logo.png'} alt={'logo'} />
      </div>
      <div className={styles.box}>
        <ul className={styles.linksList}>
          <li className={styles.linkItem}>
            <Link href='/' as={ process.env.BACKEND_URL + '/'}><a>Начало</a></Link>
          </li>
          <li className={styles.linkItem}>
            <Link href='/products' as={ process.env.BACKEND_URL + '/products'}><a>Продукти</a></Link>
          </li>
          <li className={styles.linkItem}>
            <Link href='/projects' as={ process.env.BACKEND_URL + '/projects'}><a>Проекти</a></Link>
          </li>
          <li className={styles.linkItem}>
            <Link href='/contacts' as={ process.env.BACKEND_URL + '/contacts'}><a>Контакти</a></Link>
          </li>
        </ul>
      </div>
      <div className={styles.box} />
    </div>
  )
}
