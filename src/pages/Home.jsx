import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const images = {
  hero: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=85",
  energy:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
  finance:
    "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=85",
  infrastructure:
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=85",
  engineering:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
  industry:
    "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=900&q=85",
};

const capabilities = [
  [
    "01",
    "Energy & Clean Infrastructure",
    "Renewable power, clean technology, bio-energy and energy-transition solutions.",
    images.energy,
  ],
  [
    "02",
    "Capital & Project Finance",
    "Debt, equity, blended finance and bankability structuring to unlock investment.",
    images.finance,
  ],
  [
    "03",
    "PPP & Infrastructure Development",
    "Public-private partnerships, infrastructure packaging and stakeholder coordination.",
    images.infrastructure,
  ],
  [
    "04",
    "Engineering & Project Delivery",
    "EPCM, procurement, construction management and execution excellence.",
    images.engineering,
  ],
  [
    "05",
    "Asset Resuscitation & Turnaround",
    "Reviving stalled or underperforming assets and restoring value.",
    images.industry,
  ],
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
          className="relative w-full min-h-180 bg-cover bg-center pt-19"
          style={{ backgroundImage: `url(${images.hero})` }}
        >
          <div className="absolute inset-0 bg-[#031728]/65" />

          <div className="relative mx-auto flex w-full min-h-161 max-w-375 items-center px-4 sm:px-8 lg:px-12">
            <div className="max-w-3xl text-white">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.08em] text-[#d29a2e] sm:text-sm">
                Projects. Capital. Execution. Impact.
              </p>

              <h1 className="font-serif text-3xl font-bold uppercase leading-[0.95] tracking-wide sm:text-5xl lg:text-7xl">
                Building the infrastructure that moves{" "}
                <span className="text-[#d29a2e]">Africa</span> forward.
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
                Stonebridge Projects Ltd develops, structures and advances
                infrastructure, energy and sustainable investment opportunities
                across Africa—connecting technical expertise, strategic capital
                and execution to create projects built for long-term value.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/capabilities"
                  className="rounded-md bg-[#d29a2e] px-5 py-3 text-xs font-bold uppercase text-[#061b2d] sm:px-7 sm:py-4 sm:text-sm"
                >
                  Explore Our Capabilities →
                </Link>

                <Link
                  to="/contact"
                  className="rounded-md border border-white/60 px-5 py-3 text-xs font-bold uppercase text-white sm:px-7 sm:py-4 sm:text-sm"
                >
                  Discuss A Project →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#061b2d] text-white">
          <div className="mx-auto grid max-w-375 md:grid-cols-3 lg:grid-cols-5">
            {[
              [
                "Integrated Solutions",
                "End-to-end solutions from opportunity to operations.",
              ],
              [
                "Africa Focused",
                "Deep understanding of African markets and infrastructure realities.",
              ],
              [
                "Capital Conscious",
                "Structuring bankable projects that attract credible investment.",
              ],
              [
                "Execution Driven",
                "Engineering, delivery and turnaround expertise.",
              ],
              [
                "Sustainable Impact",
                "ESG, carbon finance and climate-resilient solutions.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-b border-white/10 p-6 md:border-r"
              >
                <h3 className="text-sm font-bold uppercase text-[#d29a2e]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="capabilities"
          className="bg-[#f4f1ea] px-5 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-350">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-[#c38b24]">
                What We Do
              </p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-[#102740] sm:text-5xl">
                Integrated Solutions. End-to-End Impact.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {capabilities.map(([number, title, text, image]) => (
                <Link
                  key={number}
                  to="/capabilities"
                  className="group overflow-hidden rounded-md border border-[#d9d4c9] bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className="h-40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                  <div className="p-5">
                    <div className="text-sm font-bold text-[#c38b24]">
                      {number}
                    </div>
                    <h3 className="mt-2 text-base font-bold uppercase leading-tight text-[#102740]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">
                      {text}
                    </p>
                    <span className="mt-5 block text-sm font-bold text-[#c38b24]">
                      Learn more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="bg-[#092b46] px-5 py-20 text-white sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-350">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-[#d29a2e]">
                From Opportunity To Impact
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
              {[
                [
                  "01",
                  "Identify",
                  "Uncover infrastructure needs and viable opportunities.",
                ],
                [
                  "02",
                  "Assess",
                  "Technical, commercial and regulatory due diligence.",
                ],
                [
                  "03",
                  "Structure",
                  "Design the right model, SPV and risk allocation.",
                ],
                [
                  "04",
                  "Mobilise",
                  "Connect projects with capital and strategic partners.",
                ],
                [
                  "05",
                  "Execute",
                  "Deliver projects on time, on quality, on value.",
                ],
                [
                  "06",
                  "Operate / Scale",
                  "Optimise performance and create enduring impact.",
                ],
              ].map(([number, title, text]) => (
                <div key={number}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#d29a2e] text-lg font-bold text-[#d29a2e]">
                    {number}
                  </div>
                  <h3 className="mt-6 text-sm font-bold uppercase">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
