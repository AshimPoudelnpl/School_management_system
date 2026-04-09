import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { publicNavItems } from "../router/publicNavConfig";

const quickLinks = publicNavItems.slice(0, 6);
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#06132a] via-[#0d2a5a] to-[#06132a] text-white">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-secondary-color/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-60 w-60 rounded-full bg-primary-color/10 blur-3xl" />

      <div className="relative mx-auto max-w-screen-xl px-4 pt-14 pb-8 sm:px-6 lg:px-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <img src={logo} alt="Western Secondary School" className="h-16 w-auto rounded-xl" />
            <div className="space-y-2">
              <h6 className="text-base font-bold text-white">Western E.M Secondary School</h6>
              <p className="text-sm leading-6 text-white/70">
                Quality education with strong values, modern learning, and a supportive environment for every student.
              </p>
            </div>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              <a href="https://www.facebook.com/groups/187255265389347" target="_blank" rel="noreferrer" aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/70 transition-all hover:bg-secondary-color hover:text-white hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 49.652 49.652">
                  <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h6 className="text-xs font-bold uppercase tracking-[0.22em] text-primary-color">Quick Links</h6>
            <ul className="space-y-2.5">
              {quickLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="flex items-center gap-2 text-[13px] text-white/65 transition-all hover:text-primary-color hover:translate-x-1 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-primary-color transition-colors shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h6 className="text-xs font-bold uppercase tracking-[0.22em] text-primary-color">Contact Info</h6>
            <ul className="space-y-3">
              {[
                {  text: "Kohalpur-05, Banke, Nepal" },
                {  text: "9848940309 / +977-81-414036" },
                {  text: "westernschool@gmail.com" },
                {  text: "Sun – Fri, 6:30 AM – 4:00 PM" },
              ].map(({  text }) => (
                <li key={text} className="flex items-start gap-2.5 text-[13px] text-white/65">
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-5">
            <h6 className="text-xs font-bold uppercase tracking-[0.22em] text-primary-color">Get In Touch</h6>
            <p className="text-[13px] leading-6 text-white/65">
              Reach out to us for admissions, school information, or any queries.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-secondary-color px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary-color/30 transition-all hover:shadow-secondary-color/50 hover:scale-[1.03] hover:-translate-y-0.5"
            >
              Contact Us
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[12px] text-white/50">
            © {currentYear} Western Secondary School. All Rights Reserved.
          </p>
          <p className="text-[12px] text-white/50">
            Powered by{" "}
            <a
              href="https://nextinfosys.com.np/"
              className="text-primary-color hover:text-primary-color/80 transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next Infosys Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
