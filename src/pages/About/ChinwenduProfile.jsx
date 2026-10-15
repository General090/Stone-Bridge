
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MrsOfu from "../../assets/mrsofu.jpg";

export default function ChinwenduProfile() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      {/* PROFILE HERO */}
      <section className="bg-[#061b2d] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[320px_1fr] lg:gap-16">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a2b47]">
            <img
              src={MrsOfu}
              alt="Mrs. Chinwe Ofulue"
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#d29a2e]">
              Executive Leadership
            </p>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Mrs. Chinwe Ofulue
            </h1>

            <p className="mt-5 text-lg font-semibold leading-relaxed text-[#d29a2e]">
              Managing Director / CEO
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              A highly accomplished banking and financial services
              executive with over 35 years of professional experience
              spanning banking, financial services, oil and gas, and
              manufacturing.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Her career is distinguished by progressive leadership,
              strategic business development, innovation, and sustained
              delivery of business results across leading Nigerian
              financial institutions.
            </p>

            {/* <Link
              to="/about"
              className="mt-8 inline-block border border-[#d29a2e] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#d29a2e] hover:text-[#061b2d]"
            >
              ← Back to About
            </Link> */}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL PROFILE */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-[#c38b24]">
            Professional Profile
          </p>

          <h2 className="max-w-4xl text-3xl font-bold leading-tight text-[#102740] lg:text-4xl">
            Banking expertise, strategic leadership and business growth.
          </h2>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_300px]">
            <div>
              <p className="text-base leading-8 text-slate-600">
                With more than three decades of experience in business
                development, Mrs. Ofulue possesses deep expertise in
                Corporate and Commercial Banking, Small and Medium
                Enterprise (SME) Banking, Retail Banking, Treasury,
                International Banking, Operations, Customer Service,
                and Relationship Management.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Throughout her career, she has demonstrated exceptional
                capability in developing growth strategies, driving
                revenue, structuring and negotiating complex
                transactions, strengthening client relationships, and
                delivering innovative financial solutions.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-600">
                She has also played a significant role in conceptualizing
                and implementing banking products and digital solutions
                designed to respond to changing market and customer needs.
              </p>

              {/* CAREER EXPERIENCE */}
              <h2 className="mt-14 text-2xl font-bold text-[#102740] lg:text-3xl">
                Career Experience
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Mrs. Ofulue's banking career spans Merchant Bank of Africa,
                Zenith International Bank, Standard Trust Bank, Equitorial
                Trust Bank, United Bank for Africa Plc (UBA), and Heritage
                Bank PLC.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                At Heritage Bank, she served in several strategic regional
                and divisional leadership roles, including:
              </p>

              <ul className="mt-5 space-y-3">
                {[
                  "Regional Head, Lagos Island",
                  "Acting Divisional Head, Lagos and Abuja",
                  "Regional Head, Retail and Commercial Business, Lagos Mainland",
                  "Regional Head, Southeast",
                ].map((position) => (
                  <li key={position} className="flex gap-3 text-base leading-7 text-slate-600">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#c38b24]" />
                    <span>{position}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Earlier in her career, Mrs. Ofulue worked with Anadrill
                Schlumberger and Eastern Bulkcem Co. Ltd. before joining
                the banking sector.
              </p>

              {/* LEADERSHIP */}
              <h2 className="mt-14 text-2xl font-bold text-[#102740] lg:text-3xl">
                Leadership &amp; Business Development
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A commercially astute and results-oriented leader,
                Mrs. Ofulue has a proven record of leading high-performing
                teams, managing diverse stakeholder relationships,
                developing new business opportunities, and closing
                complex multi-million and billion-naira transactions.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                She is particularly recognized for her resilience,
                sound business judgment, strong interpersonal skills,
                and ability to deliver results in challenging and
                highly competitive environments.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Her extensive experience across business development,
                strategic leadership, customer management, financial
                services, and organizational performance positions
                her to make valuable contributions at senior executive
                and board levels.
              </p>

              {/* EDUCATION */}
              <h2 className="mt-14 text-2xl font-bold text-[#102740] lg:text-3xl">
                Education &amp; Professional Development
              </h2>

              <div className="mt-6 space-y-5">
                <div className="border-l-2 border-[#c38b24] pl-5">
                  <h3 className="font-bold text-[#102740]">
                    Master of Business Administration (MBA)
                  </h3>
                  <p className="mt-1 text-slate-500">
                    University of Lagos
                  </p>
                </div>

                <div className="border-l-2 border-[#c38b24] pl-5">
                  <h3 className="font-bold text-[#102740]">
                    BSc (Hons), Business Administration
                  </h3>
                  <p className="mt-1 text-slate-500">
                    Rivers State University of Science and Technology
                  </p>
                </div>

                <div className="border-l-2 border-[#c38b24] pl-5">
                  <h3 className="font-bold text-[#102740]">
                    Lagos Business School
                  </h3>
                  <p className="mt-1 text-slate-500">
                    Alumna
                  </p>
                </div>

                <div className="border-l-2 border-[#c38b24] pl-5">
                  <h3 className="font-bold text-[#102740]">
                    Fellow, Nigerian Institute of Credit Administration
                  </h3>
                  <p className="mt-1 text-slate-500">
                    FNICA
                  </p>
                </div>
              </div>

              <p className="mt-6 text-base leading-8 text-slate-600">
                She has also attended several executive education and
                professional development training programmes locally
                and internationally.
              </p>
            </div>

            {/* EXECUTIVE DETAILS SIDEBAR */}
            <aside className="h-fit rounded-xl border border-[#d6d1c7] bg-[#f4f1ea] p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#c38b24]">
                Executive Details
              </p>

              <div className="mt-6 border-b border-[#d6d1c7] pb-5">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Name
                </p>
                <p className="mt-2 font-semibold text-[#102740]">
                  Mrs. Chinwe Ofulue
                </p>
              </div>

              <div className="mt-5 border-b border-[#d6d1c7] pb-5">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Position
                </p>
                <p className="mt-2 font-semibold leading-relaxed text-[#102740]">
                  Managing Director / CEO
                </p>
              </div>

              <div className="mt-5 border-b border-[#d6d1c7] pb-5">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Organisation
                </p>
                <p className="mt-2 font-semibold text-[#102740]">
                  Stonebridge Projects Ltd
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Experience
                </p>
                <p className="mt-2 text-2xl font-bold text-[#102740]">
                  35+ Years
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  Across banking, financial services, oil and gas,
                  and manufacturing.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="bg-[#061b2d] px-5 py-16 text-center sm:px-8 lg:px-12">
        <p className="text-sm font-bold uppercase tracking-widest text-[#d29a2e]">
          Stonebridge Projects Ltd
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl">
          Strategic leadership. Commercial insight. Sustainable growth.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
          Bringing together experience, business development and
          financial expertise to support Stonebridge's strategic
          ambitions.
        </p>

        {/* <Link
          to="/about"
          className="mt-8 inline-block bg-[#d29a2e] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#061b2d] transition hover:bg-white"
        >
          Meet the Executive Team
        </Link> */}
      </section>

      <Footer />
    </>
  );
}
