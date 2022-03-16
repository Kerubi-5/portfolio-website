import { useRef } from "react";
import Head from "next/head";
import { UilEnvelopeCheck } from "@iconscout/react-unicons";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilFacebookMessengerAlt } from "@iconscout/react-unicons";
import { UilWhatsapp } from "@iconscout/react-unicons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const contactList = [
    {
      icon: <UilEnvelopeCheck className="contact__card-icon" />,
      name: "Email",
      data: "webdevs.kk@gmail.com",
      link: "mailto:webdevs.kk@gmail.com",
    },
    {
      icon: <UilFacebookMessengerAlt className="contact__card-icon" />,
      name: "Messenger",
      data: "user/mr.jkimpot",
      link: "https://m.me/mr.jkimpot/",
    },
    {
      icon: <UilWhatsapp className="contact__card-icon" />,
      name: "Whatsapp",
      data: "kerubi",
      link: "https://api.whatsapp.com/send?phone=0927&text=Hello, I saw your portfolio on vercel and I would like to connect with you",
    },
  ];
  const sendEmail = (e) => {
    e.preventDefault();
    console.log();
    if (
      !form.current.Name.value ||
      !form.current.Message.value ||
      !form.current.Email.value
    )
      return alert("Must complete fields before submitting 🚫");

    emailjs
      .sendForm(
        "service_83whxx9",
        "template_0z9jz4t",
        form.current,
        "user_w5JDlkXLXxembgQJtzuvl"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email submitted, thanks for visiting my website 🔥");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
      <section className="contact section" id="contact">
        <span className="section__subtitle">Send an email</span>
        <h3 className="section__title">Contact Form</h3>

        <div className="contact__container container grid">
          <div className="contact__info">{renderCards()}</div>
          <div className="contact__card">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Name"
                className="contact__input"
                name="Name"
              />
              <input
                type="mail"
                placeholder="Email"
                className="contact__input"
                name="Email"
              />
              <textarea
                placeholder="Message"
                id=""
                cols="0"
                rows="10"
                className="contact__input"
                name="Message"
              ></textarea>
              <button type="submit" className="button">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
