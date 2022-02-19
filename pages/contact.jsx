import Head from "next/head";
import { UilEnvelopeCheck } from "@iconscout/react-unicons";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilFacebookMessenger } from "@iconscout/react-unicons";

const Contact = () => {
  const contactList = [
    {
      icon: <UilEnvelopeCheck className="contact__card-icon" />,
      name: "Email",
      data: "webdevs.kk@gmail.com",
      link: "mailto:webdevs.kk@gmail.com",
    },
    {
      icon: <UilFacebookMessenger className="contact__card-icon" />,
      name: "Messenger",
      data: "user/mr.jkimpot",
      link: "https://m.me/mr.jkimpot/",
    },
  ];
  const renderCards = () => {
    return contactList.map((contact) => {
      return (
        <div className="contact__card" key={contact.data}>
          {contact.icon}
          <h3 className="contact__card-title">{contact.name}</h3>
          <span className="contact__card-data">{contact.data}</span>
          <a className="contact__button" href={contact.link}>
            Contact me <UilArrowRight className="contact__button-icon" />
          </a>
        </div>
      );
    });
  };
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <section className="contact section" id="contact">
        <span className="section__subtitle">Send an email</span>
        <h3 className="section__title">Contact Form</h3>

        <div className="contact__container container grid">
          <div className="contact__info">{renderCards()}</div>
          <div className="contact__card">
            <input type="text" placeholder="Name" className="contact__input" />
            <input type="mail" placeholder="Email" className="contact__input" />
            <textarea
              name=""
              placeholder="Message"
              id=""
              cols="0"
              rows="10"
              className="contact__input"
            ></textarea>
            <button className="button">Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
