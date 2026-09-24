import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const heroImage =
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=85";

const executiveImage =
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85";

export default function IkechukwuProfile() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    
    return (
        <>
            <Navbar />
            {/* Executive Introduction */}
            <section className="bg-[#f4f1ea] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[360px_1fr] lg:gap-16">

                    {/* Executive Image */}
                    <div>
                        <div className="sticky top-28 overflow-hidden rounded-xl bg-[#0a2b47]">
                            <img
                                src={executiveImage}
                                alt="Ikechukwu Emmanuel Ukaegbu"
                                className="aspect-[3/4] h-full w-full object-cover"
                            />
                        </div>

                        <div className="mt-5 border-l-4 border-[#c38b24] bg-white p-5">
                            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#102740]">
                                Ikechukwu Emmanuel Ukaegbu
                            </p>

                            <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                Executive Director, Technical Operations & Sustainable Projects
                            </p>
                        </div>
                    </div>

                    {/* Introduction */}
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c38b24]">
                            Stonebridge Projects Ltd
                        </p>

                        <h1 className="mt-4 font-serif text-4xl leading-tight text-[#102740] md:text-5xl">
                            Climate Policy • Infrastructure • Energy • Public Governance
                        </h1>

                        <div className="mt-8 space-y-6 text-base leading-8 text-slate-600 lg:text-lg">
                            <p>
                                Ikechukwu Emmanuel Ukaegbu is a senior climate-policy,
                                infrastructure and environmental-governance professional with
                                more than three decades of progressive experience, including
                                over 23 years in senior public-sector administration. At
                                Stonebridge Projects Ltd, he serves as Executive Director,
                                Technical Operations & Sustainable Projects, where he
                                contributes technical leadership across infrastructure
                                development, energy transition, climate finance, carbon
                                markets, environmental governance and sustainable project
                                delivery.
                            </p>

                            <p>
                                His professional career has been defined by the intersection
                                of public policy, technical implementation and complex
                                development programmes. He has led multidisciplinary teams,
                                coordinated large-scale programmes, advised on climate and
                                environmental frameworks, and worked across government,
                                technical, development and private-sector environments. This
                                combination gives him a distinctive perspective on the
                                practical realities that determine whether major projects can
                                move from policy ambition and technical conception to
                                bankability, implementation and lasting operational value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programme Delivery */}
            <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c38b24]">
                                Programme Delivery
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#102740] md:text-5xl">
                                Large-Scale Climate & Infrastructure Programmes
                            </h2>
                        </div>

                        <div className="space-y-6 text-base leading-8 text-slate-600 lg:text-lg">
                            <p>
                                A significant component of his experience is large-scale
                                programme delivery. Between May 2024 and February 2026, he
                                served as State Project Coordinator for the Abia State
                                NEWMAP–EIB programme, directing implementation of a €175
                                million climate-adaptation portfolio across 14 Local Government
                                Areas.
                            </p>

                            <p>
                                In that capacity, he coordinated multidisciplinary technical
                                expertise, managed complex implementation requirements and
                                worked within international financing and disbursement
                                conditions associated with a major development programme. The
                                experience strengthened his capabilities in programme
                                governance, technical coordination, stakeholder management and
                                the delivery of climate-resilient infrastructure interventions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Climate Finance */}
            <section className="bg-[#f4f1ea] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-4xl">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c38b24]">
                            Climate Finance & Carbon Markets
                        </p>

                        <h2 className="mt-4 font-serif text-4xl leading-tight text-[#102740] md:text-5xl">
                            Climate Policy, Carbon Markets & International Engagement
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-8 lg:grid-cols-2">
                        <div className="rounded-xl border border-[#d6d1c7] bg-white p-7">
                            <p className="text-base leading-8 text-slate-600">
                                His expertise also extends to the rapidly evolving field of
                                carbon markets and climate finance. He has worked with Paris
                                Agreement Article 6 frameworks, carbon-market readiness,
                                carbon-asset structuring, corresponding-adjustment
                                considerations and digital measurement, reporting and
                                verification systems.
                            </p>
                        </div>

                        <div className="rounded-xl border border-[#d6d1c7] bg-white p-7">
                            <p className="text-base leading-8 text-slate-600">
                                His participation as an accredited party delegate and
                                technical negotiator at UNFCCC COP30 in Belém and SB62 in Bonn
                                further reflects his engagement with international
                                climate-policy processes, including Article 6, Loss and Damage,
                                grant-based adaptation and the NAZCA platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Energy & Environmental Governance */}
            <section className="bg-[#061b2d] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d29a2e]">
                                Technical Leadership
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                                Energy Transition, Environmental Assessment & Governance
                            </h2>
                        </div>

                        <div className="space-y-6 text-base leading-8 text-white/70 lg:text-lg">
                            <p>
                                Mr. Ukaegbu brings equally significant experience in energy
                                transition, environmental assessment, public governance and
                                technical operations. He previously served as Director
                                (Scientific), Biotechnology & Energy within the Abia State
                                Ministry of Science & Technology, where he contributed to
                                climate-change institutional development and energy-transition
                                initiatives.
                            </p>

                            <p>
                                Earlier, as Director & Technical Lead, Environmental Assessment,
                                he helped establish the State Climate Change Desk, contributed
                                to the State Climate Action Policy and served on more than 30
                                federal technical assessment panels.
                            </p>

                            <p>
                                His earlier technical career also included responsibilities in
                                petroleum, mineral operations, oil-spill response, pipeline
                                remediation and quality control.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Practice */}
            <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c38b24]">
                                Professional Practice
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#102740] md:text-5xl">
                                Technical Advisory & Consulting
                            </h2>
                        </div>

                        <div className="space-y-6 text-base leading-8 text-slate-600 lg:text-lg">
                            <p>
                                Beyond public-sector leadership, he serves as Managing Partner
                                / Lead Consultant at Nuel Jameson Ltd, providing professional
                                consulting capability in areas including environmental
                                consultancy, carbon-market readiness and related technical
                                advisory services.
                            </p>

                            <p>
                                This professional practice complements rather than conflicts
                                with his Stonebridge executive mandate, strengthening the
                                breadth of specialist expertise he brings to project
                                development, sustainability, climate finance and technical
                                advisory engagements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stonebridge Role */}
            <section className="bg-[#f4f1ea] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c38b24]">
                                At Stonebridge
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#102740] md:text-5xl">
                                Turning Complex Opportunities Into Structured Projects
                            </h2>
                        </div>

                        <div className="space-y-6 text-base leading-8 text-slate-600 lg:text-lg">
                            <p>
                                At Stonebridge, his focus is to help translate technically,
                                environmentally and institutionally complex opportunities into
                                structured, executable projects. His approach combines
                                technical discipline with sustainability, regulatory
                                understanding and practical implementation.
                            </p>

                            <p>
                                This supports Stonebridge’s broader objective of connecting
                                projects, capital, expertise and execution to create
                                infrastructure and energy solutions capable of delivering
                                long-term economic and environmental value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education & Development */}
            <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c38b24]">
                                Education & Development
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#102740] md:text-5xl">
                                Academic & Professional Development
                            </h2>
                        </div>

                        <div className="space-y-6 text-base leading-8 text-slate-600 lg:text-lg">
                            <p>
                                He holds a B.Sc. in Chemistry from the University of Ibadan and
                                has undertaken executive and professional development in
                                climate finance, public-sector digital readiness, artificial
                                intelligence, high-performance teams and entrepreneurship.
                            </p>

                            <p>
                                His broader professional leadership experience includes service
                                on national inter-ministerial, expert and technology-policy
                                committees and working groups concerned with chemical
                                technology, materials development, national technology needs
                                and international climate engagement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="bg-[#061b2d] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
                <div className="mx-auto max-w-5xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d29a2e]">
                        Stonebridge Projects Ltd
                    </p>

                    <h2 className="mx-auto mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                        Technical leadership for sustainable, implementable infrastructure.
                    </h2>

                    <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/70 lg:text-lg">
                        At Stonebridge Projects Ltd, Mr. Ukaegbu represents a core part of
                        the firm’s technical and sustainability proposition: combining deep
                        public-sector and programme-delivery experience with climate
                        expertise, infrastructure knowledge and a practical commitment to
                        turning complex development challenges into credible, sustainable
                        and implementable projects.
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}
