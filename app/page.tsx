"use client";

import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronRight,
  ClipboardCheck,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Wrench,
} from "lucide-react";
import { QuoteForm } from "./components/quote-form";
import { BUSINESS, serviceCategories, suburbs, SITE_URL } from "./lib/site";
import { trackEvent } from "./lib/tracking";

function PhoneLink({ source, label = BUSINESS.phoneDisplay, className = "contact-link" }: { source: string; label?: string; className?: string }) {
  return (
    <a className={className} href={BUSINESS.phoneHref} onClick={() => trackEvent("phone_click", { source })}>
      <Phone size={15} aria-hidden="true" /> {label}
    </a>
  );
}

function WhatsAppLink({ source, label = "WhatsApp", className = "contact-link" }: { source: string; label?: string; className?: string }) {
  return (
    <a className={className} href={BUSINESS.whatsappHref} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { source })}>
      <MessageCircle size={15} aria-hidden="true" /> {label}
    </a>
  );
}

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    telephone: BUSINESS.phoneDisplay,
    url: SITE_URL,
    areaServed: ["Burleigh Heads", "Gold Coast", "Queensland"],
    serviceType: ["Furniture assembly", "Flat pack assembly", "IKEA assembly"],
    description: "Furniture, flat pack and IKEA assembly in Burleigh Heads and surrounding Gold Coast suburbs.",
  };

  return (
    <div className="page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand-lockup" href="#top" aria-label="Gold Coast Furniture Assembly home">
            <span className="brand-mark" aria-hidden="true">GC</span>
            <span className="brand-wordmark">Gold Coast<span>Furniture Assembly</span></span>
          </a>
          <nav className="header-nav" aria-label="Primary navigation">
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#process">How it works</a>
            <a className="nav-link" href="#area">Service area</a>
          </nav>
          <PhoneLink source="header" label="Call / text" className="header-contact" />
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-media" aria-hidden="true">
            <picture>
              <source media="(max-width: 679px)" srcSet="/images/hero-vertical.jpg" />
              <img src="/images/hero-horizontal.jpg" alt="" />
            </picture>
          </div>
          <div className="hero-content">
            <div className="container hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Furniture assembly / Burleigh Heads + Gold Coast</span>
                <h1 id="hero-heading">Bought a flat pack?<br />Send us a <em>photo.</em><br />We&apos;ll build it.</h1>
                <p className="hero-subcopy">You don&apos;t need the model number, a parts list or a plan. Send a photo, your suburb and the product link if you have it. We&apos;ll tell you what it takes.</p>
                <div className="hero-actions">
                  <a className="btn btn--lime" href="#quote" onClick={() => trackEvent("quote_form_start", { source: "hero_cta" })}>Send a photo <span className="btn-arrow">→ Get a quote</span> <ArrowRight size={16} aria-hidden="true" /></a>
                  <div className="contact-pair" aria-label="Call or WhatsApp">
                    <PhoneLink source="hero" label="Call" className="pair-link" />
                    <WhatsAppLink source="hero" label="WhatsApp" className="pair-link" />
                  </div>
                </div>
                <div className="hero-meta" aria-label="Service location">
                  <span>Burleigh Heads</span>
                  <span>Gold Coast</span>
                  <span>Service area by suburb</span>
                </div>
                <span className="hero-evidence">Documented assembly / field note 001</span>
              </div>
              <aside className="quote-card" aria-label="Quick quote call to action">
                <span className="mini-label">Local assembly, made simple</span>
                <h2>You don&apos;t need to know the model.</h2>
                <p>A photo is enough to start. Add your suburb and, if you have it, the product link. We&apos;ll take it from there.</p>
                <a className="btn btn--dark" href="#quote" onClick={() => trackEvent("quote_form_start", { source: "hero_card" })}>Send the photo <ArrowDownRight size={16} aria-hidden="true" /></a>
                <div className="operator-line"><span className="operator-dot" aria-hidden="true" /> Caio / Burleigh Heads</div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section--paper-bright problem-section" aria-labelledby="problem-heading">
          <div className="container problem-grid">
            <div className="problem-photo">
              <span className="manual-ref">Ref. 01 / The friction</span>
              <img src="/images/assembly-detail.jpg" alt="Furniture being assembled in a bright Gold Coast home" loading="lazy" />
              <span className="photo-caption">The work between buying & enjoying</span>
            </div>
            <div className="problem-copy">
              <span className="section-kicker">The problem</span>
              <h2 className="section-title" id="problem-heading">Your new furniture shouldn&apos;t come with a <em>second job.</em></h2>
              <p className="body-lede">Boxes. Instructions. Hundreds of parts. Allen keys. Hours of your weekend.</p>
              <div className="problem-list">
                <div className="problem-item">Instructions</div>
                <div className="problem-item">Hundreds of parts</div>
                <div className="problem-item">Allen keys</div>
                <div className="problem-item">Your Saturday</div>
              </div>
              <p className="problem-end">You bought the furniture.<br />You don&apos;t have to build it.</p>
            </div>
          </div>
        </section>

        <section className="section section--dark service-section" id="services" aria-labelledby="services-heading">
          <div className="container">
            <div className="service-heading">
              <div>
                <span className="manual-ref">Ref. 02 / Scope of work</span>
                <span className="section-kicker">What we assemble</span>
                <h2 className="section-title" id="services-heading">If it comes in a box, send it <em>our way.</em></h2>
              </div>
              <p className="body-lede">From one stubborn bedside table to a full room of flat-pack furniture, send the details and we&apos;ll review what&apos;s involved.</p>
            </div>
            <div className="service-grid">
              {serviceCategories.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-card-top">
                    <span className="service-index">0{index + 1}</span>
                    <ChevronRight size={17} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.detail}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="service-footnote"><span>IKEA</span><span>Kmart</span><span>Bunnings</span><span>Fantastic Furniture</span><span>Marketplace</span><span>and more</span></p>
          </div>
        </section>

        <section className="section quote-section" aria-labelledby="quote-why-heading">
          <div className="container quote-layout">
            <div>
              <span className="manual-ref">Ref. 03 / Quote intake</span>
              <span className="section-kicker">Don&apos;t know the model? No problem.</span>
              <h2 className="section-title" id="quote-why-heading">Photo in.<br /><em>Quote out.</em></h2>
              <p className="quote-explainer">You don&apos;t need the model number, parts list or assembly time. Send what you have and we&apos;ll review the job before we talk timing.</p>
              <div className="quote-checks">
                <span className="quote-check"><Check size={16} aria-hidden="true" /> Product link</span>
                <span className="quote-check"><Check size={16} aria-hidden="true" /> A photo</span>
                <span className="quote-check"><Check size={16} aria-hidden="true" /> Store name</span>
                <span className="quote-check"><Check size={16} aria-hidden="true" /> Your suburb</span>
              </div>
            </div>
            <aside className="quote-panel">
              <span className="quote-panel-label">Send what you know</span>
              <h3>Photo → Quote → Assembly.</h3>
              <p>No complicated booking system. Just the useful details, sent directly to the person reviewing the job.</p>
              <a className="btn btn--lime" href="#quote" onClick={() => trackEvent("quote_form_start", { source: "quote_panel" })}>Get my quote <Send size={16} aria-hidden="true" /></a>
              <small>Once your details are reviewed, we&apos;ll get back to you about the job and availability.</small>
            </aside>
          </div>
        </section>

        <section className="section process-section" id="process" aria-labelledby="process-heading">
          <div className="container process-layout">
            <div>
              <span className="manual-ref">Ref. 04 / Job sequence</span>
              <span className="section-kicker">How it works</span>
              <h2 className="section-title" id="process-heading">Photo in.<br /><em>Job done.</em></h2>
              <div className="process-list">
                <article className="process-row">
                  <span className="process-number">01</span>
                  <div><h3>Send the details</h3><p>Send a photo or product link and tell us your suburb.</p></div>
                </article>
                <article className="process-row">
                  <span className="process-number">02</span>
                  <div><h3>We review it</h3><p>We check what you&apos;re asking us to assemble and what the job involves.</p></div>
                </article>
                <article className="process-row">
                  <span className="process-number">03</span>
                  <div><h3>Get your quote</h3><p>We come back with the details so you know the next step before anything is booked.</p></div>
                </article>
                <article className="process-row">
                  <span className="process-number">04</span>
                  <div><h3>We build it</h3><p>Once confirmed, we arrange a suitable time. You get your weekend back.</p></div>
                </article>
              </div>
            </div>
            <aside className="process-side">
              <img src="/images/flatpack-parts.jpg" alt="Furniture assembly tools and a flat-pack drawer unit" loading="lazy" />
              <div className="process-side-copy">
                <h3>Less time decoding instructions. More time using the room.</h3>
                <p>We remove the work between buying the furniture and enjoying it.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section proof-section" aria-labelledby="proof-heading">
          <div className="container proof-layout">
            <div className="proof-intro">
              <span className="manual-ref">Ref. 05 / Customer handover</span>
              <span className="section-kicker">Why this is easier</span>
              <h2 className="section-title" id="proof-heading">No marketplace maze.<br /><em>Just the next step.</em></h2>
              <p className="body-lede">You already bought the furniture. You should not have to write a technical brief, guess the assembly time or negotiate with a list of strangers.</p>
            </div>
            <div className="proof-stack">
              <article className="proof-card"><span className="proof-index">01</span><div><h3>Send what you have</h3><p>A photo, your suburb and the product link if you have it are enough to start.</p></div></article>
              <article className="proof-card"><span className="proof-index">02</span><div><h3>Speak to one local point of contact</h3><p>Your details go directly to the person reviewing the job, not into a public marketplace queue.</p></div></article>
              <article className="proof-card"><span className="proof-index">03</span><div><h3>Know what happens next</h3><p>We review the job first, then come back with the details before anything is booked.</p></div></article>
              <p className="proof-note">Real customer feedback will be added here as it is collected. For now, the promise is simple: photo → quote → assembly.</p>
            </div>
          </div>
        </section>

        <section className="section section--paper-bright care-section" aria-labelledby="care-heading">
          <div className="container care-grid">
            <div>
              <span className="manual-ref">Ref. 05 / Handover standard</span>
              <span className="section-kicker">The way we work</span>
              <h2 className="section-title" id="care-heading">Built carefully.<br /><em>Left clean.</em></h2>
              <div className="care-list">
                <article className="care-card"><Wrench size={21} aria-hidden="true" /><div><h3>We bring our own tools.</h3><p>Ready to work through the job without asking you to find the right bit.</p></div></article>
                <article className="care-card"><ClipboardCheck size={21} aria-hidden="true" /><div><h3>We follow the product instructions.</h3><p>The manual is there for a reason. We use it to keep the build on track.</p></div></article>
                <article className="care-card"><Home size={21} aria-hidden="true" /><div><h3>We work carefully in your home.</h3><p>Assembly happens where you need the furniture, with care for the space around it.</p></div></article>
                <article className="care-card"><Sparkles size={21} aria-hidden="true" /><div><h3>We leave the workspace tidy.</h3><p>Fewer loose screws, cardboard and packaging left behind after the job.</p></div></article>
              </div>
            </div>
            <aside className="care-aside">
              <img className="care-aside-image" src="/images/tidy-finish.jpg" alt="Light oak furniture being assembled in a bright coastal home" loading="lazy" />
              <span className="mini-label">A better handover</span>
              <h3>The room should feel finished, not halfway there.</h3>
              <p>Furniture assembly is the last practical step between delivery day and getting on with your life.</p>
              <a className="btn btn--dark" href="#quote" onClick={() => trackEvent("quote_form_start", { source: "care_section" })}>Send the details <ArrowRight size={16} aria-hidden="true" /></a>
            </aside>
          </div>
        </section>

        <section className="section section--dark area-section" id="area" aria-labelledby="area-heading">
          <div className="container area-layout">
            <div className="area-copy">
              <span className="manual-ref">Ref. 06 / Local coverage</span>
              <span className="section-kicker">Service area</span>
              <h2 className="section-title" id="area-heading">Local to Burleigh Heads.<br /><em>Serving the Gold Coast.</em></h2>
              <p className="body-lede">We&apos;re based in Burleigh Heads and serve surrounding Gold Coast suburbs. Tell us where you are and we&apos;ll confirm availability for your suburb.</p>
              <div className="area-badge"><MapPin size={15} aria-hidden="true" /> Ask us about your suburb</div>
            </div>
            <div className="suburb-list" aria-label="Surrounding suburbs to ask us about">
              {suburbs.map((suburb) => <span className="suburb-pill" key={suburb}>{suburb}</span>)}
              <p className="area-note">This is a guide to nearby areas, not a promise that every job is currently available.</p>
            </div>
          </div>
        </section>

        <section className="section section--compact retailer-section" aria-labelledby="retailer-heading">
          <div className="container retailer-layout">
            <span className="retailer-label">Ref. 07 / Future direction</span>
            <h2 id="retailer-heading">Sell the furniture.<br /><em>We handle the assembly.</em></h2>
            <div>
              <p>A future service area for furniture retailers, online stores, property managers and office suppliers. No current partnerships are implied.</p>
              <a className="retailer-link" href="#quote" onClick={() => trackEvent("quote_form_start", { source: "retailer_section" })}>Talk about a future job <ArrowRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="section form-section" id="quote" aria-labelledby="form-heading">
          <div className="container form-layout">
            <div className="form-heading">
              <span className="manual-ref">Ref. 08 / Start a conversation</span>
              <span className="section-kicker">Ready when you are</span>
              <h2 className="section-title" id="form-heading">Send the details.<br /><em>Get the next step.</em></h2>
              <p className="body-lede">Don&apos;t know the model? No problem. Send a photo, your suburb and the product link if you have it. We&apos;ll take it from there.</p>
              <div className="form-aside">
                <p>Prefer to talk? Call, text or send a WhatsApp message directly.</p>
                <div className="contact-links">
                  <PhoneLink source="form_aside" />
                  <WhatsAppLink source="form_aside" />
                </div>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a className="brand-lockup" href="#top" aria-label="Back to top">
                <span className="brand-mark" aria-hidden="true">GC</span>
                <span className="brand-wordmark">Gold Coast<span>Furniture Assembly</span></span>
              </a>
              <p className="footer-tagline">The straightforward way to move from flat pack delivery to furniture you can actually use.</p>
            </div>
            <div className="footer-col">
              <h3>Contact</h3>
              <PhoneLink source="footer" />
              <WhatsAppLink source="footer" />
            </div>
            <div className="footer-col">
              <h3>Based in</h3>
              <p>Burleigh Heads<br />Gold Coast, Queensland</p>
              <a href="#area">Ask about your suburb <ArrowRight size={13} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {BUSINESS.name}</span>
            <span>Furniture assembly • Flat pack assembly • IKEA assembly</span>
          </div>
        </div>
      </footer>

      <nav className="mobile-bar" aria-label="Quick contact actions">
        <PhoneLink source="mobile_bar" label="Call" className="mobile-bar-link" />
        <WhatsAppLink source="mobile_bar" label="WhatsApp" className="mobile-bar-link" />
        <a href="#quote" onClick={() => trackEvent("quote_form_start", { source: "mobile_bar" })}>Get a quote</a>
      </nav>
    </div>
  );
}
