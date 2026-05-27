import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Phone,
  MessageCircle,
  Plus,
  Minus,
  Check,
  Sparkles,
} from "lucide-react";

import gym from "@/assets/proj-gym.jpg";
import salon from "@/assets/proj-salon.jpg";
import clinic from "@/assets/proj-clinic.jpg";
import restaurant from "@/assets/proj-restaurant.jpg";
import academy from "@/assets/proj-academy.jpg";
import plumbing from "@/assets/proj-plumbing.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.06 },
  }),
};

const projects = [
  { img: gym, tag: "Fitness Center", title: "Gym & Fitness Studios", desc: "Class schedules, trainer profiles, and one-tap sign-ups that turn visitors into members." },
  { img: salon, tag: "Beauty Salon", title: "Salons & Spas", desc: "Showcase your work with a gallery and let customers book appointments online — even after hours." },
  { img: clinic, tag: "Medical", title: "Clinics & Doctors", desc: "A trustworthy presence with qualifications, services, timings, and easy contact for new patients." },
  { img: restaurant, tag: "Restaurant", title: "Restaurants & Cafés", desc: "Digital menu, photo gallery, and tap-to-call ordering built for hungry mobile visitors." },
  { img: academy, tag: "Education", title: "Coaching & Academies", desc: "Courses, batches, and enquiry forms designed to convert curious parents into enrolled students." },
  { img: plumbing, tag: "Local Services", title: "Home & Local Services", desc: "Get found on Google for the work you do nearby — plumbing, electrical, repairs, and more." },
];

const services = [
  { title: "Business websites", desc: "5–7 page sites that load fast and convert visitors into customers." },
  { title: "Mobile-first design", desc: "Built for the phones your customers actually use. Pixel-perfect on every screen." },
  { title: "Google Search SEO", desc: "On-page SEO, schema, and Maps setup so locals can find you on Google." },
  { title: "E-commerce stores", desc: "Product catalog, cart, and online payments — ready to start selling." },
  { title: "Speed & performance", desc: "Lighthouse-tuned. Most sites I ship score 95+ on mobile." },
  { title: "WhatsApp support", desc: "One year of WhatsApp and call support included with every project." },
];

const faqs = [
  { q: "How long does it take to build my website?", a: "Usually 2–3 weeks from start to finish. Simple sites can be faster. I'll give you an exact timeline after we discuss your needs." },
  { q: "Do I need to renew or pay monthly fees?", a: "No, the website price is one-time. You'll pay yearly hosting (~₹1,000–2,000/year) to keep it online. That's it." },
  { q: "What if I want changes after it's done?", a: "Free changes during the build. After launch, small edits are ₹500–1,000 each. I'll also teach you to handle simple updates yourself." },
  { q: "Will my website show up on Google?", a: "Yes. Every site I build is SEO-ready. Ranking takes a few months, but I set everything up the right way from day one." },
  { q: "Can I add more pages later?", a: "Absolutely. You can add photos, prices, or new pages anytime. I can do it for you or show you how." },
  { q: "What if I want a different design?", a: "That's why I do free consultations. We'll discuss exactly what you want and look at examples before any work starts." },
];

function Home() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Works />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-border/60 bg-background/70 px-5 py-3 backdrop-blur-md">
        <a href="#top" className="font-serif text-xl tracking-tight">
          webdev<span className="text-primary">.tn</span>
        </a>
        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#services" className="text-muted-foreground transition hover:text-foreground">Services</a>
          <a href="#works" className="text-muted-foreground transition hover:text-foreground">Works</a>
          <a href="#faq" className="text-muted-foreground transition hover:text-foreground">FAQ</a>
        </nav>
        <a href="#contact" className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:opacity-90">
          Get a quote
          <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-20 md:pt-48 md:pb-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-primary" />
          Now taking new projects across Tamil Nadu
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={1}
          className="mt-8 text-balance text-5xl leading-[1.02] md:text-7xl lg:text-[88px]"
        >
          Beautiful websites for{" "}
          <span className="italic text-primary font-serif">small</span>{" "}
          businesses in Tamil Nadu
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={2}
          className="mx-auto mt-6 max-w-xl text-pretty text-base text-muted-foreground md:text-lg"
        >
          Mobile-friendly, Google-ready, and built to bring more customers
          through your door. Honest pricing, local support, no jargon.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={3}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#works" className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition hover:opacity-90">
            View work
          </a>
          <a href="#contact" className="rounded-full border border-border bg-card px-6 py-3 text-sm transition hover:bg-accent">
            Contact me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [gym, salon, restaurant, clinic, academy, plumbing];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative -mt-6 mb-6 overflow-hidden">
      <motion.div style={{ y }} className="flex">
        <div className="marquee-track flex shrink-0 gap-5 pr-5">
          {[...items, ...items].map((src, i) => (
            <div
              key={i}
              className="relative h-[360px] w-[260px] shrink-0 overflow-hidden rounded-xl bg-muted md:h-[460px] md:w-[340px]"
            >
              <img src={src} alt="" loading="lazy" className="size-full object-cover" />
            </div>
          ))}
        </div>
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  return (
    <section id="services" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Services</SectionLabel>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-4 max-w-3xl text-4xl leading-tight md:text-6xl"
        >
          Everything a local business needs to{" "}
          <span className="italic text-primary">grow online</span>.
        </motion.h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
              className="group relative bg-card p-8 transition hover:bg-accent"
            >
              <div className="mb-12 inline-flex size-9 items-center justify-center rounded-full border border-border bg-background text-xs text-muted-foreground">
                0{i + 1}
              </div>
              <h3 className="font-sans text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ArrowUpRight className="absolute right-6 top-6 size-4 text-muted-foreground opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WORKS ---------------- */
function Works() {
  return (
    <section id="works" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-8">
          <div>
            <SectionLabel>What we build</SectionLabel>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mt-4 max-w-2xl text-4xl leading-tight md:text-6xl"
            >
              Websites built for{" "}
              <span className="italic text-primary">every kind of business</span>.
            </motion.h2>
          </div>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i % 2}
              className={`group block ${i % 2 === 1 ? "md:mt-20" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="size-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs backdrop-blur">
                  {p.tag}
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}





/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mt-4 text-4xl leading-tight md:text-5xl"
          >
            Common <span className="italic text-primary">questions</span>.
          </motion.h2>
          <p className="mt-4 text-muted-foreground">
            Still curious? <a href="#contact" className="underline">Get in touch</a> and I'll personally reply.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-base font-medium md:text-lg">{f.q}</span>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-card">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-12 text-muted-foreground">{f.a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl rounded-3xl bg-primary px-8 py-20 text-center text-primary-foreground md:px-16 md:py-28">
        <SectionLabel light>Let's talk</SectionLabel>
        <h2 className="mx-auto mt-4 max-w-3xl text-balance text-4xl leading-tight md:text-6xl">
          Ready to get your business{" "}
          <span className="italic">online</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-primary-foreground/75">
          A free 15-minute call. No pressure, no sales pitch — just honest
          advice about what your business actually needs.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="tel:+919344241344" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm text-primary transition hover:opacity-90">
            <Phone className="size-4" /> +91 93442 41344
          </a>
          <a href="tel:+919791592107" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm text-primary transition hover:opacity-90">
            <Phone className="size-4" /> +91 97915 92107
          </a>
          <a href="https://wa.me/919344241344" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm transition hover:bg-primary-foreground/10">
            <MessageCircle className="size-4" /> WhatsApp 93442 41344
          </a>
        </div>
        <p className="mt-8 text-sm text-primary-foreground/70">
          Call or WhatsApp any time — we usually reply within an hour.
        </p>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div>
          <div className="font-serif text-2xl">
            webdev<span className="text-primary">.tn</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Building beautiful websites for local businesses in Tamil Nadu.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
          <a href="tel:+919344241344" className="inline-flex items-center gap-1.5 hover:text-foreground"><Phone className="size-4" /> +91 93442 41344</a>
          <a href="tel:+919791592107" className="inline-flex items-center gap-1.5 hover:text-foreground"><Phone className="size-4" /> +91 97915 92107</a>
          <a href="https://wa.me/919344241344" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground"><MessageCircle className="size-4" /> WhatsApp</a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} webdev.tn — Chennai, Tamil Nadu
      </div>
    </footer>
  );
}

/* ---------------- helpers ---------------- */
function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
      <span className={`size-1.5 rounded-full ${light ? "bg-primary-foreground/70" : "bg-primary"}`} />
      {children}
    </div>
  );
}

