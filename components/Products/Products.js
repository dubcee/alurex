import styles from './products.module.css'

export const Products = () =>  {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.sectionWrapper}>
        <div className={styles.content}>
          <h1 className={styles.textEntryMobile}>
            Варианти
          </h1>
          <div className={styles.imageWrapper}>
            <img src={'./images/products/products-0.png'} alt={'ALUREX'} />
          </div>
          <div className={styles.textWrapper}>
            <h1 className={styles.textEntry}>
              Варианти на алуминиеви и стъклени парарпети
            </h1>
            <h2 className={styles.textEntry}>
              Възможни са комбинации от кръгли и квадратни профили, с вертикален (тип френски парапет) или хоризонтален (тип струни) пълнеж, със стъкло и други. Покритието е с висока якост - стандартно в 2 нюанса -  натурален цвят и цвят шампанско, но <strong>ALUREX</strong> предлага боядисване във всякакъв цвят по каталога на RAL системата.
            </h2>
          </div>
        </div>
      </section>
      <section className={styles.sectionWrapper}>
        <div className={styles.content}>
          <div className={styles.textWrapper}>
              <h1 className={styles.textEntry}>
                Кръгла система със струни
              </h1>
              <h2 className={styles.textEntry}>
                <strong>Алуминиевия парапет</strong> с <strong>хоризонтални струни</strong> е най-разпространеният модел за стълбища. По хоризонтала се поставят кръгли алуминиеви тръби с диаметър ф 16 или така наречените струни. Масово се изработва с 3 броя хоризонтални струни, но може този брой да се увеличава или намаля. Този парапет намира приложение също при прегради на партерни помещения и дворни пространства. Не се препоръчва за тераси, на които трябва да се изгради цялата височина от пода. Поради голямото разстояние между профилите е изключително опасен за малки деца. Стандартната ръкохватка е алуминиева с диаметър 50 мм.
              </h2>
          </div>
          <h1 className={styles.textEntryMobile}>
            Кръгла система със струни
          </h1>
          <div className={styles.imageWrapper}>
            <img src={'./images/products/products-1.png'} alt={'ALUREX'} />
          </div>
        </div>
      </section>
      <section className={styles.sectionWrapper}>
        <div className={styles.content}>
          <h1 className={styles.textEntryMobile}>
            Квадратна система със струни
          </h1>
          <div className={styles.imageWrapper}>
            <img src={'./images/products/products-2.png'} alt={'ALUREX'} />
          </div>
          <div className={styles.textWrapper}>
            <h1 className={styles.textEntry}>
              Квадратна система със струни
            </h1>
            <h2 className={styles.textEntry}>
              Изключително красива система, която е една от най-предпочитаните. Придава стилен и изискан вид на всяка фасада. Изработва се от квадратни и правоъгълни алуминиеви профили, като ръкохватката е правоъгълна алуминиева с размери 25мм х 60мм, колонките са с размери 40мм х 40мм и струни с размери 14мм х 14мм. Този тип парапет разполага с изключителна здравина. Масово се изработва с 3 броя хоризонтални струни, но може този брой да се увеличава или намаля. Този парапет намира приложение също при прегради на партерни помещения и дворни пространства.
            </h2>
          </div>
        </div>
      </section>
      <section className={styles.sectionWrapper}>
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <h1 className={styles.textEntry}>
              Стъклен парапет
            </h1>
            <h2 className={styles.textEntry}>
              Изключително стилна и модерна система. Придава футуристичен и страшно изискан вид на всяка фасада. Изработва се от квадратни и правоъгълни алуминиеви профили, като ръкохватката е правоъгълна алуминиева с размери 25мм х 60мм,  колонките са с размери 40мм х 40мм. Стъклата се поставят пред колонките, като между тях се оставят малки разстояния. Те са тип триплекс с дебелина 8мм. Изпълняват се в следните цветове - прорзрачно, кафяво, сиво, синьо, зелено, матово.
            </h2>
          </div>
          <h1 className={styles.textEntryMobile}>
            Стъклен парапет
          </h1>
          <div className={styles.imageWrapper}>
            <img src={'./images/products/products-3.png'} alt={'ALUREX'} />
          </div>
        </div>
      </section>
    </div>
  )
}
