import Head from 'next/head'
import About from './about'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AlbertcacV | Home</title>
        <meta name='description' content='Home site of AlbertcacV' />
      </Head>

      <About />
    </div>
  )
}
