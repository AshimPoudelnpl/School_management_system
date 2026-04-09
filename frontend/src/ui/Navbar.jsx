import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import flagGif from "../assets/flg_gif/flag-CBVq6uIe.gif";
import {
  academicsDropdownItems,
  publicNavItems,
} from "../router/publicNavConfig";

// ── Social links data ───────────────────────────────────────────────────────
const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/groups/187255265389347",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 320 512">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
  },
];

// ── Live Clock ──────────────────────────────────────────────────────────────
function NepaliDate() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const ampm = now.getHours() >= 12 ? "PM" : "AM";
  const h12 = (now.getHours() % 12 || 12).toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");
  const s = now.getSeconds().toString().padStart(2, "0");
  return (
    <span className="font-mono text-[11px] tracking-wide">
      {days[now.getDay()]}, {months[now.getMonth()]} {now.getDate()} {now.getFullYear()} &nbsp;|&nbsp; {h12}:{m}:{s} {ampm}
    </span>
  );
}

// ── Navbar ──────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicsExpanded, setIsAcademicsExpanded] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const academicsActive = useMemo(
    () => location.pathname === "/academics" || location.pathname.startsWith("/academics/"),
    [location.pathname],
  );

  // Scroll detection for glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsAcademicsExpanded(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handle = (e) => {
      if (e.matches) { setIsMenuOpen(false); setIsAcademicsExpanded(false); }
      else setOpenDropdown(null);
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
    <div ref={dropdownRef} className="sticky top-0 z-50">
      {/* ── TOP INFO BAR ── */}
      <div
        className="bg-gradient-to-r from-[#0d2a5a] via-[#1a3a6e] to-[#0d2a5a] text-slate-300 text-[11.5px] border-b border-white/10"
      >
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-10 py-1.5 gap-2">
          {/* Left: contact info */}
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <svg className="h-3 w-3 fill-current text-amber-400 shrink-0" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Kohalpur 05, Banke
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3 w-3 fill-current text-amber-400 shrink-0" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.61 21 3 14.39 3 6.25c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z" />
              </svg>
              9848940309
            </span>
          </div>

          {/* Right: clock + social */}
          <div className="flex flex-1 sm:flex-none items-center justify-between sm:justify-end gap-3">
            <NepaliDate />
            <span className="text-white/20 hidden sm:inline">|</span>
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SCHOOL IDENTITY HEADER ── */}
      <div
        className={`overflow-hidden bg-white/95 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "max-h-0 -translate-y-2 border-b-0 opacity-0"
            : "max-h-40 translate-y-0 border-b border-slate-100 opacity-100"
        }`}
      >
        <div className="mx-auto max-w-screen-2xl px-4 py-3 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between gap-3 rounded-[1.75rem] border border-slate-200/80 bg-white/90 px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:gap-4 sm:px-5">
            <Link to="/" onClick={closeMenu} className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white via-slate-50 to-sky-50 ring-1 ring-slate-200 shadow-sm sm:h-16 sm:w-16">
                <img
                  src={logo}
                  alt="Western School logo"
                  className="h-10 w-auto object-contain transition-transform duration-200 hover:scale-105 sm:h-12"
                />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-sky-700/70 sm:text-[11px]">
                  Western School
                </p>
                <p
                  className="font-black leading-tight text-slate-800"
                  style={{ fontSize: "clamp(0.95rem, 2vw, 1.45rem)" }}
                >
                  Western English Medium Secondary School
                </p>

                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[11px] text-slate-500 sm:text-xs">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
                    Kohalpur-05, Banke
                  </span>
                  <span className="hidden rounded-full bg-amber-50 px-2.5 py-1 font-medium text-amber-700 sm:inline-flex">
                    westernschool@gmail.com
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-1 font-medium text-rose-600 md:hidden">
                    <img src={flagGif} alt="Nepal flag" className="h-3.5 w-auto object-contain" />
                    Nepal
                  </span>
                </div>
              </div>
            </Link>

            <div className="hidden shrink-0 md:flex items-center gap-3 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-rose-50 px-3.5 py-2.5 shadow-sm">
              <img src={flagGif} alt="Nepal flag" className="h-10 w-auto object-contain" />
              <div className="text-right">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Proudly Based In
                </p>
                <p className="text-sm font-semibold text-slate-700">Nepal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── NAVIGATION BAR ── */}
      <header
        className={`bg-gradient-to-r from-[#006fd6] via-[#1a5fb4] to-[#cb844a] text-white shadow-lg transition-all duration-300 ${
          scrolled ? "shadow-[0_4px_24px_rgba(0,111,214,0.35)]" : ""
        }`}
        ref={dropdownRef}
      >
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Desktop nav */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
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
                    className={`inline-flex items-center gap-1 whitespace-nowrap px-4 py-3.5 text-[13.5px] font-semibold tracking-wide transition-colors rounded-sm ${
                      academicsActive
                        ? "text-amber-300"
                        : "text-white/90 hover:text-amber-300"
                    }`}
                  >
                    {label}
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        openDropdown === path ? "rotate-180" : ""
                      }`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                    </svg>
                  </Link>

                  {/* Dropdown */}
                  {openDropdown === path && (
                    <div className="absolute left-0 top-full z-50 min-w-[220px] glass-card rounded-xl overflow-hidden shadow-2xl animate-fade-in-up">
                      {children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            `block px-5 py-3 text-[13px] font-semibold text-slate-700 transition-all hover:bg-blue-50 hover:text-blue-700 hover:pl-6 ${
                              isActive ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600" : ""
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
                    `whitespace-nowrap px-4 py-3.5 text-[13.5px] font-semibold tracking-wide transition-colors ${
                      isActive
                        ? "text-amber-300 border-b-2 border-amber-300"
                        : "text-white/90 hover:text-amber-300"
                    }`
                  }
                >
                  {label}
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 text-white transition-all hover:border-amber-300 hover:text-amber-300 hover:bg-white/10 lg:hidden my-2"
          >
            {isMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* ── Mobile menu ── */}
        {isMenuOpen && (
          <div className="border-t border-white/15 glass lg:hidden">
            <div
              className="mx-auto max-h-[calc(100vh-10rem)] max-w-screen-2xl overflow-y-auto px-4 py-3 sm:px-6"
              style={{ background: "rgba(13,42,90,0.97)" }}
            >
              <nav className="flex flex-col gap-1">
                {publicNavItems.map(({ path, label, children }) =>
                  children ? (
                    <div key={path} className="rounded-xl overflow-hidden border border-white/10">
                      <div className="flex items-center">
                        <Link
                          to={path}
                          onClick={closeMenu}
                          className={`flex-1 block px-4 py-3 text-[15px] font-semibold transition-colors ${
                            academicsActive ? "text-amber-300" : "text-white hover:text-amber-300"
                          }`}
                        >
                          {label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setIsAcademicsExpanded((o) => !o)}
                          className="h-12 w-12 flex items-center justify-center text-white hover:text-amber-300 transition-colors"
                        >
                          <svg
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isAcademicsExpanded ? "rotate-180" : ""
                            }`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                          </svg>
                        </button>
                      </div>
                      {isAcademicsExpanded && (
                        <div className="border-t border-white/10 flex flex-col gap-0.5 p-2 bg-white/5">
                          {academicsDropdownItems.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              onClick={closeMenu}
                              className={({ isActive }) =>
                                `block px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                                  isActive
                                    ? "text-amber-300 bg-white/10"
                                    : "text-white/80 hover:text-amber-300 hover:bg-white/10"
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
                        `block rounded-xl px-4 py-3 text-[15px] font-semibold transition-all ${
                          isActive
                            ? "text-amber-300 bg-white/10"
                            : "text-white hover:text-amber-300 hover:bg-white/10"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  ),
                )}
              </nav>

            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
