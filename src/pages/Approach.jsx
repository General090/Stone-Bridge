import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const heroImage = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85";

const steps = [
  ["01", "Identify", "Uncover infrastructure needs and viable opportunities."],
  ["02", "Assess", "Technical, commercial and regulatory due diligence."],
  ["03", "Structure", "Design the right model, SPV and risk allocation."],
  ["04", "Mobilise", "Connect projects with capital and strategic partners."],
  ["05", "Deliver", "Coordinate engineering, procurement and construction."],
  ["06", "Scale", "Optimise performance, impact and long-term value."],
];

export default function Approach() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="How We Work"
        title={<>Our<br />Approach</>}
        description="A disciplined, integrated approach that moves projects from opportunity through structuring, capital mobilisation, delivery and long-term value."
        image={heroImage}
      />

      <section className="bg-[#092b46] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-350">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
            {steps.map(([number, title, text]) => (
              <div key={number}>
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#d29a2e] text-xl font-bold text-[#d29a2e]">
                  {number}
                </div>
                <h2 className="mt-7 text-lg font-bold uppercase">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-8 md:flex-row md:items-center">
            <span className="font-bold uppercase text-[#d29a2e]">Our Difference</span>
            <span className="font-bold">Integrated • Africa-focused • Capital-conscious • Execution-driven • Sustainability-led</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
