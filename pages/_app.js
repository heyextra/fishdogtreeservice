import '@styles/globals.css'
import Layout from '../components/layout'

function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Application
