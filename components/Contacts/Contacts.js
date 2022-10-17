import styles from './contacts.module.css'
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'

export const Contacts = () => {
  return (
    <section className={styles.pageWrapper}>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <img src={'/images/logo-color-big.png'} alt={'ALUREX'} />
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.headingWrapper}>
            <h1 style={{ visibility: 'hidden' }} className={styles.heading}>Контакти</h1>
          </div>
          <h2 className={styles.textEntry}>
            <strong>ALUREX</strong> е фирма, която държи на професионалното обслужване на високо ниво за своите клиенти.
          </h2>
          <h2 className={styles.textEntry}>
            Фирмата изработва <strong>алуминиеви и стъклени парапети</strong> с високо качество и точност.
          </h2>
          <h2 className={styles.textEntry}>
            Ние смятаме, че ключа към добрите резултати е добрата комуникация.
          </h2>
          <h2 className={styles.textEntry}>
            За информация или запитване, не се колебайте да ни потърсите на:
          </h2>
          <div className={styles.contactsWrapper}>
            <div className={styles.contactWrapper}>
              <FaPhoneAlt />
              <a href="tel:+359897053616"> +359 897053616 </a>
            </div>
            <div className={styles.contactWrapper}>
              <FaRegEnvelope />
              <span> alurex@abv.bg </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
