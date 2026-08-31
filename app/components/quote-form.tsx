"use client";

import { CheckCircle2, Paperclip, Send, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { BUSINESS } from "../lib/site";
import { trackEvent } from "../lib/tracking";

export function QuoteForm() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [photoName, setPhotoName] = useState("");

  function handleStart() {
    if (!started) {
      setStarted(true);
      trackEvent("quote_form_start");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || "Not provided");
    const message = [
      "Hi, I'd like a furniture assembly quote.",
      "",
      `Name: ${value("name")}`,
      `Suburb: ${value("suburb")}`,
      `Phone: ${value("phone")}`,
      `Furniture: ${value("furniture")}`,
      `Store/Brand: ${value("store")}`,
      `Number of items: ${value("items")}`,
      `Preferred date: ${value("date")}`,
      `Product link: ${value("link")}`,
      `Additional details: ${value("details")}`,
      `Photo: ${photoName ? `${photoName} (please attach in WhatsApp)` : "To be attached in WhatsApp"}`,
    ].join("\n");

    trackEvent("quote_form_submit", { furniture: value("furniture"), suburb: value("suburb") });
    trackEvent("lead", { source: "quote_form", suburb: value("suburb") });
    setSubmitted(true);
    window.open(`${BUSINESS.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <CheckCircle2 size={34} strokeWidth={1.6} aria-hidden="true" />
        <h3>Your message is ready.</h3>
        <p>WhatsApp should have opened with your details. Add the furniture photo there and send it through.</p>
        <a className="btn btn--lime" href={BUSINESS.whatsappHref} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { source: "form_success" })}>
          Open WhatsApp <Send size={16} aria-hidden="true" />
        </a>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} onFocus={handleStart}>
      <div className="form-grid">
        <div className="form-field form-field--wide form-field--first">
          <label className="form-label" htmlFor="photo">1. Send a photo</label>
          <input className="form-control file-control" id="photo" name="photo" type="file" accept="image/*" onChange={(event) => setPhotoName(event.target.files?.[0]?.name || "")} />
          <p className="file-note"><Paperclip size={13} aria-hidden="true" /> {photoName ? `${photoName} selected. Attach it in WhatsApp after the message opens.` : "Optional here. Attach the photo in WhatsApp after the message opens."}</p>
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="suburb">2. Your suburb</label>
          <input className="form-control" id="suburb" name="suburb" placeholder="e.g. Palm Beach" required />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="link">3. Product link, if you have it</label>
          <input className="form-control" id="link" name="link" type="url" placeholder="Paste the product URL" />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="furniture">Furniture type</label>
          <select className="form-control" id="furniture" name="furniture" defaultValue="" required>
            <option value="" disabled>Select a type</option>
            <option>Bed</option>
            <option>Wardrobe</option>
            <option>Desk</option>
            <option>Drawers</option>
            <option>TV unit</option>
            <option>Shelving</option>
            <option>Outdoor furniture</option>
            <option>Gym equipment</option>
            <option>Other / multiple items</option>
          </select>
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="name">Name</label>
          <input className="form-control" id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="phone">Phone</label>
          <input className="form-control" id="phone" name="phone" type="tel" placeholder="Best number to reach you" required />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="store">Store / Brand</label>
          <input className="form-control" id="store" name="store" placeholder="e.g. IKEA, Kmart, Bunnings" />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="items">Number of items</label>
          <input className="form-control" id="items" name="items" type="number" min="1" placeholder="1" />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="date">Preferred date</label>
          <input className="form-control" id="date" name="date" type="date" />
        </div>
        <div className="form-field form-field--wide">
          <label className="form-label" htmlFor="details">Additional details</label>
          <textarea className="form-control" id="details" name="details" placeholder="Anything we should know about the job?" />
        </div>
        <div className="form-field form-field--wide">
          <button className="btn btn--lime form-submit" type="submit">
            Get my quote <Send size={16} aria-hidden="true" />
          </button>
          <p className="form-footnote"><Sparkles size={12} aria-hidden="true" /> No complicated booking system. Just send the details.</p>
        </div>
      </div>
    </form>
  );
}
