import styles from './home.module.css'

export const Home = () =>  {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.sectionWrapper}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src={'./images/home/img1-big.jpeg'} alt={'ALUREX'} />
          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.textEntry}>
              <strong>Алуминиевите парапети</strong> са изключително добро и ефективно решение както за интериор, така и за екстериор. Предимствата тук са многобройни, което ги прави и най-предпочитаните, а именно: ниска цена, висока устойчивост на атмосферни влияния, бърз и чист монтаж, възможност за индивидуално проектиране и визия, не корозират спрямо металните парапети, голямо разнообразие от профили, сглобки и цветове.
            </h2>
            <h2 className={styles.textEntry}>
              Използват се на <strong>стълбища, тераси, офис и жилищни сгради, рампи и в градината.</strong> Възможни са комбинации от кръгли и квадратни профили, с вертикален или хоризонтален пълнеж, със стъкло, тип френски парапет и други.
            </h2>
            <h2 className={styles.textEntry}>
              Покритието е с високоякостна елуксация стандартно в 3 нюанса – натурален, шампанско и тъмен инокс, но <strong>ALUREX</strong> предлага боядисване във всички цветове по каталог на системата RAL, както и гама от дървесни цветове.
            </h2>
          </div>
        </div>
      </section>
      <section className={styles.sectionWrapper}>
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <h2 className={styles.textEntry}>
              <h1 className={styles.textEntry}>
                Предимства на алуминиевите парапети
              </h1>
              <ul>
                <li>
                  Те са силно устойчиви на всякакви метеорологични условия, включително солен въздух
                </li>
                <li>
                  Строителство по индивидуален проект
                </li>
                <li>
                  Възможно боядисване по цветова система RAL
                </li>
                <li>
                  Не корозират за разлика от металните парапети
                </li>
                <li>
                  Не променят цвета си с течение на времето
                </li>
                <li>
                  Устойчиви във водна среда за ограждане на детски басейни
                </li>
                <li>
                  Кратко време за производство
                </li>
                <li>
                  Алуминиевите парапети са с най-ниска цена
                </li>
                <li>
                  Бърз и чист монтаж
                </li>
                <li>
                  Възможност за подов и челен монтаж
                </li>
              </ul>
            </h2>
          </div>
          <div className={styles.imageWrapper}>
            <img src={'./images/home/img2-big.jpeg'} alt={'ALUREX'} />
          </div>
        </div>
      </section>
      <section className={styles.sectionWrapper}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src={'./images/home/img3-big.jpeg'} alt={'ALUREX'} />
          </div>
          <div className={styles.textWrapper}>
            <h1 className={styles.textEntry}>
              Алуминиевите парапети в дома
            </h1>
            <h2 className={styles.textEntry}>
              В продължение на векове системите за парапети са създавани, за да осигурят необходимата безопасност на даден проект. В <strong>ALUREX</strong> безопасността все още е грижа номер едно, но не за сметка на красотата. <strong>Алуминиевите парапети</strong> от <strong>ALUREX</strong> са уникална комбинация от стил и практичност, тъй като отговарят на всички стандарти за безопасност и прегръщат силата на алуминия - като същевременно правят вашия проект да изглежда фантастично. Нашите алуминиеви парапети  предлагат квадратен и кръгъл тип профили с различни видове аксесоари.
            </h2>
            <h2 className={styles.textEntry}>
              Предлага се голямо разнообразие от компоненти за вътрешни и външни настройки. Различни форми на перила и аксесоари като стенни съединители, капачки.
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}
