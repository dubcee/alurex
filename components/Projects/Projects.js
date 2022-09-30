import styles from './projects.module.css'
import { useCallback, useState } from 'react'

function importAll(r) {
  let images = {}
  r.keys().map(item => { images[item.replace('./', '')] = r(item); })
  return images
}

export const Projects = () => {
  const images = importAll(require.context('../../public/images/projects', false, /\.(jpe?g|png|webp|)$/i))
  const [isInPreview, setIsInPreview] = useState(null)

  const setIsInPreviewIndex = useCallback((index) => {
    setIsInPreview(index)
  }, [isInPreview])

  const unsetIsInPreviewIndex = () => {
    setIsInPreview(null)
  }

  const imagesPreviewStyles = {
    background: 'rgba(0, 0, 0, 0.2)',
    zIndex: 1
  }
  const imagePreviewStyles = {
    position: 'absolute',
    inset: 0,
    zIndex: 2,
    height: 'fit-content'
  }

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.sectionWrapper}>
        <div
          style={{
            ...Number.isInteger(isInPreview) ? imagesPreviewStyles : {}
          }}
          className={styles.imagesWrapper}
        >
          {
            images && Object.keys(images).length && Object.keys(images).map((key, index) => {
              return (
                <div
                  className={styles.imageWrapper}
                  key={index}
                  style={{
                    ...isInPreview === index ? imagePreviewStyles : {},
                    ...(Number.isInteger(isInPreview) && isInPreview !== index) && { display: 'none' }
                  }}
                  // onClick={() => setIsInPreviewIndex(index)}
                >
                  <img width={'100%'} src={images[key].default.src} alt={`project-${index + 1}`} />
                </div>
              )
            })
          }
          {
            Number.isInteger(isInPreview) &&
            <div
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                border: '2px solid #7cc04e',
                borderRadius: '.5rem',
                padding: '2px 4px',
                fontWeight: 'bold',
                zIndex: 3
              }}
              onClick={unsetIsInPreviewIndex}
            >
              &#10006;
            </div>
          }
        </div>
      </section>
    </div>
  )
}
