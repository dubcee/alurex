import Head from 'next/head'

export const Meta = (props) => {
  const { title, keywords, description } = props
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={'viewport'} content={'width=device-width,initial-scale=1'} />
        <meta charSet={'utf-8'} />
        <meta name={'keywords'} content={keywords} />
        <meta name={'description'} content={description} />
        <link rel={'icon'} href={'/favicon.ico'} />
      </Head>
    </>
  )
}
