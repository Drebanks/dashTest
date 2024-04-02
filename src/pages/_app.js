import "@/styles/globals.css";
import Layout from "@/components/Layout/layout"

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}

export default App;