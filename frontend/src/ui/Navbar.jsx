import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
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

const SCHOOL_PHONE = "9848940309";
const WHATSAPP_LINK = "https://wa.me/9779848940309?text=Hello%20Western%20School";

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
    <span className="font-mono text-[10px] tracking-wide sm:text-[11px]">
      <span className="sm:hidden">{h12}:{m} {ampm}</span>
      <span className="hidden sm:inline">
        {days[now.getDay()]}, {months[now.getMonth()]} {now.getDate()} {now.getFullYear()} &nbsp;|&nbsp; {h12}:{m}:{s} {ampm}
      </span>
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
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-2 px-4 py-1.5 sm:px-6 lg:px-10">
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
              {SCHOOL_PHONE}
            </span>
          </div>

          {/* Right: clock + social */}
          <div className="flex flex-1 items-center justify-end gap-3 sm:flex-none sm:justify-end">
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
        <div className="mx-auto flex max-w-screen-2xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="shrink-0">
            <img
              src={logo}
              alt="Western School logo"
              className="h-12 w-auto object-contain transition-transform duration-200 hover:scale-105 sm:h-16"
            />
          </Link>

          {/* School name */}
          <div className="min-w-0 flex-1 text-left sm:text-center">
            <p
              className="font-extrabold uppercase leading-tight text-[#c0392b]"
              style={{ fontSize: "clamp(0.85rem, 2vw, 1.4rem)" }}
            >
              Western English Medium Secondary School
            </p>
            <p className="mt-1 text-[11px] text-slate-500 sm:hidden">
              Kohalpur-05, Banke
            </p>
            <p className="text-slate-500 text-xs sm:text-sm mt-0.5 hidden sm:block">
              Kohalpur-05, Banke &nbsp;|&nbsp; westernschool@gmail.com
            </p>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-600 hover:shadow-emerald-500/35 md:inline-flex"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M19.11 17.33c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.85 1.08-.16.18-.31.21-.59.07-.28-.14-1.17-.43-2.23-1.36-.82-.73-1.38-1.63-1.54-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.5.14-.16.18-.28.28-.47.09-.18.05-.35-.02-.5-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.71.35-.25.28-.95.93-.95 2.27s.97 2.63 1.11 2.82c.14.18 1.9 2.9 4.6 4.06.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.33-.07-.12-.25-.18-.52-.32Z" />
              <path d="M16.02 3.2c-7.08 0-12.82 5.74-12.82 12.81 0 2.27.59 4.48 1.72 6.42L3 29l6.75-1.77a12.78 12.78 0 0 0 6.27 1.61h.01c7.07 0 12.81-5.74 12.81-12.82A12.8 12.8 0 0 0 16.02 3.2Zm0 23.48h-.01a10.64 10.64 0 0 1-5.43-1.49l-.39-.23-4 .05 1.07-3.86-.25-.4a10.62 10.62 0 1 1 9 5.93Z" />
            </svg>
          </a>

        </div>
      </div>

      {/* ── NAVIGATION BAR ── */}
      <header
        className={`bg-gradient-to-r from-[#006fd6] via-[#1a5fb4] to-[#cb844a] text-white shadow-lg transition-all duration-300 ${
          scrolled ? "shadow-[0_4px_24px_rgba(0,111,214,0.35)]" : ""
        }`}
        ref={dropdownRef}
      >
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">
          <Link to="/" onClick={closeMenu} className="flex min-w-0 flex-1 items-center gap-3 py-2 lg:hidden">
            <img src={logo} alt="Western School logo" className="h-10 w-auto object-contain" />
            <div className="min-w-0">
              <p className="truncate text-sm font-bold uppercase tracking-[0.12em] text-white">
                Western School
              </p>
              <p className="truncate text-[10px] font-medium uppercase tracking-[0.16em] text-white/75">
                English Medium Secondary
              </p>
            </div>
          </Link>

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
            className="my-2 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/25 text-white transition-all hover:border-amber-300 hover:bg-white/10 hover:text-amber-300 lg:hidden"
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
              className="mx-auto max-h-[calc(100vh-5rem)] max-w-screen-2xl overflow-y-auto px-4 py-3 sm:px-6"
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
