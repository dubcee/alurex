import Head from 'next/head'

export const Meta = (props) => {
  const { title, keywords, description, og } = props
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={'viewport'} content={'width=device-width,initial-scale=1'} />
        <meta name="robots" content="all" />
        <link rel={'icon'} href={'/favicon.ico'} />
        <link rel="canonical" href="https://www.alurex.bg/" />
        <meta charSet={'utf-8'} />
        <meta name={'keywords'} content={keywords} />
        <meta name={'description'} content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alurex.bg/" />
        <meta property="og:site_name" content="ALUREX ViP Design" />
        <meta property="og:locale" content="bg_BG" />
        <meta property="og:title" content={og.title} />
        <meta property="og:description" content={og.description} />
        <meta property="og:image" content={og.image} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="768" />
        <meta property="og:image:secure_url" content={og.image} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:site_name" content="alurex.bg" />
      </Head>
    </>
  )
}

