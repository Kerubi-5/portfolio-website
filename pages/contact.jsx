import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <section className="contact section" id="contact">
        <span className="section__subtitle">Send an email</span>
        <h3 className="section__title">Contact Form</h3>

        <div className="contact container grid"></div>
      </section>
    </>
  );
};

export default Contact;