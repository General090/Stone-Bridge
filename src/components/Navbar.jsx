import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Capabilities", path: "/capabilities" },
  { name: "Projects", path: "/projects" },
  { name: "Approach", path: "/approach" },
  { name: "Insights", path: "/insights" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#061b2d]/95 shadow-lg backdrop-blur-md"
          : "bg-[#061b2d]/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-19 max-w-375 items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="flex shrink-0 items-center gap-3 text-white"
        >
          {/* Logo mark */}
          <img
            src={Logo}
            alt="Stonebridge Projects Ltd"
            className="h-11 w-auto object-contain sm:h-12"
          />

          {/* Company name */}
          <div className="flex flex-col justify-center leading-none">
            <span className="font-sans text-base font-bold tracking-[0.04em] sm:text-lg">
              STONEBRIDGE
            </span>

            <span className="mt-1 text-[7px] font-medium tracking-[0.22em] text-white/70 sm:text-[8px]">
              PROJECTS LTD
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[12px] font-medium uppercase tracking-wide transition ${
                  isActive
                    ? "text-[#d29a2e]"
                    : "text-white hover:text-[#d29a2e]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-md bg-[#d29a2e] px-6 py-3 text-[12px] font-bold uppercase tracking-wide text-[#061b2d] transition hover:bg-[#e0ad4a] lg:block"
        >
          Start A Project
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="text-2xl text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "×" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#061b2d] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `border-b border-white/10 py-4 text-xs font-semibold uppercase tracking-wide ${
                    isActive ? "text-[#d29a2e]" : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-5 w-fit rounded-md bg-[#d29a2e] px-5 py-3 text-xs font-bold uppercase text-[#061b2d]"
            >
              Start A Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
