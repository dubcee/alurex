import styles from './content.module.css'
export const PageContent = (props) => {
  return (
    <div className={styles.content}>
      { props.children }
    </div>
  )
}
