import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import flagGif from "../assets/flg_gif/flag-CBVq6uIe.gif";
import {
  academicsDropdownItems,
  publicNavItems,
} from "../router/publicNavConfig";

// ── class strings ──────────────────────────────────────────────────────────────
const navLinkBase =
  "relative px-3 py-2 text-[13.5px] font-semibold tracking-wide text-white transition-all duration-300 xl:px-4 xl:text-[14px] hover:text-yellow-300 group";

const textNavLinkBase =
  "inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 transition hover:text-secondary-color";

const mobileLinkClasses =
  "block rounded-lg px-4 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:text-yellow-300 hover:bg-white/10";

const dropdownLinkClasses =
  "block px-4 py-3 text-[13.5px] font-semibold text-slate-800 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-900 hover:pl-6 border-l-4 border-transparent hover:border-blue-500";

// ── social links ───────────────────────────────────────────────────────────────
const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/groups/187255265389347",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 fill-current transition-transform duration-300 hover:scale-110"
        viewBox="0 0 320 512"
      >
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
  },
];

// ── Live Clock ─────────────────────────────────────────────────────────────────
function NepaliDate() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const ampm = now.getHours() >= 12 ? "PM" : "AM";
  const h12 = (now.getHours() % 12 || 12).toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");
  const s = now.getSeconds().toString().padStart(2, "0");
  return (
    <span className="text-white/90 font-medium">
      {days[now.getDay()]}, {months[now.getMonth()]} {now.getDate()}{" "}
      {now.getFullYear()} | {h12}:{m}:{s} {ampm}
    </span>
  );
}

// ── Navbar ─────────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicsExpanded, setIsAcademicsExpanded] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const academicsActive = useMemo(
    () =>
      location.pathname === "/academics" ||
      location.pathname.startsWith("/academics/"),
    [location.pathname],
  );

  useEffect(() => {
    setIsMenuOpen(false);
    setIsAcademicsExpanded(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handle = (e) => {
      if (e.matches) {
        setIsMenuOpen(false);
        setIsAcademicsExpanded(false);
      } else setOpenDropdown(null);
    };
    handle(mq);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsAcademicsExpanded(false);
    setOpenDropdown(null);
  };

  return (
    <div ref={dropdownRef}>
      {/* ── TOP INFO BAR ── */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-[#1a3a6e] via-[#1f4580] to-[#1a3a6e] text-slate-200 text-[12.5px] shadow-lg">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-2 px-2 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
            <span className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors duration-300">
              <svg
                className="h-3.5 w-3.5 fill-current text-yellow-400 animate-pulse"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Kohalpur 05, Banke
            </span>
            <span className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors duration-300">
              <svg
                className="h-3.5 w-3.5 fill-current text-yellow-400 animate-pulse"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.61 21 3 14.39 3 6.25c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z" />
              </svg>
              9848940309
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <NepaliDate />
            <span className="text-white/30">|</span>
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SCHOOL IDENTITY HEADER — CENTERED ── */}
      <div className={`bg-white border-b-2 border-slate-200 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-4 px-6 py-4 lg:flex-row lg:items-center lg:px-10">
          {/* Left: School Logo */}
          <Link to="/" onClick={closeMenu} className="shrink-0 ml-10 sm:ml-16 hover:scale-105 transition-transform duration-300">
            <img
              src={logo}
              alt="Western School logo"
              className="h-16 w-auto object-contain sm:h-20 drop-shadow-md"
            />
          </Link>

          {/* Center: School Name (takes remaining space, centered) */}
          <div className="flex-1 flex flex-col items-center text-center">
            <p
              className="text-[#c0392b] font-extrabold tracking-wide uppercase bg-gradient-to-r from-[#c0392b] to-[#a93226] bg-clip-text text-transparent"
              style={{ fontSize: "clamp(1rem, 2.2vw, 1.5rem)" }}
            >
              Western English Medium Secondary School
            </p>
            <p className="text-slate-500 text-sm mt-1 font-medium">
              Kohalpur-05, Banke &nbsp;|&nbsp; westernschool@gmail.com
            </p>
          </div>

          {/* Right: Animated Waving Nepal Flag */}
          <div className="shrink-0 flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <img
              src={flagGif}
              alt="Nepal flag"
              className="h-20 w-auto object-contain drop-shadow-md"
            />
          </div>
        </div>
      </div>

      {/* ── NAVIGATION BAR ── */}
      <header
        className={`sticky top-7 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-[#006fd6] via-[#0088ff] to-[#006fd6] shadow-2xl"
            : "bg-gradient-to-r from-[#006fd6] via-[#0088ff] to-[#006fd6] shadow-lg"
        } text-white`}
        ref={dropdownRef}
      >
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex flex-1 items-center justify-center">
            {publicNavItems.map(({ path, label, children }) =>
              children ? (
                <div
                  key={path}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(path)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={path}
                    onClick={closeMenu}
                    className={`${navLinkBase} inline-flex items-center gap-1 py-3.5 ${
                      academicsActive ? "text-yellow-300" : ""
                    }`}
                  >
                    {label}
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        openDropdown === path ? "rotate-180" : "group-hover:rotate-180"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m6 9 6 6 6-6"
                      />
                    </svg>
                  </Link>
                  {/* Underline animation */}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-300 group-hover:w-full w-0"></div>

                  {openDropdown === path && (
                    <div className="absolute left-0 top-full z-50 min-w-[220px] bg-white shadow-2xl border-t-4 border-blue-500 rounded-b-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      {children.map((child, idx) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            `${dropdownLinkClasses} ${
                              isActive
                                ? "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-900 border-l-blue-600"
                                : ""
                            } ${idx !== children.length - 1 ? "border-b border-slate-100" : ""}`
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
                    `${navLinkBase} py-3.5 relative group ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  {label}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-300 group-hover:w-full w-0"></div>
                </NavLink>
              ),
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-white/40 text-white transition-all duration-300 hover:border-yellow-300 hover:text-yellow-300 hover:bg-white/10 lg:hidden my-2"
          >
            {isMenuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="border-t border-white/20 bg-gradient-to-b from-[#006fd6] to-[#004fa3] lg:hidden animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6">
              {publicNavItems.map(({ path, label, children }) => (
                <div key={path}>
                  {children ? (
                    <>
                      <button
                        onClick={() =>
                          setIsAcademicsExpanded(!isAcademicsExpanded)
                        }
                        className={`${mobileLinkClasses} w-full text-left flex items-center justify-between mb-2`}
                      >
                        {label}
                        <svg
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isAcademicsExpanded ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m6 9 6 6 6-6"
                          />
                        </svg>
                      </button>
                      {isAcademicsExpanded && (
                        <div className="ml-4 mb-2 space-y-1 border-l-2 border-yellow-300 pl-3 animate-in fade-in slide-in-from-left-2 duration-200">
                          {children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              onClick={closeMenu}
                              className={({ isActive }) =>
                                `block rounded px-3 py-2 text-[14px] font-semibold transition-all duration-300 ${
                                  isActive
                                    ? "text-yellow-300 bg-white/10"
                                    : "text-white hover:text-yellow-300 hover:bg-white/5"
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={path}
                      end={path === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `${mobileLinkClasses} mb-2 ${
                          isActive ? "text-yellow-300 bg-white/10" : ""
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
