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
  "whitespace-nowrap px-3 py-1.5 text-[13.5px] font-semibold tracking-wide text-white transition-colors hover:text-yellow-300 xl:px-4 xl:text-[14px]";

const mobileLinkClasses =
  "block rounded px-4 py-3 text-[15px] font-semibold text-white transition-colors hover:text-yellow-300";

const dropdownLinkClasses =
  "block px-4 py-2.5 text-[13.5px] font-semibold text-slate-800 transition hover:bg-blue-50 hover:text-blue-800";

// ── social links ───────────────────────────────────────────────────────────────
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
    <span>
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

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsAcademicsExpanded(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* ── TOP INFO BAR ── */}
      <div className="sticky top-0 z-50 bg-[#1a3a6e] text-slate-200 text-[12.5px]">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-2 py-1.5 sm:px-6 lg:px-10">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 fill-current text-yellow-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Kohalpur 05, Banke
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 fill-current text-yellow-300"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.61 21 3 14.39 3 6.25c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z" />
              </svg>
              9848940309
            </span>
          </div>
          <div className="flex items-center gap-3">
            <NepaliDate />
            <span className="text-white/30">|</span>
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-yellow-300 transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SCHOOL IDENTITY HEADER — CENTERED ── */}
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto flex max-w-screen-2xl items-center px-6 py-4 lg:px-10 gap-4">
          {/* Left: School Logo */}
          <Link to="/" onClick={closeMenu} className="shrink-0 ml-10 sm:ml-16">
            <img
              src={logo}
              alt="Western School logo"
              className="h-16 w-auto object-contain sm:h-20"
            />
          </Link>

          {/* Center: School Name (takes remaining space, centered) */}
          <div className="flex-1 flex flex-col items-center text-center">
            <p
              className="text-[#c0392b] font-extrabold tracking-wide uppercase"
              style={{ fontSize: "clamp(1rem, 2.2vw, 1.5rem)" }}
            >
              Western English Medium Secondary School
            </p>
            <p className="text-slate-500 text-sm mt-1">
              Kohalpur-05, Banke &nbsp;|&nbsp; westernschool@gmail.com
            </p>
          </div>

          {/* Right: Animated Waving Nepal Flag */}
          <div className="shrink-0 flex items-center justify-center">
            <img
              src={flagGif}
              alt="Nepal flag"
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* ── NAVIGATION BAR ── */}
      <header
        className="sticky top-7 z-40 bg-[linear-gradient(135deg,var(--color-secondary-color),var(--color-primary-color))] text-white shadow-md"
        ref={dropdownRef}
      >
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex flex-1 items-center justify-center">
            {publicNavItems.map(({ path, label, children }) =>
              children ? (
                <div
                  key={path}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(path)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={path}
                    onClick={closeMenu}
                    className={`${navLinkBase} inline-flex items-center gap-1 py-3.5 ${academicsActive ? "text-yellow-300" : ""}`}
                  >
                    {label}
                    <svg
                      className={`h-3.5 w-3.5 transition ${openDropdown === path ? "rotate-180" : ""}`}
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
                  {openDropdown === path && (
                    <div className="absolute left-0 top-full z-50 min-w-[200px] bg-white shadow-xl border border-slate-100">
                      {children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            `${dropdownLinkClasses} ${isActive ? "bg-blue-50 text-blue-800" : ""}`
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
                    `${navLinkBase} py-3.5 ${isActive ? "text-yellow-300" : ""}`
                  }
                >
                  {label}
                </NavLink>
              ),
            )}
          </nav>

          {/* Login button */}
          <div className="hidden lg:flex items-center py-2 shrink-0">
            <Link
              to="/login"
              onClick={closeMenu}
              className="rounded bg-[#c0392b] px-5 py-2 text-[13.5px] font-bold text-white tracking-wide hover:bg-[#a93226] transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-white/30 text-white transition hover:border-yellow-300 hover:text-yellow-300 lg:hidden my-2"
          >
            {isMenuOpen ? (
              <svg
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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="border-t border-white/10 bg-[#1a3a6e] lg:hidden">
            <div className="mx-auto max-h-[calc(100vh-6rem)] max-w-screen-2xl overflow-y-auto px-4 py-3 sm:px-6">
              <nav className="flex flex-col gap-0.5">
                {publicNavItems.map(({ path, label, children }) =>
                  children ? (
                    <div key={path} className="border border-white/10 rounded">
                      <div className="flex items-center">
                        <Link
                          to={path}
                          onClick={closeMenu}
                          className={`${mobileLinkClasses} flex-1 ${academicsActive ? "text-yellow-300" : ""}`}
                        >
                          {label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setIsAcademicsExpanded((o) => !o)}
                          className="h-10 w-10 flex items-center justify-center text-white hover:text-yellow-300"
                        >
                          <svg
                            className={`h-4 w-4 transition ${isAcademicsExpanded ? "rotate-180" : ""}`}
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
                      </div>
                      {isAcademicsExpanded && (
                        <div className="border-t border-white/10 flex flex-col gap-0.5 p-2">
                          {academicsDropdownItems.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              onClick={closeMenu}
                              className={({ isActive }) =>
                                `block px-4 py-2.5 text-sm font-semibold rounded transition ${isActive ? "text-yellow-300 underline" : "text-white/85 hover:text-yellow-300"}`
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
                        `${mobileLinkClasses} ${isActive ? "text-yellow-300 underline" : ""}`
                      }
                    >
                      {label}
                    </NavLink>
                  ),
                )}
              </nav>
              <div className="mt-4 border-t border-white/20 pt-4">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="block w-full text-center rounded bg-[#c0392b] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#a93226] transition"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
