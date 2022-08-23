import '../public/styles/global.css'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { PageContent } from '../components/PageContent/PageContent'
import { Meta } from '../components/Meta/Meta'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta
        title={'ALUREX - Алуминиеви и стъклени парапети'}
        description={'Производство и монтаж на алуминиеви и стъклени парапети'}
        keywords={'алуминиеви,парапети,стъклени,монтаж,aluminievi,parapeti,stakleni'}
      />
      <Header />
      <PageContent>
        <Component {...pageProps} />
      </PageContent>
      <Footer />
    </>
  )
}

export default MyApp
