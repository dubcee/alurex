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

  const unsetIsInPreviewIndex = (e) => {
    e.stopPropagation()
    console.log('should close')
    setIsInPreview(null)
  }

  const imagesPreviewStyles = {
    zIndex: 1
  }
  const imagePreviewStyles = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    // left: 0,
    zIndex: 2,
    height: 'auto'
  }

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.sectionWrapper}>
        <div className={styles.content}>
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
                    onClick={() => setIsInPreviewIndex(index)}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        display: 'inline-flex'
                      }}
                    >
                      <img width={'100%'} src={images[key]?.default?.src?.slice(1)} alt={`project-${index + 1}`} />
                      {
                        Number.isInteger(isInPreview) &&
                        <div
                          style={{
                            position: 'absolute',
                            top: '30px',
                            right: '30px',
                            border: '2px solid #F0F2F5',
                            borderRadius: '.5rem',
                            padding: '2px 4px',
                            fontWeight: 'bold',
                            zIndex: 23,
                            cursor: 'pointer',
                            color: '#F0F2F5'
                          }}
                          onClick={unsetIsInPreviewIndex}
                        >
                          &#10006;
                        </div>
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}
