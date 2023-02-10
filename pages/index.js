import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bem-vindo(a) ao site da Brota!" />
        <p className="description">
          <code>Site em manutenção. Em breve, novidades por aqui!</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
