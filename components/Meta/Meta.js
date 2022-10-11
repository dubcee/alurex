import Head from 'next/head'

export const Meta = (props) => {
  const { title, keywords, description, og } = props
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={'viewport'} content={'width=device-width,initial-scale=1'} />
        <link rel={'icon'} href={'/favicon.ico'} />
        <meta charSet={'utf-8'} />
        <meta name={'keywords'} content={keywords} />
        <meta name={'description'} content={description} />
        <meta property="og:title" content={og.title} />
        <meta property="og:description" content={og.description} />
        <meta property="og:image" content={og.image} />
        <meta property="og:image:secure_url" content={og.image} />
        <meta property="og:site_name" content="alurex.bg" />
        <meta name="robots" content="all" />
      </Head>
    </>
  )
}

