import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const heroImage = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=85";

const items = [
  ["Renewable Power", "Solar, hydro and off-grid renewable power development."],
  ["Bio-Energy & SAF", "Sustainable aviation fuel, biomass and clean-cooking value chains."],
  ["Energy Transition", "Project advisory, capital mobilisation and implementation support."],
  ["Carbon & Climate", "Carbon accounting, project packaging and climate-aligned finance."],
];

export default function EnergyInfrastructure() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Capability 01"
        title={<>Energy & Clean<br />Infrastructure</>}
        description="Supporting Africa’s energy transition through renewable power, clean technology, bio-energy and sustainable infrastructure."
        image={heroImage}
      />

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-350 gap-7 md:grid-cols-2">
          {items.map(([title, text]) => (
            <article key={title} className="rounded-xl border border-[#d6d1c7] bg-[#f4f1ea] p-7">
              <h2 className="text-xl font-bold uppercase text-[#c38b24]">{title}</h2>
              <p className="mt-4 text-base leading-relaxed text-[#102740]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#061b2d] px-5 py-7 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-350 flex-wrap items-center gap-8">
          <span className="font-bold uppercase text-[#d29a2e]">Project Lifecycle</span>
          <span className="font-bold">Feasibility → Structuring → Capital → Delivery → Operations</span>
        </div>
      </section>

      <Footer />
    </>
  );
}
