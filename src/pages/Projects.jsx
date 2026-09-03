import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const heroImage = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=85";

const projects = [
  ["ENERGY", "Renewable Energy Project", "Development / Structuring", "Stonebridge Role: Lead Developer"],
  ["INFRASTRUCTURE", "Strategic Infrastructure Opportunity", "Feasibility / Packaging", "Stonebridge Role: Transaction Advisory"],
  ["PPP", "Public-Private Partnership", "Structuring", "Stonebridge Role: PPP Advisory"],
  ["TURNAROUND", "Asset Resuscitation Opportunity", "Assessment / Recovery", "Stonebridge Role: Technical & Financial Structuring"],
];

const filters = ["ALL", "ENERGY", "INFRASTRUCTURE", "PPP", "TURNAROUND", "ADVISORY"];

export default function Projects() {
  const [filter, setFilter] = useState("ALL");

  const visible = filter === "ALL"
    ? projects
    : projects.filter(([category]) => category === filter);

  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Projects"
        title={<>Our Projects<br />& Pipeline</>}
        description="A transparent portfolio view showing projects, opportunities and delivery stages without overstating Stonebridge’s current project record."
        image={heroImage}
      />

      <section className="bg-[#f4f1ea] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-350">
          <p className="text-sm font-bold uppercase tracking-wide text-[#c38b24]">Project Portfolio</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-md border px-6 py-3 text-xs font-bold uppercase ${
                  filter === item
                    ? "border-[#d29a2e] bg-[#d29a2e] text-[#061b2d]"
                    : "border-[#d29a2e] bg-white text-[#102740]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2">
            {visible.map(([category, title, stage, role]) => (
              <article key={title} className="rounded-xl border border-[#d6d1c7] bg-white p-6">
                <p className="text-xs font-bold text-[#c38b24]">{category}</p>
                <h2 className="mt-3 text-xl font-bold text-[#102740]">{title}</h2>
                <div className="mt-5 flex flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
                  <span>{stage}</span>
                  <strong className="text-[#102740]">{role}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
