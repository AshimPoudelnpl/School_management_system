import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.webp";
import { publicNavItems } from "../router/PublicRoutes";

const desktopLinkClasses =
  "relative whitespace-nowrap px-3 py-2 text-sm font-semibold tracking-[0.01em] text-primary-color transition-colors duration-200 after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[1.5px] after:origin-left after:scale-x-0 after:rounded-full after:bg-secondary-color after:transition-transform after:duration-200 hover:after:scale-x-100";

const mobileLinkClasses =
  "relative block px-1 py-3 text-sm font-semibold tracking-[0.01em] text-primary-color transition-colors duration-200 after:absolute after:bottom-1 after:left-1 after:h-[1.5px] after:w-12 after:origin-left after:scale-x-0 after:rounded-full after:bg-secondary-color after:transition-transform after:duration-200 hover:after:scale-x-100";

const socialLinkClasses =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-color/15 bg-white text-primary-color transition duration-200 hover:-translate-y-0.5 hover:border-secondary-color hover:bg-primary-color hover:text-white hover:shadow-[0_12px_24px_-18px_rgba(27,16,230,0.85)]";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 320 512">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 448 512">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141m0 189.6c-41.3 0-74.7-33.4-74.7-74.7s33.4-74.7 74.7-74.7 74.7 33.4 74.7 74.7-33.4 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9 0-14.9 12-26.9 26.9-26.9 14.9 0 26.9 12 26.9 26.9m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9S352.4 1.7 316.5 0C280.4-1.7 167.6-1.7 131.5 0 95.6 1.7 63.8 9.9 37.6 36.1S1.7 95.6 0 131.5c-1.7 36.1-1.7 148.9 0 185 1.7 35.9 9.9 67.7 36.1 93.9s57.9 34.4 93.9 36.2c36.1 1.7 148.9 1.7 185 0 35.9-1.7 67.7-9.9 93.9-36.2s34.4-57.9 36.2-93.9c1.7-36.1 1.7-148.8 0-184.9M398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.7 102.9-9 132.3" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 512 512">
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.4 48H172l100.7 132.1zm-24.8 373.8h39.1L150.8 88h-42z" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-primary-color/10 bg-white/92 shadow-[0_18px_40px_-28px_rgba(22,122,171,0.55)] backdrop-blur">
      <div className="h-1 w-full bg-gradient-to-r from-primary-color via-secondary-color to-primary-color" />

      <div className="flex w-full items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-10">
        <Link
          to="/"
          className="relative flex shrink-0 items-center rounded-2xl border border-primary-color/10 bg-primary-color/5 px-3 py-2 shadow-[0_16px_34px_-26px_rgba(22,122,171,0.65)]"
        >
          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-secondary-color" />
          <img
            src={logo}
            alt="Western School logo"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        <div className="hidden lg:ml-auto lg:flex lg:items-center lg:justify-end lg:gap-5">
          <nav className="flex items-center justify-end gap-2 rounded-full border border-primary-color/10 bg-white/90 px-4 py-2 shadow-[0_18px_38px_-30px_rgba(22,122,171,0.75)]">
            {publicNavItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `${desktopLinkClasses} ${
                    isActive ? "after:scale-x-100" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 border-l border-primary-color/10 pl-5">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={socialLinkClasses}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary-color/15 bg-primary-color/5 text-primary-color shadow-[0_14px_28px_-24px_rgba(22,122,171,0.75)] transition hover:border-secondary-color hover:text-primary-color lg:hidden"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-primary-color/10 bg-white shadow-[0_24px_50px_-36px_rgba(22,122,171,0.65)] lg:hidden">
          <div className="flex flex-col gap-5 px-4 py-5 sm:px-6">
            <nav className="flex flex-col gap-1 rounded-3xl border border-primary-color/10 bg-primary-color/5 p-3">
              {publicNavItems.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `${mobileLinkClasses} ${
                      isActive ? "after:scale-x-100" : ""
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2 border-t border-primary-color/10 pt-4">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={socialLinkClasses}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
