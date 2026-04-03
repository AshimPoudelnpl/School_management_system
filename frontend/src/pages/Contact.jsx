import React from "react";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => (
  <div className="flex min-h-screen flex-col lg:flex-row">
    <ContactInfo />
    <ContactForm />
  </div>
);

export default Contact;
