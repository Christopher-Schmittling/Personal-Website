import "./Contact.css";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-content">
        <h3 className="contact-title">Let's Get In Touch</h3>
        <p className="contact-para">
          Please fill out the form below and if you would like to add some
          details about your project, you may do so in the message box at the
          bottom. I will be in touch as soon as possible.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
