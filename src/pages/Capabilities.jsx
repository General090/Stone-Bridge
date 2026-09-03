import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";

const heroImage = "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=85";

const items = [
  ["01", "Energy & Clean Infrastructure", "Renewable power • Clean technology • Bio-energy • Energy transition", "/capabilities/energy-clean-infrastructure"],
  ["02", "Capital & Project Finance", "Debt • Equity • Blended finance • Development finance • Bankability", "#"],
  ["03", "PPP & Infrastructure Development", "PPP structuring • Infrastructure packaging • Stakeholder coordination", "#"],
  ["04", "Engineering & Project Delivery", "EPCM • Procurement • Construction management • Commissioning", "#"],
  ["05", "Asset Resuscitation & Turnaround", "Recovery planning • Operational restoration • Value creation", "#"],
  ["06", "Carbon Finance, ESG & Bio-Economy", "Carbon markets • ESG • Climate resilience • Sustainable value chains", "#"],
];

export default function Capabilities() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Integrated Solutions"
        title={<>Our<br />Capabilities</>}
        description="End-to-end capabilities across the project lifecycle—from opportunity identification and bankability to delivery, operations and sustainability."
        image={heroImage}
      />

      <section className="bg-[#f4f1ea] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-350 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([number, title, text, path]) => (
            <Link key={number} to={path} className="rounded-xl border border-[#d6d1c7] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-5">
                <span className="text-lg font-bold text-[#c38b24]">{number}</span>
                <div>
                  <h2 className="text-lg font-bold uppercase leading-tight text-[#102740]">{title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">{text}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
