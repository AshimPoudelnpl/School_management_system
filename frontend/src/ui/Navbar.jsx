import React, { useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { academicsDropdownItems, publicNavItems } from "../router/publicNavConfig";

const desktopLinkClasses =
  "whitespace-nowrap rounded-full px-2 py-1.5 text-[12px] font-semibold tracking-[0.01em] underline-offset-8 decoration-[1px] decoration-background-color transition-colors hover:text-background-color hover:underline xl:px-2.5 xl:py-2 xl:text-[13px] 2xl:px-4 2xl:py-2.5 2xl:text-[15px]";

const mobileLinkClasses =
  "block rounded-2xl px-4 py-3.5 text-[15px] font-semibold underline-offset-4 decoration-[1px] decoration-background-color transition-colors hover:text-background-color hover:underline";

const socialLinkClasses =
  "inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-background-color hover:bg-white/12 hover:text-background-color xl:h-9 xl:w-9 2xl:h-10 2xl:w-10";

const dropdownLinkClasses =
  "block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:text-secondary-color";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/groups/187255265389347",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 fill-current"
        viewBox="0 0 320 512"
      >
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 fill-current"
        viewBox="0 0 448 512"
      >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141m0 189.6c-41.3 0-74.7-33.4-74.7-74.7s33.4-74.7 74.7-74.7 74.7 33.4 74.7 74.7-33.4 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9 0-14.9 12-26.9 26.9-26.9 14.9 0 26.9 12 26.9 26.9m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9S352.4 1.7 316.5 0C280.4-1.7 167.6-1.7 131.5 0 95.6 1.7 63.8 9.9 37.6 36.1S1.7 95.6 0 131.5c-1.7 36.1-1.7 148.9 0 185 1.7 35.9 9.9 67.7 36.1 93.9s57.9 34.4 93.9 36.2c36.1 1.7 148.9 1.7 185 0 35.9-1.7 67.7-9.9 93.9-36.2s34.4-57.9 36.2-93.9c1.7-36.1 1.7-148.8 0-184.9M398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.7 102.9-9 132.3" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 fill-current"
        viewBox="0 0 512 512"
      >
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.4 48H172l100.7 132.1zm-24.8 373.8h39.1L150.8 88h-42z" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicsExpanded, setIsAcademicsExpanded] = useState(false);
  const location = useLocation();

  const academicsActive = useMemo(
    () => location.pathname === "/academics" || location.pathname.startsWith("/academics/"),
    [location.pathname],
  );

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsAcademicsExpanded(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[linear-gradient(135deg,var(--color-secondary-color),var(--color-primary-color))] text-white shadow-lg backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-8 px-5 py-4 sm:px-8 lg:px-10 xl:px-14">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-4"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Western School logo"
            className="h-14 w-auto object-contain sm:h-16"
          />
          <div className="leading-tight">
            <p className="text-lg font-bold tracking-[0.08em] uppercase sm:text-xl">
              Western E.M
            </p>
            <p className="text-xs font-semibold tracking-[0.14em] text-background-color uppercase sm:text-sm">
              Secondary School
            </p>
          </div>
        </Link>

        <div className="hidden lg:ml-auto lg:flex lg:items-center lg:justify-end lg:gap-8">
          <nav className="flex items-center justify-end gap-2 xl:gap-3">
            {publicNavItems.map(({ path, label, children }) =>
              children ? (
                <div key={path} className="group relative">
                  <Link
                    to={path}
                    onClick={closeMenu}
                    className={`${desktopLinkClasses} inline-flex items-center gap-2 ${
                      academicsActive
                        ? "text-white underline"
                        : "text-white/90"
                    }`}
                  >
                    <span>{label}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transition group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m6 9 6 6 6-6"
                      />
                    </svg>
                  </Link>

                  <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 translate-y-2 border border-slate-200 bg-white p-2 opacity-0 shadow-xl shadow-slate-300/40 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `${dropdownLinkClasses} ${
                            isActive ? "text-secondary-color underline" : ""
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `${desktopLinkClasses} ${
                      isActive ? "text-white underline" : "text-white/90"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3 border-l border-white/20 pl-6">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className={socialLinkClasses}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/5 text-white transition hover:border-background-color hover:text-background-color lg:hidden"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[linear-gradient(135deg,var(--color-secondary-color),var(--color-primary-color))] lg:hidden">
          <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 px-5 py-5 sm:px-8">
            <nav className="flex flex-col gap-1">
              {publicNavItems.map(({ path, label, children }) =>
                children ? (
                  <div key={path} className="rounded-2xl border border-white/10 bg-white/5 p-2">
                    <div className="flex items-center gap-2">
                      <Link
                        to={path}
                        onClick={closeMenu}
                        className={`${mobileLinkClasses} flex-1 ${
                          academicsActive ? "text-white underline" : "text-white/90"
                        }`}
                      >
                        {label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setIsAcademicsExpanded((open) => !open)}
                        aria-label={
                          isAcademicsExpanded
                            ? "Collapse academics submenu"
                            : "Expand academics submenu"
                        }
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white transition hover:bg-white/10"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 transition ${
                            isAcademicsExpanded ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m6 9 6 6 6-6"
                          />
                        </svg>
                      </button>
                    </div>

                    {isAcademicsExpanded && (
                      <div className="mt-2 flex flex-col gap-1 border-t border-white/10 pt-2">
                        {academicsDropdownItems.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                              `block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                                isActive
                                  ? "text-white underline underline-offset-4"
                                  : "text-white/85 hover:text-background-color"
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={path}
                    to={path}
                    end={path === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `${mobileLinkClasses} ${
                        isActive ? "text-white underline" : "text-white/90"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ),
              )}
            </nav>

            <div className="flex items-center gap-3 border-t border-white/20 pt-4">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
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
