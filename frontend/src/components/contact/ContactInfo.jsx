import React from "react";
import logo from "../../assets/logo.png";
import { schoolBuilding } from "../../assets";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path d="M6.8 4.5h2.3c.4 0 .7.3.8.7l.7 3c.1.4 0 .8-.3 1.1l-1.3 1.3a14.8 14.8 0 0 0 4.3 4.3l1.3-1.3c.3-.3.7-.4 1.1-.3l3 .7c.4.1.7.4.7.8v2.3c0 .6-.5 1.1-1.1 1.2A14.6 14.6 0 0 1 5.7 5.6c.1-.6.6-1.1 1.1-1.1Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path d="M12 20s6-5.7 6-10a6 6 0 1 0-12 0c0 4.3 6 10 6 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path d="M4 7.5h16v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ContactInfo = () => (
  <div data-gsap="reveal" className="relative overflow-hidden bg-slate-100 p-8 lg:w-1/2 lg:p-12">
    <div className="absolute inset-0 opacity-10">
      <img src={schoolBuilding} alt="Western School building" className="h-full w-full object-cover" />
    </div>
    <div className="relative z-10">
      <img src={logo} alt="Western School" className="mb-6 w-20 rounded-full bg-white p-2 shadow-lg shadow-slate-300/60" />
      <h1 className="text-4xl font-black text-slate-800">NEED HELP? WE ARE HERE.</h1>
      <div className="mt-4 h-1 w-20 bg-secondary-color" />
      <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
        Call us at the number below or fill out the form to hear back from us about admissions, academics, and school information.
      </p>
      <div className="mt-8 space-y-4">
        <p className="flex items-center gap-3 text-slate-700"><span className="text-secondary-color"><PhoneIcon /></span>+977-1-414036</p>
        <p className="flex items-center gap-3 text-slate-700"><span className="text-secondary-color"><MapPinIcon /></span>Kohalpur, Banke, Nepal</p>
        <p className="flex items-center gap-3 text-slate-700"><span className="text-secondary-color"><MailIcon /></span>westernsecondaryschool@gmail.com</p>
      </div>
      <div className="mt-8 overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/70">
        <iframe
          title="Western Secondary School Banke map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.52881514596!2d81.67101837528388!3d28.191241875908624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399865946865f2bb%3A0x937a73ab635d4a3e!2sWestern%20Secondary%20School%2C%20Kohalpur%205!5e0!3m2!1sen!2snp!4v1775056630927!5m2!1sen!2snp"
          className="h-[320px] w-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
);

export default ContactInfo;
