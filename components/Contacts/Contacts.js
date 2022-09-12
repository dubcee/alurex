import styles from './contacts.module.css'
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'

export const Contacts = () => {
  return (
    <section className={styles.pageWrapper}>
      <div className={styles.logoWrapper}>
        <img src={'./images/logo-big-green.png'} alt={'ALUREX'} />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.heading}>Контакти</h1>
        </div>
        <div>
          ALUREX е фирма, която държи на професионалното обслужване на високо ниво за своите клиенти.
        </div>
        <div>
          Фирмата изработва алуминиеви и стъклени парапети с високо качество и точност.
        </div>
        <div>
          Ние смятаме, че ключа към добрите резултати е добрата комуникация.
        </div>
        <div>
          За информация или запитване, не се колебайте да ни потърсите на:
        </div>
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
    </section>
  )
}
