import styles from './content.module.css'
export const PageContent = (props) => {
  return (
    <main className={styles.content}>
      { props.children }
    </main>
  )
}
