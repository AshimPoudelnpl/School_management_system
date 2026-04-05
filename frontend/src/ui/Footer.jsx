import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { publicNavItems } from "../router/publicNavConfig";

const quickLinks = publicNavItems.slice(0, 6);
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(135deg,rgba(0,0,0,0.6),rgba(0,0,0,0.3))] px-4 pb-6 pt-12 text-white sm:px-6">
      {" "}
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="space-y-6">
          <img
            src={logo}
            alt="Western Secondary School"
            className="w-20 rounded-full p-2"
          />
          <div className="space-y-2">
            <h6 className="text-lg font-bold text-white">
              Western E.M Secondary School
            </h6>
            <p className="text-sm text-white/80">
              Quality education with strong values, modern learning, and a
              supportive environment for every student.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h6 className="text-sm font-medium uppercase tracking-[0.22em] text-background-color">
            Quick Links
          </h6>
          <ul className="space-y-3">
            {quickLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="text-[13px] text-white/80 transition hover:text-background-color"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h6 className="text-sm font-medium uppercase tracking-[0.22em] text-background-color">
            Contact Info
          </h6>
          <ul className="space-y-3">
            <li className="text-[13px] text-white/80">Kathmandu, Nepal</li>
            <li className="text-[13px] text-white/80">+977-1-414036</li>
            <li className="text-[13px] text-white/80">
              westernsecondaryschool@gmail.com
            </li>
            <li className="text-[13px] text-white/80">
              Sunday - Friday, 6:30 AM - 4:00 PM
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h6 className="text-sm font-medium uppercase tracking-[0.22em] text-background-color">
            Follow Us
          </h6>
          <ul className="flex space-x-4">
            <li>
              <a href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 fill-white transition hover:fill-background-color"
                  viewBox="0 0 49.652 49.652"
                >
                  <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 fill-white transition hover:fill-background-color"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141m0 189.6c-41.3 0-74.7-33.4-74.7-74.7s33.4-74.7 74.7-74.7 74.7 33.4 74.7 74.7-33.4 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9 0-14.9 12-26.9 26.9-26.9 14.9 0 26.9 12 26.9 26.9m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9S352.4 1.7 316.5 0C280.4-1.7 167.6-1.7 131.5 0 95.6 1.7 63.8 9.9 37.6 36.1S1.7 95.6 0 131.5c-1.7 36.1-1.7 148.9 0 185 1.7 35.9 9.9 67.7 36.1 93.9s57.9 34.4 93.9 36.2c36.1 1.7 148.9 1.7 185 0 35.9-1.7 67.7-9.9 93.9-36.2s34.4-57.9 36.2-93.9c1.7-36.1 1.7-148.8 0-184.9M398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.7 102.9-9 132.3" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="X">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 fill-white transition hover:fill-background-color"
                  viewBox="0 0 1227 1227"
                >
                  <path d="M613.5 0C274.685 0 0 274.685 0 613.5S274.685 1227 613.5 1227 1227 952.315 1227 613.5 952.315 0 613.5 0z" />
                  <path
                    fill="#fff"
                    d="m680.617 557.98 262.632-305.288h-62.235L652.97 517.77 470.833 252.692H260.759l275.427 400.844-275.427 320.142h62.239l240.82-279.931 192.35 279.931h210.074L680.601 557.98zM345.423 299.545h95.595l440.024 629.411h-95.595z"
                  />
                </svg>
              </a>
            </li>
          </ul>

          <div className="!mt-8">
            <h6 className="text-[13px] font-medium text-white/80">
              Get in touch with us for admissions and school information
            </h6>
            <div className="mt-6">
              <Link
                to="/contact"
                className="rounded bg-white px-6 py-3 text-sm font-medium tracking-wide text-secondary-color transition hover:bg-background-color"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-white/15" />
      <div className="mx-auto flex max-w-screen-xl flex-col gap-2 text-start sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-white/75">
          Copyright (c) {currentYear} Western Secondary School. All Rights
          Reserved.
        </p>
        <p className="text-[13px] text-white/75">
          Powered by{" "}
          <a
            href="https://nextinfosys.com.np/"
            className="text-yellow-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next Infosys Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
