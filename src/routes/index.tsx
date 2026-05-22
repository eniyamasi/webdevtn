import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Phone,
  MessageCircle,
  Mail,
  Plus,
  Minus,
  Check,
  Search,
  Sparkles,
} from "lucide-react";

import gym from "@/assets/proj-gym.jpg";
import salon from "@/assets/proj-salon.jpg";
import clinic from "@/assets/proj-clinic.jpg";
import restaurant from "@/assets/proj-restaurant.jpg";
import academy from "@/assets/proj-academy.jpg";
import plumbing from "@/assets/proj-plumbing.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

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
  { img: gym, tag: "Fitness Center", title: "FitZone Gym", desc: "Local gym needed a simple site to show classes and rates.", result: "+30 inquiries / month", year: "2025" },
  { img: salon, tag: "Beauty Salon", title: "Priya's Hair Studio", desc: "Showcase her work and take online bookings.", result: "50+ online bookings", year: "2025" },
  { img: clinic, tag: "Medical", title: "Dr. Kumar's Clinic", desc: "Professional site to share qualifications and contact.", result: "+25 new patients", year: "2025" },
  { img: restaurant, tag: "Restaurant", title: "Chennai Biriyani House", desc: "Menu online and one-tap call ordering.", result: "+40% phone orders", year: "2024" },
  { img: academy, tag: "Education", title: "Learn English Academy", desc: "Attract students and parents in the area.", result: "+15 new students", year: "2024" },
  { img: plumbing, tag: "Services", title: "ProFix Plumbing", desc: "Get found on Google for emergency calls.", result: "+20 emergency calls", year: "2024" },
];

const services = [
  { title: "Business websites", desc: "5–7 page sites that load fast and convert visitors into customers." },
  { title: "Mobile-first design", desc: "Built for the phones your customers actually use. Pixel-perfect on every screen." },
  { title: "Google Search SEO", desc: "On-page SEO, schema, and Maps setup so locals can find you on Google." },
  { title: "E-commerce stores", desc: "Product catalog, cart, and online payments — ready to start selling." },
  { title: "Speed & performance", desc: "Lighthouse-tuned. Most sites I ship score 95+ on mobile." },
  { title: "WhatsApp support", desc: "One year of WhatsApp and call support included with every project." },
];

const testimonials = [
  { quote: "He explained everything in plain Tamil. No jargon, no surprises. My salon gets bookings every week now.", name: "Priya R.", role: "Salon Owner, Chennai", img: avatar2 },
  { quote: "Our biryani orders by phone jumped almost 40% in two months. Best money our restaurant ever spent.", name: "Karthik V.", role: "Restaurant Owner, Coimbatore", img: avatar3 },
  { quote: "Fair price, fast delivery, and he picks up the phone whenever I call. That's rare.", name: "Arun S.", role: "Gym Owner, Madurai", img: avatar1 },
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
      <Testimonials />
      <Pricing />
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
          <a href="#pricing" className="text-muted-foreground transition hover:text-foreground">Pricing</a>
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
          className="mx-auto inline-flex items-center gap-3 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm text-muted-foreground"
        >
          <div className="flex -space-x-2">
            <img src={avatar1} alt="" className="size-6 rounded-full ring-2 ring-background" />
            <img src={avatar2} alt="" className="size-6 rounded-full ring-2 ring-background" />
            <img src={avatar3} alt="" className="size-6 rounded-full ring-2 ring-background" />
          </div>
          Trusted by 50+ local businesses
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
            <SectionLabel>Selected projects</SectionLabel>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mt-4 max-w-2xl text-4xl leading-tight md:text-6xl"
            >
              Real businesses,{" "}
              <span className="italic text-primary">real results</span>.
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
                <div className="shrink-0 text-right">
                  <div className="text-xs text-muted-foreground">{p.year}</div>
                  <div className="mt-1 text-sm font-medium text-primary">{p.result}</div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const row = [...testimonials, ...testimonials, ...testimonials];
  return (
    <section className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Testimonials</SectionLabel>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mt-4 max-w-3xl text-4xl leading-tight md:text-6xl"
        >
          What clients have to <span className="italic text-primary">say</span>.
        </motion.h2>
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div className="marquee-track-slow flex shrink-0 gap-5 pr-5">
          {row.map((t, i) => (
            <figure
              key={i}
              className="flex w-[340px] shrink-0 flex-col justify-between rounded-2xl border border-border bg-card p-7 md:w-[420px]"
            >
              <blockquote className="text-pretty text-lg leading-snug">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <img src={t.img} alt="" className="size-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const tiers = [
    {
      name: "Basic",
      price: "₹25,000",
      blurb: "Small local businesses",
      features: ["3–5 pages", "Mobile-friendly", "Contact form", "Google Maps", "2 rounds of revisions"],
      featured: false,
    },
    {
      name: "Professional",
      price: "₹45,000",
      blurb: "Growing businesses",
      features: ["5–7 pages", "Mobile optimized", "Contact + inquiry forms", "Image gallery", "Blog/news section", "4 rounds of revisions"],
      featured: true,
    },
    {
      name: "E-commerce",
      price: "₹65,000",
      blurb: "Online selling",
      features: ["Full product catalog", "Shopping cart", "Online payments", "Order tracking", "5 rounds of revisions"],
      featured: false,
    },
  ];
  return (
    <section id="pricing" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Pricing</SectionLabel>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mt-4 max-w-3xl text-4xl leading-tight md:text-6xl"
        >
          Simple, <span className="italic text-primary">honest</span> pricing.
        </motion.h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          One-time payment. No hidden costs. Pay only for what your business needs.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
              className={`flex flex-col rounded-2xl border p-8 ${
                t.featured
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl">{t.name}</h3>
                {t.featured && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs">
                    <Sparkles className="size-3" /> Most popular
                  </span>
                )}
              </div>
              <p className={`mt-1 text-sm ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {t.blurb}
              </p>
              <div className="mt-8 font-serif text-5xl tracking-tight">{t.price}</div>
              <p className={`mt-1 text-xs ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                One-time payment
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`mt-0.5 size-4 shrink-0 ${t.featured ? "text-primary-foreground" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-10 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm transition ${
                  t.featured
                    ? "bg-primary-foreground text-primary hover:opacity-90"
                    : "border border-border bg-background hover:bg-accent"
                }`}
              >
                Get started
              </a>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          All plans include WhatsApp support for 1 year. Got questions?{" "}
          <a href="#contact" className="underline">Call me — it's free.</a>
        </p>
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
          <a href="tel:+91" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm text-primary transition hover:opacity-90">
            <Phone className="size-4" /> Call me now
          </a>
          <a href="https://wa.me/" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm transition hover:bg-primary-foreground/10">
            <MessageCircle className="size-4" /> WhatsApp
          </a>
        </div>
        <p className="mt-8 text-sm text-primary-foreground/70">
          ☎️ +91 XXXXX XXXXX &nbsp;·&nbsp; ✉️ hello@webdev.tn
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
          <a href="tel:+91" className="inline-flex items-center gap-1.5 hover:text-foreground"><Phone className="size-4" /> Call</a>
          <a href="https://wa.me/" className="inline-flex items-center gap-1.5 hover:text-foreground"><MessageCircle className="size-4" /> WhatsApp</a>
          <a href="mailto:hello@webdev.tn" className="inline-flex items-center gap-1.5 hover:text-foreground"><Mail className="size-4" /> Email</a>
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

// Silence unused import warning when icons are tree-shaken in dev
void Search;
