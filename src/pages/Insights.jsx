import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const heroImage = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85";

const posts = [
  ["AFRICA INFRASTRUCTURE", "The Infrastructure Opportunity: From Policy to Bankability"],
  ["ENERGY TRANSITION", "What Africa’s Energy Transition Means for Project Developers"],
  ["PROJECT FINANCE", "Blended Finance: Structuring Capital for Complex Projects"],
  ["CARBON MARKETS", "Article 6, Carbon Markets and Africa’s Emerging Opportunity"],
  ["PPP", "Making Public-Private Partnerships Investable"],
  ["SUSTAINABILITY", "Embedding Climate Resilience into Project Finance"],
];

export default function Insights() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Stonebridge Intelligence"
        title={<>Insights &<br />Perspectives</>}
        description="Thought leadership on infrastructure, energy, capital, sustainability and development across Africa."
        image={heroImage}
      />

      <section className="bg-[#f4f1ea] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-350 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(([category, title]) => (
            <article key={title} className="rounded-xl border border-[#d6d1c7] bg-white p-6">
              <p className="text-xs font-bold text-[#c38b24]">{category}</p>
              <h2 className="mt-4 text-xl font-bold leading-tight text-[#102740]">{title}</h2>
              <button className="mt-8 text-xs font-bold uppercase tracking-wide text-slate-600">
                Read More →
              </button>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
