import { Projects } from '../components/Projects/Projects'
import { Meta } from '../components/Meta/Meta'

export default () => (
  <>
    <Meta
      title={'Проекти - ALUREX - Алуминиеви и стъклени парапети'}
      description={'Производство и монтаж на алуминиеви и стъклени парапети'}
      keywords={'алуминиеви, парапети, стъклени, монтаж, aluminievi, parapeti, stakleni, алурекс, alurex plovdiv, пловдив, bg'}
      og={{
        title: 'ALUREX - Алуминиеви и стъклени парапети',
        description: 'Производство и монтаж на алуминиеви и стъклени парапети',
        image: './images/home/img1-big.jpeg'
      }}
    />
    <Projects />
  </>
)
