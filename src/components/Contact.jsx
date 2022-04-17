import "./Contact.css";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-content">
        <h3 className="contact-title">Let's Get In Touch</h3>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
