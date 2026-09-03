import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const heroImage = "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85";

const team = [
  ["Mrs. Chinwendu I. Ofulue", "Managing Director & CEO", "Strategic executive leadership • Commercial strategy • Stakeholder relations"],
  ["Mr. Ikechukwu E. Ukaegbu", "Executive Director, Technical Operations & Sustainable Projects", "Climate governance • ESG • Carbon finance • EPCM • Technical delivery"],
  ["Mr. Gift O. Idolor", "Executive Director, Corporate Services & Human Capital", "Human capital • Administration • Governance • Organisational excellence"],
];

export default function ExecutiveTeam() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Leadership"
        title={<>Our Executive<br />Team</>}
        description="A leadership team bringing together project development, finance, engineering, sustainability, governance and corporate expertise."
        image={heroImage}
      />

      <section className="bg-[#f4f1ea] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-350 gap-7 lg:grid-cols-3">
          {team.map(([name, role, bio]) => (
            <article key={name} className="rounded-xl border border-[#d6d1c7] bg-white p-5">
              <div className="grid grid-cols-[128px_1fr] gap-5">
                <div className="flex h-44 items-end justify-center rounded-lg bg-[#0a2b47] pb-5 text-xs font-bold uppercase text-[#d29a2e]">
                  Executive
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#102740]">{name}</h2>
                  <p className="mt-3 font-bold leading-tight text-[#c38b24]">{role}</p>
                  <p className="mt-7 text-sm leading-relaxed text-slate-500">{bio}</p>
                </div>
              </div>
              <button className="mt-5 text-xs font-bold uppercase text-[#102740]">View Profile →</button>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
