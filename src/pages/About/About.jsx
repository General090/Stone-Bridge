import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { Link } from "react-router-dom";

const heroImage =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=85";

export default function About() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="project development, capital, execution, impact."
        title={
          <>
            About
            <br />
            Stonebridge
          </>
        }
        description="Stonebridge is an integrated project-development, management, financing and advisory firm focused on critical infrastructure, energy and sustainable investment oppotunities accross Africa."
        image={heroImage}
      />

      {/* WHO WE ARE */}
      <section className="mt-10 ml-12 mr-12">
        <p className="mb-7 text-sm font-bold uppercase tracking-wide text-[#d29a2e]">
          Who we are
        </p>

        <div>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight text-[#102740] lg:text-4xl">
            An integrated platform for turning opportunity into execution.
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
            We operate at the intersection of infrastructure, energy, capital
            and sustainability. Our model connects technical expertise,
            financial structuring, institutional alignment and delivery to
            create bankable, investable and impactful projects.
          </p>
        </div>

        {/* FIVE VALUE CARDS */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-lg border border-[#d6d1c7] bg-white p-5">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[#d29a2e]">
              Africa Focused
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Local understanding. Global standards.
            </p>
          </div>

          <div className="rounded-lg border border-[#d6d1c7] bg-white p-5">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[#d29a2e]">
              Integrated Expertise
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Development, capital, engineering and sustainability.
            </p>
          </div>

          <div className="rounded-lg border border-[#d6d1c7] bg-white p-5">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[#d29a2e]">
              Value Driven
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Bankability, risk management and long-term value.
            </p>
          </div>

          <div className="rounded-lg border border-[#d6d1c7] bg-white p-5">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[#d29a2e]">
              Sustainable Impact
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              ESG, carbon finance and climate resilience.
            </p>
          </div>

          <div className="rounded-lg border border-[#d6d1c7] bg-white p-5">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[#d29a2e]">
              Execution Discipline
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Safety, quality, transparency and delivery.
            </p>
          </div>
        </div>
      </section>

      {/* EXECUTIVE TEAM HEADING */}
      <section className="px-5 pb-0 pt-20 sm:px-8 lg:px-12">
        <p className="mb-4 text-sm font-bold uppercase tracking-wide text-[#d29a2e]">
          Leadership
        </p>

        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-[#102740] lg:text-4xl">
          Meet Our Executive Team
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
          Experienced leadership driving Stonebridge’s project development,
          technical operations, sustainability and corporate growth.
        </p>
      </section>

      {/* YOUR EXISTING EXECUTIVE SECTION — LEFT AS IT IS */}
      <section className="bg-[#f4f1ea] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-350 gap-7 lg:grid-cols-3">
          {[
            [
              "Mrs. Chinwendu I. Ofulue",
              "Managing Director & CEO",
              "Strategic executive leadership • Commercial strategy • Stakeholder relations",
              null,
            ],
            [
              "Mr. Ikechukwu E. Ukaegbu",
              "Executive Director, Technical Operations & Sustainable Projects",
              "Climate governance • ESG • Carbon finance • EPCM • Technical delivery",
              "/about/executive-team/ikechukwu-ukaegbu",
            ],
            [
              "Dr. Gift O. Idolor",
              "Executive Director, Corporate Services & Human Capital",
              "Human capital • Administration • Governance • Organisational excellence",
              null,
            ],
          ].map(([name, role, bio, profilePath]) => (
            <article
              key={name}
              className="rounded-xl border border-[#d6d1c7] bg-white p-5 shadow-sm"
            >
              <div className="grid grid-cols-[128px_1fr] gap-5">
                <div className="flex h-44 items-end justify-center rounded-lg bg-[#0a2b47] pb-5 text-xs font-bold uppercase text-[#d29a2e]">
                  Executive
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#102740]">
                    {name}
                  </h2>

                  <p className="mt-3 font-bold text-[#c38b24]">
                    {role}
                  </p>

                  <p className="mt-7 text-sm leading-relaxed text-slate-500">
                    {bio}
                  </p>
                </div>
              </div>

              {profilePath && (
                <Link
                  to={profilePath}
                  className="mt-5 inline-block text-xs font-bold uppercase text-[#102740] transition hover:text-[#c38b24]"
                >
                  View Profile →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}