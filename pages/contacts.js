import { Contacts } from '../components/Contacts/Contacts'
import { Meta } from '../components/Meta/Meta'

export default () => (
  <>
    <Meta
      title={'Контакти - ALUREX - Алуминиеви и стъклени парапети'}
      description={'Производство и монтаж на алуминиеви и стъклени парапети'}
      keywords={'алуминиеви, парапети, стъклени, монтаж, aluminievi, parapeti, stakleni, алурекс, alurex plovdiv, пловдив'}
      og={{
        title: 'ALUREX - Алуминиеви и стъклени парапети',
        description: 'Производство и монтаж на алуминиеви и стъклени парапети',
        image: './images/home/img1-big.jpeg'
      }}
    />
    <Contacts />
  </>
)
