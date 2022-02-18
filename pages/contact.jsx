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

        <div className="contact container grid">
          <input type="text" placeholder="Name" className="contact__input" />
          <input type="mail" placeholder="Email" className="contact__input" />
          <textarea
            name=""
            id=""
            cols="0"
            rows="10"
            className="contact__input"
          ></textarea>
          <button className="button">Submit</button>
        </div>
      </section>
    </>
  );
};

export default Contact;
