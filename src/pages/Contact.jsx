import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="bg-[#061b2d] pt-19 text-white">
        <section className="mx-auto grid min-h-155 max-w-350 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[#d29a2e]">Start A Conversation</p>
            <h1 className="mt-6 font-serif text-5xl font-bold uppercase leading-none sm:text-6xl">
              Let's Build
              <br />
              What Matters.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
              Tell us about your project, opportunity or infrastructure challenge.
            </p>
          </div>

          <form className="rounded-xl bg-white p-7 text-[#102740]">
            <div className="grid gap-5 sm:grid-cols-2">
              <input className="rounded-md border p-4" placeholder="Full name" />
              <input className="rounded-md border p-4" placeholder="Email address" type="email" />
            </div>
            <input className="mt-5 w-full rounded-md border p-4" placeholder="Company" />
            <textarea className="mt-5 min-h-40 w-full rounded-md border p-4" placeholder="Tell us about your project" />
            <button type="button" className="mt-5 rounded-md bg-[#d29a2e] px-7 py-4 text-sm font-bold uppercase text-[#061b2d]">
              Submit Enquiry
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
