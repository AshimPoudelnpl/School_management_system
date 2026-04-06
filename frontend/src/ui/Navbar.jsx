import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import flagGif from "../assets/flg_gif/flag-CBVq6uIe.gif";
import {
  academicsDropdownItems,
  publicNavItems,
} from "../router/publicNavConfig";

// ── Class Strings ──────────────────────────────────────────────────────────────
const navLinkBase =
  "whitespace-nowrap px-3 py-2 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:text-yellow-300 xl:px-4 relative group";

const navLinkUnderline =
  "after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 group-hover:after:w-full";

const mobileLinkClasses =
  "block rounded-lg px-4 py-3 text-base font-semibold text-white transition-all duration-200 hover:text-yellow-300 hover:bg-white/5";

const dropdownLinkClasses =
  "block px-4 py-3 text-sm font-semibold text-slate-800 transition-all duration-200 hover:bg-blue-50 hover:text-blue-800 hover:pl-6 border-l-4 border-transparent hover:border-blue-500";

// ── Social Links ───────────────────────────────────────────────────────────────
const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/groups/187255265389347",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 fill-current transition-transform duration-200 hover:scale-110"
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
    <span className="flex items-center gap-1">
      <svg
        className="h-3.5 w-3.5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
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
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
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
    setSearchQuery("");
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
      if (searchRef.current && !searchRef.current.contains(e.target))
        setIsSearchOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsAcademicsExpanded(false);
    setOpenDropdown(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // TODO: Implement search functionality
      console.log("Search for:", searchQuery);
    }
  };

  return (
    <>
      {/* ── TOP INFO BAR ── */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-[#1a3a6e] to-[#0f2847] text-slate-200 text-xs sm:text-sm shadow-lg">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-3 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
            <span className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
              <svg
                className="h-4 w-4 fill-current text-yellow-300 shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="hidden xs:inline">Kohalpur 05, Banke</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
              <svg
                className="h-4 w-4 fill-current text-yellow-300 shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.61 21 3 14.39 3 6.25c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z" />
              </svg>
              <span className="hidden xs:inline">9848940309</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <NepaliDate />
            <span className="text-white/20">|</span>
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-yellow-300 transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SCHOOL IDENTITY HEADER — CENTERED ── */}
      <div className="bg-white border-b-2 border-slate-200 shadow-md">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:px-10">
          {/* Left: School Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="shrink-0 transition-transform duration-200 hover:scale-105"
          >
            <img
              src={logo}
              alt="Western School logo"
              className="h-16 w-auto object-contain sm:h-20"
            />
          </Link>

          {/* Center: School Name (takes remaining space, centered) */}
          <div className="flex-1 flex flex-col items-center text-center">
            <p
              className="text-[#c0392b] font-extrabold tracking-wider uppercase"
              style={{ fontSize: "clamp(1rem, 2.2vw, 1.5rem)" }}
            >
              Western English Medium Secondary School
            </p>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Kohalpur-05, Banke &nbsp;|&nbsp; westernschool@gmail.com
            </p>
          </div>

          {/* Right: Animated Waving Nepal Flag */}
          <div className="shrink-0 flex items-center justify-center">
            <img
              src={flagGif}
              alt="Nepal flag"
              className="h-20 w-auto object-contain animate-pulse"
            />
          </div>
        </div>
      </div>

      {/* ── NAVIGATION BAR ── */}
      <header
        className="sticky top-7 z-40 bg-gradient-to-r from-[#006fd6] via-[#0052a3] to-[#cb844a] text-white shadow-lg"
        ref={dropdownRef}
      >
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-10 py-0">
          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
            {publicNavItems.map(({ path, label, children }) =>
              children ? (
                <div
                  key={path}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(path)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`${navLinkBase} ${navLinkUnderline} inline-flex items-center gap-1.5 py-3.5`}
                  >
                    {label}
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openDropdown === path ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m6 9 6 6 6-6"
                      />
                    </svg>
                  </button>
                  {openDropdown === path && (
                    <div className="absolute left-0 top-full z-50 min-w-[220px] bg-white shadow-2xl border-t-4 border-blue-500 rounded-b-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      {children.map((child, index) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            `${dropdownLinkClasses} ${
                              isActive ? "bg-blue-50 text-blue-800 border-blue-500" : ""
                            } ${index !== children.length - 1 ? "border-b border-slate-100" : ""}`
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
                    `${navLinkBase} ${navLinkUnderline} py-3.5 ${
                      isActive ? "text-yellow-300 after:w-full" : ""
                    }`
                  }
                >
                  {label}
                </NavLink>
              ),
            )}
          </nav>

          {/* Desktop Search & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Search Bar */}
            <div ref={searchRef} className="relative hidden sm:block">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchOpen(true)}
                  className="px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-yellow-300 focus:bg-white/20 transition-all duration-200 text-sm w-32 lg:w-40 focus:w-48"
                  aria-label="Search"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-yellow-300 transition-colors"
                  aria-label="Submit search"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-white transition-all duration-200 hover:border-yellow-300 hover:text-yellow-300 hover:bg-white/10 lg:hidden"
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
                    d="M6 6l12 12M18 6L6 18"
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
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="border-t border-white/10 bg-gradient-to-b from-[#006fd6] to-[#0052a3] lg:hidden animate-in fade-in slide-in-from-top duration-200">
            <div className="mx-auto max-h-[calc(100vh-8rem)] max-w-screen-2xl overflow-y-auto px-4 py-4 sm:px-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-yellow-300 focus:bg-white/20 transition-all duration-200"
                    aria-label="Search"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-yellow-300"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </form>

              <nav className="flex flex-col gap-1">
                {publicNavItems.map(({ path, label, children }) =>
                  children ? (
                    <div key={path} className="border border-white/10 rounded-lg overflow-hidden">
                      <div className="flex items-center">
                        <Link
                          to={path}
                          onClick={closeMenu}
                          className={`${mobileLinkClasses} flex-1 rounded-none ${
                            academicsActive ? "text-yellow-300 bg-white/10" : ""
                          }`}
                        >
                          {label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setIsAcademicsExpanded((o) => !o)}
                          className="h-10 w-10 flex items-center justify-center text-white hover:text-yellow-300 transition-colors"
                          aria-label={isAcademicsExpanded ? "Collapse" : "Expand"}
                          aria-expanded={isAcademicsExpanded}
                        >
                          <svg
                            className={`h-5 w-5 transition-transform duration-300 ${
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
                      </div>
                      {isAcademicsExpanded && (
                        <div className="border-t border-white/10 flex flex-col gap-0.5 p-2 bg-white/5">
                          {children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              onClick={closeMenu}
                              className={({ isActive }) =>
                                `block px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
                                  isActive
                                    ? "text-yellow-300 bg-white/10 underline"
                                    : "text-white/85 hover:text-yellow-300 hover:bg-white/5"
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
                          isActive ? "text-yellow-300 bg-white/10 underline" : ""
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  ),
                )}
              </nav>

              <div className="mt-6 border-t border-white/20 pt-4 flex flex-col gap-3">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="block w-full text-center rounded-lg bg-[#c0392b] px-5 py-3 text-base font-bold text-white hover:bg-[#a93226] transition-all duration-200 shadow-lg hover:shadow-xl"
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
