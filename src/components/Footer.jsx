import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#03192c] text-white">
      <div className="mx-auto grid max-w-350 gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {/* BRAND */}
        <div>
          <Link
            to="/"
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

          <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
            Building infrastructure, unlocking capital and creating sustainable
            impact across Africa.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9973e]">
            Company
          </h3>

          <div className="mt-6 flex flex-col gap-4">
            <Link
              to="/about"
              className="text-sm text-white/55 transition hover:text-white"
            >
              About Us
            </Link>

            <Link
              to="/#capabilities"
              className="text-sm text-white/55 transition hover:text-white"
            >
              Capabilities
            </Link>

            <Link
              to="/#projects"
              className="text-sm text-white/55 transition hover:text-white"
            >
              Projects
            </Link>

            <Link
              to="/#approach"
              className="text-sm text-white/55 transition hover:text-white"
            >
              Approach
            </Link>

            <Link
              to="/#insights"
              className="text-sm text-white/55 transition hover:text-white"
            >
              Insights
            </Link>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9973e]">
            Contact
          </h3>

          <div className="mt-6 space-y-4 text-sm leading-6 text-white/55">
            <p>Lagos, Nigeria</p>

            <p>info@stonebridgeprojects.com</p>

            <p>+234 000 000 0000</p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9973e]">
            Start A Project
          </h3>

          <p className="mt-6 text-sm leading-7 text-white/55">
            Have an infrastructure, energy or investment opportunity?
          </p>

          <a
            href="mailto:info@stonebridgeprojects.com"
            className="mt-6 inline-block border border-[#c9973e] px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#c9973e] transition hover:bg-[#c9973e] hover:text-white"
          >
            Get In Touch →
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-350 flex-col justify-between gap-3 px-6 py-6 text-[11px] text-white/30 md:flex-row lg:px-10">
          <p>
            © {new Date().getFullYear()} Stonebridge Projects Ltd. All rights
            reserved.
          </p>

          <p>Project Development • Capital • Execution • Impact</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
