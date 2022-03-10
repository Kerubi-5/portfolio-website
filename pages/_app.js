import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="-9qqJpKGshRJPseMtQESR_Sy1WYEQ_w2ZZSk6_f-Efg"
        />
        <meta
          name="description"
          content="A web portfolio website of John Kim A. Querobines"
        />
        <meta name="keywords" content="Portfolio website, Web Developer" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
