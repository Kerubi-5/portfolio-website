import Link from "next/link";
import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 | NOT FOUND</title>
      </Head>
      <div className="container">
        Not Found return to{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
